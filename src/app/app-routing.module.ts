import { AuthGuard } from './../shared/guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'ticket-list',
    loadChildren: () => import('./pages/ticket-list/ticket-list.module').then(m => m.TicketListPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'ticket-confirm',
    loadChildren: () => import('./pages/ticket-confirm/ticket-confirm.module').then(m => m.TicketConfirmPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'payment-confirm',
    loadChildren: () => import('./pages/payment-confirm/payment-confirm.module').then(m => m.PaymentConfirmPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'ticket-success',
    loadChildren: () => import('./pages/ticket-success/ticket-success.module').then(m => m.TicketSuccessPageModule),
    canActivate: [AuthGuard]
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
    path: 'historic',
    loadChildren: () => import('./pages/historic/historic.module').then(m => m.HistoricPageModule),
    canActivate: [AuthGuard]
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
