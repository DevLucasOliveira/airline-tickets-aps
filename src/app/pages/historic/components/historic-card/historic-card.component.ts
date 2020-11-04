import { Historic } from './../../../../../shared/historic';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-historic-card',
  templateUrl: './historic-card.component.html',
  styleUrls: ['./historic-card.component.scss'],
})
export class HistoricCardComponent implements OnInit {

  @Input() historic: Historic;

  constructor() { }

  ngOnInit() {
  }

}
