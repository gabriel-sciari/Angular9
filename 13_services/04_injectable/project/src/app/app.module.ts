import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountryService } from './shared/services/country.service';
import { WeatherService } from './shared/services/weather.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CountryService,WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
