import { CacheService } from './../../../shared/services/cache.service';
import { Historic } from './../../../shared/historic';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/shared/user';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.page.html',
  styleUrls: ['./historic.page.scss'],
})
export class HistoricPage implements OnInit {

  historics: Historic[];
  userEmail: string;

  constructor(private historicService: CacheService<Historic>, private userService: CacheService<User>) {
    this.userEmail = userService.get('user').email;
    this.historics = historicService.getAll('historic');
  }

  ngOnInit() {
  }

}
