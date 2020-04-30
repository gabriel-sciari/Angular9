import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  @Input() myName:string;
  @Input() sisterAge:number;
  @Output() ageEmitter:EventEmitter<number>=new EventEmitter<number>();
  myAge:number=8;

  incAge():void{
    this.myAge++;
    this.ageEmitter.emit(this.myAge);
  }

}
