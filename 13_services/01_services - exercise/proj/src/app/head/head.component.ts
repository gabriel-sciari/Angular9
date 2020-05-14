import { Component } from '@angular/core';
import { Country } from '../shared/models/country.model';
import { CountryService } from '../shared/services/country.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent{

  public countyList:Country[];

  constructor(private countryService:CountryService) {
     this.countyList=this.countryService.countyList;
  }


  public saveCountry(newName:string):void{
    let c:Country=this.countyList.find(e=>e.name==newName);

    this.countryService.selectedCountry.name=c.name;
    this.countryService.selectedCountry.flag=c.flag;
  }

}
