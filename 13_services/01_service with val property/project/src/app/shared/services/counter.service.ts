import { Injectable } from '@angular/core';

@Injectable({
    providedIn:"root"
})
export class CounterService{
    index=0;

    incIndex(){
        this.index++;
    }
}