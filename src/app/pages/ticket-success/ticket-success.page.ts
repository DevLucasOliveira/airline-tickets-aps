import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-success',
  templateUrl: './ticket-success.page.html',
  styleUrls: ['./ticket-success.page.scss'],
})
export class TicketSuccessPage implements OnInit {

  ticketGeneratedIdQRCode = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.ticketGeneratedIdQRCode = params.historicId;
    });
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
