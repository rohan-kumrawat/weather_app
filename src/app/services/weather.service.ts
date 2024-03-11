import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '67534a573282423982d183548240603'; // Weather API key
  private apiUrl = 'http://api.weatherapi.com/v1/current.json'; // API URL without city

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    // Create dynamic API URL with city parameter
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${city}`;
    return this.http.get(url);
  }
}

















// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class WeatherService {
//   private apiKey = '67534a573282423982d183548240603'; // Weather API key
//   private apiUrl = `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=Mumbai`; // Example URL

//   constructor(private http: HttpClient) { }

//   getWeather(): Observable<any> {
//     return this.http.get(this.apiUrl);
//   }
// }
