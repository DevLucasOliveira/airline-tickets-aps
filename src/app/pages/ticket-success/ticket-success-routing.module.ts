import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketSuccessPage } from './ticket-success.page';

const routes: Routes = [
  {
    path: '',
    component: TicketSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketSuccessPageRoutingModule {}
