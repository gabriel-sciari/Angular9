import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public incCounter(newAge:number):void{
    alert(`Child new age: ${newAge}`);
  }
}





