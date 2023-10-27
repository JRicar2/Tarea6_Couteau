import { Component, OnInit } from '@angular/core';
import { WeatherService, Location } from '../services/weather.service';
import { ModalController } from '@ionic/angular';
import { WeathermodalPage } from '../weathermodal/weathermodal.page';

@Component({
  selector: 'app-weather-rd',
  templateUrl: './weather-rd.page.html',
  styleUrls: ['./weather-rd.page.scss'],
})
export class WeatherRDPage implements OnInit {
  selectedCity: string='';

  constructor(private location: WeatherService, private modalController: ModalController) { }
  
  getLocations(): Location[]{
    return this.location.getLocations();
  }
  
  ngOnInit() {
  }

  setSelectedCity(city: string) {
    this.selectedCity = city;
    this.getWeather();
  }

  async getWeather(){
    const modal = await this.modalController.create({
      component: WeathermodalPage,
      componentProps: {
        city: this.selectedCity
      },
    });
    return await modal.present();
  }

}
