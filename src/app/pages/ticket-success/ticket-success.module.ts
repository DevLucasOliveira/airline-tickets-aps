import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketSuccessPageRoutingModule } from './ticket-success-routing.module';

import { TicketSuccessPage } from './ticket-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketSuccessPageRoutingModule
  ],
  declarations: [TicketSuccessPage]
})
export class TicketSuccessPageModule {}
