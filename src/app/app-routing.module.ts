import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'ticket-list',
    loadChildren: () => import('./pages/ticket-list/ticket-list.module').then(m => m.TicketListPageModule)
  },
  {
    path: 'ticket-confirm',
    loadChildren: () => import('./pages/ticket-confirm/ticket-confirm.module').then(m => m.TicketConfirmPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'payment-confirm',
    loadChildren: () => import('./pages/payment-confirm/payment-confirm.module').then(m => m.PaymentConfirmPageModule)
  },
  {
    path: 'ticket-success',
    loadChildren: () => import('./pages/ticket-success/ticket-success.module').then(m => m.TicketSuccessPageModule)
  },
  {
    path: 'historic',
    loadChildren: () => import('./pages/historic/historic.module').then(m => m.HistoricPageModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
