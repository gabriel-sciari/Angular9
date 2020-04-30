import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nameChild1:string="Bob";
  public nameChild2:string="Alice";

  public ageChild1:number=8;
  public ageChild2:number=8;

  public blessBD1(age:number):void{
    alert(`Happy BD Bob you are ${age}!!`);
    this.ageChild1=age;
  }

  public blessBD2(age:number):void{
    alert(`Happy BD Alice you are ${age}!!`);
    this.ageChild2=age;
  }

}
