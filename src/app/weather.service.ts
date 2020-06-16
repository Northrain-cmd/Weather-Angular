import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weather = new EventEmitter();
  notFound = new EventEmitter();
  async getWeather(city) {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${environment.openWeather}`);
      const data = await response.json();
      this.weather.emit(data);
  }

   getIcon(code) {
    const iconUrl = `http://openweathermap.org/img/wn/${code}@2x.png`;
    return iconUrl;

  }
  constructor() { 
   
  }
}
