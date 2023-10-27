import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeathermodalPageRoutingModule } from './weathermodal-routing.module';

import { WeathermodalPage } from './weathermodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeathermodalPageRoutingModule
  ],
  declarations: [WeathermodalPage]
})
export class WeathermodalPageModule {}
