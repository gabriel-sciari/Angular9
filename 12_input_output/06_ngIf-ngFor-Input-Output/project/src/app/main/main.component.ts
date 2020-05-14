import { Component, OnInit } from '@angular/core';
import { AdditionChange } from '../sharad/models/addition-change.model';
import { DoneLevel } from '../sharad/models/done-level.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  chipsCount: number = 0;
  rareCount: number = 0;
  wellDoneCount: number = 0;
  mediumCount: number = 0;
  mediumWellCount: number = 0;

  burgerArray: string[] = [];


  addBurger(param: string) {
    this.burgerArray.push(param);
    this.rareCount++;
  }

  addChips() {
    this.chipsCount++;
  }
  

  updateDoneLevel(doneLevelInfo:AdditionChange){
    this.setDoneCounter(doneLevelInfo.prevAddition,false);
    this.setDoneCounter(doneLevelInfo.nextAddition,true);
  }

  setDoneCounter(key:DoneLevel,addState:boolean){
    switch(key){
      case DoneLevel.Medium: this.mediumCount+=addState?1:-1; break;
      case DoneLevel.MediumWell: this.mediumWellCount+=addState?1:-1; break;
      case DoneLevel.WellDone: this.wellDoneCount+=addState?1:-1; break;
      case DoneLevel.Rare: this.rareCount+=addState?1:-1; break;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
