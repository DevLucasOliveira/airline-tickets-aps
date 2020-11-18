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

  covidStatus: CovidStatus[] = [];
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

    this.covidService.getCovidStatus().subscribe(response => {
      Object.assign(this.covidStatus, response.data);
      this.currentCovidStatus = this.covidStatus.find(status => status.uf == 'MG');
      console.log(this.currentCovidStatus);
    });
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
