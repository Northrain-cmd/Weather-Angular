import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  searchTerm:string;
  onSubmit() {
    this.weatherService.getWeather(this.searchTerm);;
  }
  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
  }

}
