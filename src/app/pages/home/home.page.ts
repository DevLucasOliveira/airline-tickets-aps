import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FilterDTO } from '../../../shared/objects';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  form: FormGroup;
  filter: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getFilter();
    this.loadForm();
  }

  getFilter() {
    this.route.queryParams.subscribe(params => {
      this.filter = JSON.parse(params.card);
    });
  }

  buildForm() {
    this.form = this.formBuilder.group({
      origin: [''],
      destiny: [''],
      travelDate: [''],
      returnDate: [''],
      totalPeople: [''],
      onlyTravel: [''],
    });
  }

  loadForm() {
    this.form.controls['origin'].setValue(this.filter.origin);
    this.form.controls['destiny'].setValue(this.filter.destiny);
    this.form.controls['travelDate'].setValue(this.filter.travelDate);
    this.form.controls['returnDate'].setValue(this.filter.returnDate);
    this.form.controls['totalPeople'].setValue(this.filter.totalPeople);
    this.form.controls['onlyTravel'].setValue(this.filter.onlyTravel);
  }

  search() {
    const filterDTO: FilterDTO = {
      origin: this.form.controls.origin.value,
      destiny: this.form.controls.destiny.value,
      travelDate: this.form.controls.travelDate.value,
      returnDate: this.form.controls.returnDate.value,
      totalPeople: this.form.controls.totalPeople.value,
      onlyTravel: false,
    };

    this.navigate(filterDTO);
  }

  navigate(filterDTO: FilterDTO) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        card: JSON.stringify(filterDTO)
      }
    };

    this.router.navigate(['ticket-list'], navigationExtras);
  }


}
