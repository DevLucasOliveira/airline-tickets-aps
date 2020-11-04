import { CacheService } from './../../../shared/services/cache.service';
import { Historic } from './../../../shared/historic';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.page.html',
  styleUrls: ['./historic.page.scss'],
})
export class HistoricPage implements OnInit {

  historics: Historic[];

  constructor(private cacheService: CacheService<Historic>) { }

  ngOnInit() {
    this.historics = this.cacheService.getAll('historic');
  }

}
