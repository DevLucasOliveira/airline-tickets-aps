import { TicketService } from '../../services/ticket.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {FilterDTO} from '../../../shared/objects';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: TicketService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(){
    this.form = this.formBuilder.group({
      origin: [''],
      destiny: [''],
      travelDate: [''],
      returnDate: [''],
      totalPeople: [''],
      onlyTravel: [''],
    });
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

    this.save(filterDTO);
  }


  save(filterDTO: FilterDTO){
    console.log(filterDTO);
    this.service.addTicket(filterDTO).subscribe(
      (result) => {
        console.log(result);
      },
      (err) => {
        console.log(err);
      });
  }

}
