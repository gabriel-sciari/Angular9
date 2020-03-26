import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public dailyBest:string;
  public readonly options:string[]=['BNS','BWS','Esspreso','WWS',"Tea"];

  public changeBest(choice:string):void{
    this.dailyBest=choice;
  }
}
