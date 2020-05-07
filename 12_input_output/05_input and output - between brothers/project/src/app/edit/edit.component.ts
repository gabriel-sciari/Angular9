import { Component, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent{
  
  @Output() public editEvent:EventEmitter<string>=new EventEmitter<string>();

  public saveName(newName:string):void{
    this.editEvent.emit(newName);
  }

}
