import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FilterDTO } from '../../../shared/objects';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  filter: FilterDTO = new FilterDTO();
  submitted = false;

  date = new Date().toJSON().split('T')[0];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.getFilter();
  }

  getFilter() {
    this.route.queryParams.subscribe(params => {
      if (params.card) {
        this.filter = JSON.parse(params.card);
      }
    });
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
