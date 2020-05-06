import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../shared/person.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
   @Input() public info:Person;
   @Output() public birthdayEvent:EventEmitter<string>=new EventEmitter<string>();
   
   public incAge(){
      this.info.age++;
      this.birthdayEvent.emit(this.info.name);
   }
}
