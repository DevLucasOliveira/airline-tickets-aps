import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FilterDTO, Ticket, TravelExtras} from '../../../shared/objects';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.page.html',
  styleUrls: ['./ticket-list.page.scss'],
})
export class TicketListPage implements OnInit {

  private readonly TOTAL_TICKETS_IN_LIST = 5;

  filter: FilterDTO = new FilterDTO();
  ticketsToBuy: Ticket[] = [];


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.getFilter();
  }

  getFilter() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.filter = JSON.parse(params.card);
      for (let i = 0; i < this.TOTAL_TICKETS_IN_LIST; i++) {
        this.ticketsToBuy.push({
          extras: new TravelExtras(),
          filter: this.filter,
          travelPrice: this.generateRandomPrice(this.filter.totalPeople)
        });
      }
    });
  }

  edit() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        card: JSON.stringify(this.filter)
      }
    };

    this.router.navigate(['home'], navigationExtras);
  }

  generateRandomPrice(totalPeople: number) {
    const minPrice = 100;
    const maxPrice = 500;

    return Math.floor(Math.random() * (maxPrice - minPrice + 1) + minPrice) * totalPeople;
  }

  getDays(ticket: Ticket) {
    return (ticket.filter.travelDate.valueOf() - ticket.filter.returnDate.valueOf());
  }
}
