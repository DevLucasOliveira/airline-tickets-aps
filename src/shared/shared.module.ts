import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HttpService } from './services/http.service';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule
    ],
    providers: [HttpService]
})
export class SharedModule { }
