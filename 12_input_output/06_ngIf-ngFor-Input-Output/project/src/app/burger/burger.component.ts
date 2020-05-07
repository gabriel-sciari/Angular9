import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Additions } from '../sharad/models/additions.model';
import { DoneLevel } from '../sharad/models/done-level.model';
import { AdditionChange } from '../sharad/models/addition-change.model';


@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {
  @Input("burgerType") myBurgerType: string;


  @Output("chipsAdd") addChips: 
  EventEmitter<void> = 
  new EventEmitter<void>();
  
  
  @Output("doneLevelAdd") addDoneLevel: 
  EventEmitter<AdditionChange> = 
  new EventEmitter<AdditionChange>();
  
  static counter: number = 1;
  burgerCounter: number;
  additions: Additions = new Additions();
  additionKeys: string[] = [];
  doneLevel = DoneLevel;


  handleAdditinSubmit(key: string) {


    switch (key) {
      case "extraLarge": {
        this.additions.extraLarge = !(this.additions.extraLarge); 
        break;
      }
        
      case "doneLevel": {
        let newDoneLevel=(this.additions.doneLevel + 1) % 4;
        let eventParam=new AdditionChange(
          this.additions.doneLevel,
          newDoneLevel);
          
        this.addDoneLevel.emit(eventParam)
        this.additions.doneLevel = newDoneLevel; 
        break;
      }
      case "chipsCount":this.addChips.emit();
      default: this.additions[key]++;
    }
  }
  
  constructor() {
    console.log(this.additions, `Burger num ${BurgerComponent.counter} ctor`)
    this.burgerCounter = BurgerComponent.counter++;
    this.additionKeys = Object.keys(this.additions);
  }

  ngOnInit() {
  }

}
