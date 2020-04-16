import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public firstName:string="Bob1";
  public secondName:string="Bob2";
  public thirdName:string="Bob3";

  public saveFirstName(newName:string):void{
      this.firstName=newName;
  }

  public saveSecondName (newName:string):void{
    this.secondName=newName;
  }

}
