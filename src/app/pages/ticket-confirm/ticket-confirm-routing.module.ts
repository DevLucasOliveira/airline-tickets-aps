import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketConfirmPage } from './ticket-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: TicketConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketConfirmPageRoutingModule {}
