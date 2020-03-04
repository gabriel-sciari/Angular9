import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {


  age:number=10;

  incAge(){
    this.age++;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
