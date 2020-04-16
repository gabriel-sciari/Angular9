import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  public fruits:string[]=["Orange","Banana","Apple"];
  public selectedFruit:string="Orange";

  public snacks=["Bamba","Chips","Bisli"];
  public selectedSnack:string;

  public drinks=[ 
                {name:"Water",isChecked:false},
                {name:"Coffee",isChecked:false},
                {name:"Tea",isChecked:false}];

  public setFruitByEvent(newFruit:string):void{
    console.log("setFruitByEvent",newFruit);
  }

  public setFruitById(newFruit:string):void{
    console.log("setFruitById",newFruit);
  }



  public setSnackByEvent(newSnack:string):void{
    console.log("setSnackByEvent",newSnack);
  }


  public setDrinkByEvent():void{
    console.log(this.drinks);
  }
}
