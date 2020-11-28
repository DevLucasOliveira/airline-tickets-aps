import { CacheService } from '../../../shared/services/cache.service';
import { Historic } from '../../../shared/historic';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/shared/user';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.page.html',
  styleUrls: ['./historic.page.scss'],
})
export class HistoricPage implements OnInit {

  historics: Historic[];
  userEmail: string;

  constructor(private historicService: CacheService<Historic>,
              private userService: CacheService<User>,
              private authService: AuthService
  ) {
    this.userEmail = authService.currentUserValue.email;
    this.historics = historicService.getAll('historic');
  }

  ngOnInit() {
  }

}
