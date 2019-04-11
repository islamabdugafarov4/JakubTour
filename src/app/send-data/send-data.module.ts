import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SendDataPage } from './send-data.page';
import {BrMaskerModule} from "brmasker-ionic-3";

const routes: Routes = [
  {
    path: '',
    component: SendDataPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
      BrMaskerModule
  ],
  declarations: [SendDataPage]
})
export class SendDataPageModule {}
