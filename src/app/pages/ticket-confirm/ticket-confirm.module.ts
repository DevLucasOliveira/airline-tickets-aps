import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketConfirmPageRoutingModule } from './ticket-confirm-routing.module';

import { TicketConfirmPage } from './ticket-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketConfirmPageRoutingModule
  ],
  declarations: [TicketConfirmPage]
})
export class TicketConfirmPageModule {}
