import { Component } from '@angular/core';
import {CountryService} from './shared/services/country.service'
import { Country } from './shared/models/country.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private myCountryService:CountryService){}

  public get myCountry():Country{
    return this.myCountryService.country;
  }
}
