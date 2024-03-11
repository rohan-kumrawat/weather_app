import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  city:any;
  btn = "Fahrenheit";
  ifEmpty=false;
  err = "";

  constructor(private weatherService: WeatherService,
              private _fb : FormBuilder) { }

  ngOnInit(): void {


  }

  getWeather() {
    if (this.city !== '') {
      this.weatherService.getWeather(this.city).subscribe((data) => {
        this.weatherData = data;
        console.log(this.weatherData);
        this.ifEmpty=false;
      }, (error) => {
        console.error(error);
      });
    } else {
      this.ifEmpty=true;
      this.err="Please enter a city name";
    }
  }


  getWeatherIconClass(conditionCode: number): string {
    switch (conditionCode) {
      case 1000:
        return 'fas fa-sun fa-3x weather-icon';
      case 1003:
        return 'fas fa-cloud-sun fa-3x weather-icon';
      case 1006:
        return 'fas fa-cloud fa-3x weather-icon';
      // Add more cases for other condition codes as needed
      default:
        return 'fas fa-question-circle fa-3x weather-icon'; // Default icon for unknown condition
    }
  }
}
