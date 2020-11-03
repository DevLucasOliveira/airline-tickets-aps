import { TestBed } from '@angular/core/testing';

import { CacheService } from './cache.service';
import {FilterDTO, Ticket, TravelExtras} from '../objects';

describe('CacheService', () => {
  let service: CacheService<Ticket>;
  let ticketMock: Ticket;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheService);
    ticketMock = new Ticket();
    ticketMock.priceTotal = 11.11;
    ticketMock.travelPrice = 22.22;
    ticketMock.filter = new FilterDTO();
    ticketMock.extras = new TravelExtras();
    ticketMock.placePicture = 'Bahia';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('insert new ticket', () => {
    const inserted = service.set('ticketTeste', ticketMock);
    expect(inserted).toBeTruthy();
  });

  it('searching ticket', () => {
    const ticketResult: Ticket = service.get('ticketTeste');
    expect(ticketResult.travelPrice).toEqual(ticketMock.travelPrice);
  });

  it('removing ticket', () => {
    service.set('ticketTeste', ticketMock);
    const removed = service.remove('ticketTeste');
    expect(removed).toBeTruthy();
  });

  afterEach(() => {
    service.remove('ticketTeste');
  });

});
