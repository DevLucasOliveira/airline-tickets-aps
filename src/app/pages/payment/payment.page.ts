import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Ticket} from '../../../shared/objects';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  form: FormGroup;
  ticket: Ticket = new Ticket();
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.buildForm();
    this.route.queryParams.subscribe(params => {
      this.ticket = JSON.parse(params.ticket);
    });
  }

  ngOnInit() {
  }

  buildForm() {
    this.form = this.formBuilder.group({
      cardholderName: ['', Validators.required],
      number: ['', Validators.required],
      cvv: ['', Validators.required],
      installments: [1, Validators.required],
      expirationDate: [0, Validators.required]
    });
  }

  onConfirm() {
    this.submitted = true;
    if (this.form.invalid)
      return;

    const navigationExtras: NavigationExtras = {
      queryParams: {
        card: JSON.stringify(this.form.value)
      }
    };

    this.router.navigate(['ticket-success'], navigationExtras);
  }


  onBack() {
    this.location.back();
  }
}
