import { Component } from '@angular/core';
import { CountryService } from './shared/services/country.service';
import { Country } from './shared/models/country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  public countryArray:Country[];

  constructor(private countryService:CountryService){
    this.countryArray=this.countryService.countryArray;
  }

  public getCountries(){
    this.countryService.getAllCountries();
  }


}
