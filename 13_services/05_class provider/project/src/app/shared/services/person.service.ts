import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  public person:Person={
    "name":"Bob",
    "age":12
  };
  
}






