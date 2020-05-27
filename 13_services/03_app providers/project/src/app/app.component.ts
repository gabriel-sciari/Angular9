import { Component } from '@angular/core';
import { CountryService } from './shared/services/country.service';
import { WeatherService } from './shared/services/weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor(public countryService:CountryService, 
    public weatherService:WeatherService){

  }
}
