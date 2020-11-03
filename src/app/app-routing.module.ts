import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'home',
    component: AppComponent,
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'ticket-list',
    component: AppComponent,
    loadChildren: () => import('./pages/ticket-list/ticket-list.module').then(m => m.TicketListPageModule)
  },
  {
    path: 'ticket-confirm',
    component: AppComponent,
    loadChildren: () => import('./pages/ticket-confirm/ticket-confirm.module').then(m => m.TicketConfirmPageModule)
  },
  {
    path: 'payment',
    component: AppComponent,
    loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'payment-confirm',
    component: AppComponent,
    loadChildren: () => import('./pages/payment-confirm/payment-confirm.module').then(m => m.PaymentConfirmPageModule)
  },
  {
    path: 'ticket-success',
    component: AppComponent,
    loadChildren: () => import('./pages/ticket-success/ticket-success.module').then(m => m.TicketSuccessPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
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
