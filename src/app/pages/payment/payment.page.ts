import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.form = this.formBuilder.group({
      cardholderName: ['', Validators.required],
      number: ['', Validators.required],
      cvv: ['', Validators.required],
      installments: [0, Validators.required],
      expirationDate: [0, Validators.required]
    });
  }

  onConfirm() {
    if (this.form.invalid)
      return;

    const navigationExtras: NavigationExtras = {
      queryParams: {
        card: JSON.stringify(this.form.value)
      }
    };

    this.router.navigate(['ticket-success'], navigationExtras);
  }

}
