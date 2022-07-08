import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css'],
})
export class TempComponent implements OnInit {
  constructor(private _weatherService: WeatherService) {}

  cityname : string = 'Wellington';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityname);
  }

  onsubmit() {
    this.getWeatherData(this.cityname);
    this.cityname = '';
  }

  private getWeatherData(cityName: string) {
    this._weatherService.getweatherData(cityName).subscribe({
      next: (response) => {
        console.log(response);
        this.weatherData = response;
      },
    });
  }
}
