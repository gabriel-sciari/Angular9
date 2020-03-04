import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public fname:string="Bob";
  public readonly arr: number[] = [2, 4, 6];
  public matrix: string[][];


  public saveName(newName:string):void{
    this.fname=newName;
  }

  public updateMat(size: number): void {
    this.matrix = [];

    for (let i = 0; i < size; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < size; j++) {
        if (i == j) {
          this.matrix[i][j] = "main";
        }
        else if (i == size -1 - j) {
          this.matrix[i][j] = "sub";
        }
        else{
          this.matrix[i][j] = "regular";
        }

      }
    }
  }
}
