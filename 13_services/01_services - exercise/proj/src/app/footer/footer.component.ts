import { Component } from '@angular/core';
import { CountryService } from '../shared/services/country.service';
import { Country } from '../shared/models/country.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {

  public country:Country;
  
  constructor(private countryService:CountryService) {
     this.country=this.countryService.selectedCountry;
  }


}
