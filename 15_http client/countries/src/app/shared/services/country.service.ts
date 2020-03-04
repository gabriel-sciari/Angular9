import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country.model';
import { EventEmitter } from 'events';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  public countryArray:Country[]=[];

  constructor(private httpClient:HttpClient) { }


  public getAllCountries(){
    if(!this.countryArray.length){
      this.httpClient
      .get<Country[]>("https://restcountries.eu/rest/v2/all?fields=name;population")
      .subscribe(res=>{
        res.map(e=>this.countryArray.push(e));
        console.log(this.countryArray)
      });
    }
  
  }
}
