import { CovidStatus } from './../../models/covid-status';
import { CovidService } from './../../services/covid.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/shared/objects';

@Component({
  selector: 'app-ticket-success',
  templateUrl: './ticket-success.page.html',
  styleUrls: ['./ticket-success.page.scss'],
})
export class TicketSuccessPage implements OnInit {

  currentCovidStatus: CovidStatus;
  ticketGeneratedIdQRCode = '';
  ticket: Ticket = new Ticket();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private covidService: CovidService
  ) {
    this.route.queryParams.subscribe(params => {
      this.ticket = JSON.parse(params.card);
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.ticketGeneratedIdQRCode = params.historicId;
    });

    this.covidService.getCovidStatus(this.ticket.filter.destiny).subscribe(response => {
      this.currentCovidStatus = response;
      console.log(this.currentCovidStatus);
    });
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
