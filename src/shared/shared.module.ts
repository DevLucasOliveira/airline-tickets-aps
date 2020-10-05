import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FramePageComponent } from './frame/frame';
import { NavbarComponent } from './navbar/navbar.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  declarations: [
    FramePageComponent,
    NavbarComponent,
  ],

})
export class SharedModule { }
