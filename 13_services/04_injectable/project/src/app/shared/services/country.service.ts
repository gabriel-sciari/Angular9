import { WeatherService } from './weather.service';
import { Injectable } from '@angular/core';



@Injectable()
export class CountryService{

    public constructor(private weatherService:WeatherService){}

    public get country(){
        return {
            "flag": "https://restcountries.eu/data/can.svg",
            "name": "Canada",
            "deg":this.weatherService.info.deg
        };
    } 
}