import { CovidService } from './../../services/covid.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketSuccessPageRoutingModule } from './ticket-success-routing.module';

import { TicketSuccessPage } from './ticket-success.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketSuccessPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [TicketSuccessPage],
  providers: [CovidService]
})
export class TicketSuccessPageModule { }
