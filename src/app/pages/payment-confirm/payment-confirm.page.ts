import { Component, OnInit } from '@angular/core';
import {Ticket} from '../../../shared/objects';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-payment-confirm',
  templateUrl: './payment-confirm.page.html',
  styleUrls: ['./payment-confirm.page.scss'],
})
export class PaymentConfirmPage implements OnInit {

  ticket: Ticket = new Ticket();
  priceTotal = 0;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private location: Location
  ) {
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

  onBack() {
    this.location.back();
  }

  goToPayment() {
    this.ticket.priceTotal = this.priceTotal;
    const navigationExtras: NavigationExtras = {
      queryParams: {
        ticket: JSON.stringify(this.ticket)
      }
    };

    this.router.navigate(['payment'], navigationExtras);
  }
}
