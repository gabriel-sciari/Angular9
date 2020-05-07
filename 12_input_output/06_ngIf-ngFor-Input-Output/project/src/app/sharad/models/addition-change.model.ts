
import { DoneLevel } from "./done-level.model";

export class AdditionChange{
    constructor(public prevAddition:DoneLevel,
        public nextAddition:DoneLevel){}
}