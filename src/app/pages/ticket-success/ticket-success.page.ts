import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-success',
  templateUrl: './ticket-success.page.html',
  styleUrls: ['./ticket-success.page.scss'],
})
export class TicketSuccessPage implements OnInit {

  ticketGeneratedIdQRCode = '';

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.ticketGeneratedIdQRCode = params.historicId;
      console.log('Ticket gerado com o ID de histórico: ', params.historicId);
    });
  }

}
