import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router) { }

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
    if (this.hotelNights > 0) {
      this.hotelNights--;
      this.calculateHotelPrice();
    }
  }

  calculateHotelPrice() {
    this.hotelPriceTotal = this.hotelNightPrice * this.hotelNights;
  }

  goToPaymentConfirm() {
    this.router.navigateByUrl('payment-confirm');
  }

  changeFood() {
    if (this.hasFood)
      this.hotelPriceTotal -= this.food;
    else
      this.hotelPriceTotal += this.food;
  }

}
