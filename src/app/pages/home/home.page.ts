import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FilterDTO, State } from '../../../shared/objects';
import { StateService } from 'src/shared/services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  filter: FilterDTO = new FilterDTO();
  submitted = false;
  states: State[] = [];

  date = new Date().toJSON().split('T')[0];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private stateService: StateService
  ) {
  }

  ngOnInit() {
    this.getFilter();
    this.getStates();
  }

  getFilter() {
    this.route.queryParams.subscribe(params => {
      if (params.card) {
        this.filter = JSON.parse(params.card);
      }
    });
  }

  getStates() {
    this.stateService.getAll().subscribe(
      response => {
        this.states = response;
      }
    )
  }


  search() {
    this.submitted = true;
    if (this.isValidFilter()) {
      this.navigate(this.filter);
    }
  }

  isValidFilter() {
    return this.filter.origin &&
      this.filter.destiny &&
      this.filter.totalPeople &&
      this.filter.travelDate;
  }

  navigate(filterDTO: FilterDTO) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        card: JSON.stringify(filterDTO)
      }
    };

    this.router.navigate(['ticket-list'], navigationExtras);
  }


  onOnlyTravelChange() {
    if (!this.filter.onlyTravel) {
      this.filter.returnDate = null;
    }
  }
}
