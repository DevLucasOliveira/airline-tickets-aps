import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-success',
  templateUrl: './ticket-success.page.html',
  styleUrls: ['./ticket-success.page.scss'],
})
export class TicketSuccessPage implements OnInit {

  qrcode = "Aqui deve ser colocado o valor para se transformar em QR Code";

  constructor() { }

  ngOnInit() {
  }

}