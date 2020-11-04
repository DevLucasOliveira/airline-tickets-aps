import { HistoricCardComponent } from './components/historic-card/historic-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricPageRoutingModule } from './historic-routing.module';

import { HistoricPage } from './historic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricPageRoutingModule
  ],
  declarations: [HistoricPage, HistoricCardComponent]
})
export class HistoricPageModule { }
