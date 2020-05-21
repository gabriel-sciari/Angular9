import { Injectable , EventEmitter} from '@angular/core';

@Injectable({
    providedIn:"root"
})
export class CounterService{

    public eventEmitter:EventEmitter<number>=new EventEmitter<number>();
    private pIndex:number=0;

    public get index():number{
        return this.pIndex;
    }

    public set index(pIndex:number){
        this.pIndex=pIndex;
        this.eventEmitter.emit(this.pIndex);
    }



    public incIndex(){
        this.index++;
    }
}