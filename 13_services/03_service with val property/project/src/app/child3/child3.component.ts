import { Component } from '@angular/core';
import { CounterService } from '../shared/services/counter.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component {


  constructor(public counterService: CounterService) {  }

}
