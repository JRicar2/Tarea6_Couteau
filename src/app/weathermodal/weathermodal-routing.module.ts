import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeathermodalPage } from './weathermodal.page';

const routes: Routes = [
  {
    path: '',
    component: WeathermodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeathermodalPageRoutingModule {}
