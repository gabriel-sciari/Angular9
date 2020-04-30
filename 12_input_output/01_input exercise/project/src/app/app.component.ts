import { Component } from '@angular/core';
import { Country } from './shared/country.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public countries:Country[]=[
    {"currencies":[{"code":"ILS","name":"Israeli new shekel","symbol":"₪"}],"flag":"https://restcountries.eu/data/isr.svg","name":"Israel"},
    {"currencies":[{"code":"GBP","name":"British pound","symbol":"£"}],"flag":"https://restcountries.eu/data/gbr.svg","name":"United Kingdom of Great Britain and Northern Ireland"},
    {"currencies":[{"code":"EUR","name":"Euro","symbol":"€"}],"flag":"https://restcountries.eu/data/fra.svg","name":"France"}
  ];
}
