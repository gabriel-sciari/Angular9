import { Component } from '@angular/core';
import { Person } from '../shared/models/person.model';
import { PersonService } from '../shared/services/person.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent{

  public editPerson:Person;

  // DI 
  constructor(private personService:PersonService) { 
    this.editPerson=this.personService.person;
  }
}
