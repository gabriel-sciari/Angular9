import { Component, OnInit, Input } from '@angular/core';
import { WhoService } from '../who.service';

@Component({
  selector: 'app-health-ministry',
  templateUrl: './health-ministry.component.html',
  styleUrls: ['./health-ministry.component.css'],
})
export class HealthMinistryComponent implements OnInit {

  @Input() name:string;

  // DI
  constructor(public whoService:WhoService) { }

  ngOnInit(): void {
  }

}
