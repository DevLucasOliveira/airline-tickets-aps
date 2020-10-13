import { Component, OnInit } from '@angular/core';
import {Ticket} from '../../../shared/objects';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-payment-confirm',
  templateUrl: './payment-confirm.page.html',
  styleUrls: ['./payment-confirm.page.scss'],
})
export class PaymentConfirmPage implements OnInit {

  ticket: Ticket = new Ticket();
  priceTotal = 0;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.ticket = JSON.parse(params.ticket);
      this.calculateTravelTotalPrice();
    });
  }

  ngOnInit() {
  }

  calculateTravelTotalPrice() {
    this.priceTotal = this.ticket.travelPrice
        + this.ticket.extras.priceHotel
        + this.ticket.extras.priceBaggage;
  }
}
