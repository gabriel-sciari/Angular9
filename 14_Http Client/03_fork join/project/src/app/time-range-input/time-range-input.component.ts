import { Component } from '@angular/core';
import { PackagesServices } from '../shared/services/packages.service';

@Component({
  selector: 'app-time-range-input',
  templateUrl: './time-range-input.component.html',
  styleUrls: ['./time-range-input.component.css']
})
export class TimeRangeInputComponent {

  public start:string;
  public end:string;

  constructor(private myPackagesServices:PackagesServices) { }

  public editDateRange():void{
    this.myPackagesServices.startDate=this.start;
    this.myPackagesServices.endDate=this.end;
    this.myPackagesServices.getPackagesAmount();
  }
}
