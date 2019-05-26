import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import{SMS} from '@ionic-native/sms/ngx'
import { FeedbackPage } from './feedback.page';
import {BrMaskerModule} from "brmasker-ionic-3";
import {NgxMaskIonicModule} from "ngx-mask-ionic";

const routes: Routes = [
  {
    path: '',
    component: FeedbackPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        NgxMaskIonicModule
    ],
    providers:[SMS],
  declarations: [FeedbackPage]
})
export class FeedbackPageModule {}
