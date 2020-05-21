import { Component } from '@angular/core';
import { CounterService } from '../shared/services/counter.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component {
  localIndex:number;

  constructor(private counterService: CounterService) { 
    this.localIndex=this.counterService.index;
    this.counterService.eventEmitter.subscribe(index=>this.localIndex=index);
  }

  onIncrement() {
    this.counterService.incIndex();
  }

}
