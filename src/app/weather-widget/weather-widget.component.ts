import { Component, OnInit} from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {
  weatherData;
  showError = false;
  celcius = true;
  temp:string;
  feels_like:string;
  isLoading = true;
  constructor(public weatherService:WeatherService) { }
  changeMode() {
    this.celcius = ! this.celcius;
    if (this.celcius === false) {
      this.temp = (this.weatherData.main.temp*(9/5)+32).toFixed(1)+'\u00B0\F';
      this.feels_like = (this.weatherData.main.feels_like*(9/5)+32).toFixed(1)+'\u00B0\F';
    } 
    else{
      this.temp = this.weatherData.main.temp.toFixed(1)+'\u00B0\C';
      this.feels_like = this.weatherData.main.feels_like.toFixed(1)+'\u00B0\C';
    }
  }
  ngOnInit(): void {
    this.weatherService.getLocation();
    this.weatherService.weather.subscribe(weather => {
      console.log(weather);
      this.isLoading = false;
      if(weather.weather) {
        this.showError = false;
        this.weatherData = weather;
        this.temp = this.weatherData.main.temp.toFixed(1)+'\u00B0\C';
        this.feels_like = this.weatherData.main.feels_like.toFixed(1)+'\u00B0\C';
      }
      else {
        this.showError = true;
        this.weatherData = undefined;
      }
    }, error => console.log(error));
  }

}
