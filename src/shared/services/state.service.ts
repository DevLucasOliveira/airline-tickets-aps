import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {State} from '../objects';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private readonly API_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

  constructor(private http: HttpClient) { }

  getAll(): Observable<State[]> {
    return this.http.get<State[]>(this.API_URL);
  }

}
