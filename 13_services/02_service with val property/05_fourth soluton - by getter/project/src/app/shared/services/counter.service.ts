import { Injectable } from '@angular/core';

@Injectable({
    providedIn:"root"
})
export class CounterService{
    public index:number=0;

    public incIndex(){
        this.index++;
    }
}