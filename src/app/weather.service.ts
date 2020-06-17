import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weather = new EventEmitter();
  notFound = new EventEmitter();
  getLocation() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        this.getWeather('',longitude,latitude);
      },error => this.getWeather('New York'))
    }  else {
      console.log("Geolocation not supported")
      this.getWeather('New York');
    }
  }
  async getWeather(city, longitude?,latitude?) {
    try {
      let response;
      if(longitude) {
        console.log(latitude,longitude)
         response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${environment.openWeather}`,
        {mode:'cors'})
      } else {
        response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${environment.openWeather}`,
      {mode:'cors'});
      }
       
      const data = await response.json();
      this.weather.emit(data);
    }
    catch(error) {
      console.log(error);
    }
     
  }

   getIcon(code) {
    const iconUrl = `https://openweathermap.org/img/wn/${code}@2x.png`;
    return iconUrl;

  }
  constructor() { 
   
  }
}
