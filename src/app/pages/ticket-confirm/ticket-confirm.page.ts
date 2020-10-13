import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {Ticket} from '../../../shared/objects';
import {Location} from '@angular/common';

@Component({
  selector: 'app-ticket-confirm',
  templateUrl: './ticket-confirm.page.html',
  styleUrls: ['./ticket-confirm.page.scss'],
})
export class TicketConfirmPage implements OnInit {


  baggages: number = 0;
  baggagePrice: number = 150;
  baggagePriceTotal: number = 0;

  hasFood: boolean = false;
  food: number = 150;
  hotelNights: number = 0;
  hotelNightPrice: number = 200;
  hotelPriceTotal: number = 0;


  ticket: Ticket = new Ticket();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) {
    this.route.queryParams.subscribe(params => {
      this.ticket = JSON.parse(params.ticket);
      console.log(this.ticket);
    });
  }

  ngOnInit() {
  }

  incrementBaggage() {
    this.baggages++;
    this.calculateBaggagePrice();
  }

  decrementBaggage() {
    if (this.baggages > 0) {
      this.baggages--;
      this.calculateBaggagePrice();
    }
  }

  calculateBaggagePrice() {
    this.baggagePriceTotal = this.baggagePrice * this.baggages;
  }

  incrementHotelNight() {
    this.hotelNights++;
    this.calculateHotelPrice();
  }

  decrementHotelNight() {
    if (this.hotelNights === 1) {
      this.hasFood = false;
    }
    if (this.hotelNights > 0) {
      this.hotelNights--;
      this.calculateHotelPrice();
    }
  }

  calculateHotelPrice() {
    this.hotelPriceTotal = this.hotelNightPrice * this.hotelNights;
  }

  goToPaymentConfirm() {
    this.ticket.extras.countTotalHotelDays = this.hotelNights;
    this.ticket.extras.countTotalBaggage = this.baggages;
    this.ticket.extras.priceBaggage = this.baggagePriceTotal;
    this.ticket.extras.priceHotel = this.hotelPriceTotal;
    this.ticket.extras.foodIncluded = this.hasFood;

    const navigationExtras: NavigationExtras = {
      queryParams: {
        ticket: JSON.stringify(this.ticket)
      }
    };

    this.router.navigate(['payment-confirm'], navigationExtras);
  }

  changeFood() {
    if (this.hasFood) {
      this.hotelPriceTotal -= this.food;
    }
    else {
      this.hotelPriceTotal += this.food;
    }
  }

  onBack() {
    this.location.back();
  }
}
