import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FilterDTO, Ticket, TravelExtras } from '../../../shared/objects';
import * as moment from 'moment';

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
    this.route.queryParams.subscribe(params => {
      this.ticketsToBuy = [];
      this.filter = JSON.parse(params.card);
      for (let i = 0; i < this.TOTAL_TICKETS_IN_LIST; i++) {

        let ticket = new Ticket();
        ticket.extras = new TravelExtras();
        ticket.filter = this.filter;
        ticket.travelPrice = this.generateRandomPrice(this.filter.totalPeople);
        ticket.placePicture = this.generateRandomPicture();

        this.ticketsToBuy.push(ticket);
      }
    });

  }

  ngOnInit() {
  }

  getFilter() {
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
    const minRange = 100;
    const maxRange = 500;
    return this.generateRandomInterval(minRange, maxRange) * totalPeople;
  }

  getDays(ticket: Ticket) {
    const travelDate = moment(ticket.filter.travelDate);
    const returnDate = moment(ticket.filter.returnDate);
    return returnDate.diff((travelDate), 'days');
  }

  generateRandomPicture() {
    return `assets/places/lugar-${this.generateRandomInterval(1, 3)}.jpg`;
  }

  generateRandomInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  selectTicket(ticket: Ticket) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        ticket: JSON.stringify(ticket)
      }
    };

    this.router.navigate(['ticket-confirm'], navigationExtras);
  }
}
