import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  public dailyBest:string;
  public readonly options:string[]=['BNS','BWS','Esspreso','WWS'];

  public changeBest(choice:string):void{
    this.dailyBest=choice;
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
