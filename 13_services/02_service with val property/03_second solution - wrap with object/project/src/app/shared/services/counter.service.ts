import { Injectable } from '@angular/core';

@Injectable(
    {
        providedIn:"root"
    }
)
export class CounterService{
    index={cnt:0};

    incIndex(){
        this.index.cnt++;
    }
}