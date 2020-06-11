import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { 
    parentMsg = "test0";
    counter = 1;
    showChild = true;
    
    changeMsg() {
        this.parentMsg = `test${this.counter++}`;
    }

    toggleChild() {
        this.showChild = !this.showChild;
    }
}