import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/shared/services/http.service';

@Injectable({
    providedIn: 'root'
})
export class TicketService {

    constructor(
        private http: HttpService,
    ) { }

    addTicket(model): Observable<any> {
        return this.http.post(`tickets`, model);
    }

    updateTicket(ticketId, model): Observable<any> {
        return this.http.put(`tickets/${ticketId}`, model);
    }

    getTicketById(ticketId): Observable<any> {
        return this.http.get(`tickets/${ticketId}`);
    }

    getTickets(): Observable<any[]> {
        return this.http.get(`tickets`);
    }


}
