import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.page.html',
  styleUrls: ['./ticket-list.page.scss'],
})
export class TicketListPage implements OnInit {

  filter: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getFilter();
  }

  getFilter() {
    this.route.queryParams.subscribe(params => {
      this.filter = JSON.parse(params.card);
    });
  }

  edit() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        card: JSON.stringify(this.filter)
      }
    };

    this.router.navigate(['home'], navigationExtras);
  }

}
