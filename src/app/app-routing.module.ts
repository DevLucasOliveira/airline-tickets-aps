import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FramePageComponent } from 'src/shared/frame/frame';

const routes: Routes = [
  {
    path: 'home',
    component: FramePageComponent,
    data: {
      isHome: true
    },
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'ticket-list',
    component: FramePageComponent,
    loadChildren: () => import('./pages/ticket-list/ticket-list.module').then(m => m.TicketListPageModule)
  },
  {
    path: 'ticket-confirm',
    component: FramePageComponent,
    loadChildren: () => import('./pages/ticket-confirm/ticket-confirm.module').then(m => m.TicketConfirmPageModule)
  },
  {
    path: 'payment',
    component: FramePageComponent,
    loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'payment-confirm',
    component: FramePageComponent,
    loadChildren: () => import('./pages/payment-confirm/payment-confirm.module').then(m => m.PaymentConfirmPageModule)
  },
  {
    path: 'ticket-success',
    component: FramePageComponent,
    loadChildren: () => import('./pages/ticket-success/ticket-success.module').then(m => m.TicketSuccessPageModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
