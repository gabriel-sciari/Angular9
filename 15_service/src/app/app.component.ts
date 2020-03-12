import { Component } from '@angular/core';
import { WhoService } from './who.service';
import { PopulationService } from './population.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public countries:string[]=["Israel","Chaina","Germany"];

  // DI
  constructor(public whoService:WhoService,
    public populationService:PopulationService) { }

}
