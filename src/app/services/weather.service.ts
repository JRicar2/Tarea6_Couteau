import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Location {
  Id: number;
  city: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey: string = 'WEATHERAPI_API_KEY';
  baseURL: string = 'https://api.weatherapi.com/v1/';

  public locations: Location[] = [
    {
      Id: 1,
      city: "Santo Domingo"
    },
    {
      Id: 2,
      city: "Santiago de los Caballeros"
    },
    {
      Id: 3,
      city: "San Pedro de Macoris"
    },
    {
      Id: 4,
      city: "La Romana"
    },
    {
      Id: 5,
      city: "Bonao"
    }
  ];

  constructor(private http: HttpClient) { }

  getWeather(city: string){
    return this.http.get(`${this.baseURL}current.json?key=${this.apiKey}&q=${city}&lang=es&aqi=no`)
  }

  public getLocations(): Location[] {
    return this.locations;
  }

  public getLocationsbyId(locationId: number): Location{
    return this.locations[locationId];
  }
}
