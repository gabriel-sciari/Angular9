import { Component } from '@angular/core';
import { Person } from './shared/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public children:Person[]=[
      {
        "name":"Bob",
        "age":13
      },
      {
        "name":"Alice",
        "age":10
      },
      {
        "name":"Tom",
        "age":5
      }
    ];

    public sayHappyBirthday(name:string){
      alert(`Happy birtday to ${name}`);
    }
}
