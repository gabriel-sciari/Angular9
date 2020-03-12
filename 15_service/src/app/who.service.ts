import { PopulationService } from './population.service'
import { Injectable } from '@angular/core';

@Injectable(
  {providedIn:'root'}
)
export class WhoService {

  public counter:number=0;

  public incCounter(amount:number):void{
    this.counter+=amount;
  }

  public decCounter(amount:number):void{
    this.counter-=amount;
  }

  public get precent():string{
    return `${this.counter} from ${this.populationService.counter}`;
  }
  constructor(private populationService:PopulationService) {
    console.log("WhoService Ctor");
   }
}
