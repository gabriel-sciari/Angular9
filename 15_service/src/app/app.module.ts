import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HealthMinistryComponent } from './health-ministry/health-ministry.component';
import { WhoService } from './who.service';
import { PopulationService } from './population.service'

@NgModule({
  declarations: [
    AppComponent,
    HealthMinistryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PopulationService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("AppModule ctor");
  }
}
