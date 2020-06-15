import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weather = new EventEmitter();
  async getWeather(city) {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${environment.openWeather}`);
      const data = await response.json();
      this.weather.emit(data);
    }
    catch (error) {
      console.log(error);
    }
  
  }
  constructor() { 
   
  }
}
