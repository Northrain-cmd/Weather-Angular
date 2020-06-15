import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {
  weatherData;
  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
    this.weatherService.weather.subscribe(weather => this.weatherData = weather);
  }

}
