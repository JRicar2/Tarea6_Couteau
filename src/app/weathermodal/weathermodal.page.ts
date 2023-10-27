import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-weathermodal',
  templateUrl: './weathermodal.page.html',
  styleUrls: ['./weathermodal.page.scss'],
})
export class WeathermodalPage implements OnInit {
  weather: any = '';
  cityname = '';
  temperature = '';
  condition = '';
  humidity = '';
  feelslike = '';
  wind = '';
  @Input() city: string="";

  constructor(private weatherService: WeatherService, private modalController: ModalController) { 
    
  }

  ngOnInit() {
    this.getWeather(this.city);
  }

  getWeather(location: string){
    this.weatherService.getWeather(location).subscribe((data) => {
      this.weather = data;
      this.cityname = this.weather.location.name;
      this.temperature = this.weather.current.temp_c;
      this.condition = this.weather.current.condition.text;
      this.humidity = this.weather.current.humidity;
      this.feelslike = this.weather.current.feelslike_c;
      this.wind = this.weather.current.wind_kph;
    });
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
