import { CovidStatus } from './../../models/covid-status';
import { CovidService } from './../../services/covid.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-success',
  templateUrl: './ticket-success.page.html',
  styleUrls: ['./ticket-success.page.scss'],
})
export class TicketSuccessPage implements OnInit {

  currentCovidStatus: CovidStatus;
  ticketGeneratedIdQRCode = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private covidService: CovidService
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.ticketGeneratedIdQRCode = params.historicId;
    });

    this.covidService.getCovidStatus('sp').subscribe(response => {
      this.currentCovidStatus = response;
      console.log(this.currentCovidStatus);
    });
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
