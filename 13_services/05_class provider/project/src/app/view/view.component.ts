import { Component } from '@angular/core';
import { PersonService } from './../shared/services/person.service'
import { Person } from '../shared/models/person.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  public viewPerson:Person;

  // DI 
  constructor(private personService:PersonService) { 
    this.viewPerson=this.personService.person;
  }

}
