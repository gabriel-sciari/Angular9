import { Component } from '@angular/core';
import { Color } from './shared/models/color.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public msg:string="Hello";
  public static fullStaticName = "A.Karp";
  enumHolder: typeof Color = Color;
  selectedColor: Color = 0;

  setColor(newColor:number){
    this.selectedColor=newColor;
  }

  get colorName():string{
    return Color[this.selectedColor];
  }
  get colorList() {
    return Object.keys(Color).filter(x => isNaN(Number(x)))
  }

  get fullname() {
      return AppComponent.fullStaticName;
  }
}
