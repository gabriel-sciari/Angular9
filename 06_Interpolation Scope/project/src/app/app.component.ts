import { Component } from '@angular/core';
import { Color } from './shared/models/color.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public msg:string="Hello";

  /*----------------- Way to access static member from html-------------- */
  public static fullStaticName = "A.Karp";
  public get fullname() {
    return AppComponent.fullStaticName;
  }


  /*-----------------First way to access enum from html------------------ */
  public enumHolder: typeof Color = Color;

  public firstSelectedColor: Color = 0;

  public setFirstColor(newColor:number){
    this.firstSelectedColor=newColor;
  }


  /*-----------------Second way to access enum from html----------------- */
  public secondSelectedColor:Color=0;

  public setSecondColor(newColor:number){
    this.secondSelectedColor=newColor;
  }

  public getColorName(color:number):string{
    return Color[color];
  }


}
