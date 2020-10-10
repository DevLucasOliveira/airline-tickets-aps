import { ActivatedRoute } from '@angular/router';
import { TicketService } from './../../services/ticket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.page.html',
  styleUrls: ['./ticket-list.page.scss'],
})
export class TicketListPage implements OnInit {

  filter: any;

  constructor(
    private service: TicketService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getIdByParams();
  }

  getIdByParams(){
    this.route.params.subscribe(
      (params) => {
        this.getFilterById(params.id);
      });
  }

  getFilterById(id){
    this.service.getTicketById(id).subscribe(
      (result) => {
        this.filter = result;
        console.log(result);
      },
      (err) => {
        console.log(err);
      });
  }

}
