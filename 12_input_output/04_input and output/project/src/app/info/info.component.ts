import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  public age:number=20;
  @Output() ageChange:EventEmitter<void>=new EventEmitter<void>();

  public inc(){
    this.age++;
    this.ageChange.emit();
  }

}















