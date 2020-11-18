import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CovidStatus } from '../models/covid-status';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(
    private http: HttpService
  ) { }

  getCovidStatus(): Observable<any> {
    return this.http.get(`report/v1`);
  }
}
