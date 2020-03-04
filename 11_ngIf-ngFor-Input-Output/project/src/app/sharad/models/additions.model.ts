import { DoneLevel } from "./done-level.model";

export class Additions {

    constructor(public chipsCount: number = 0,
        public extraLarge: boolean = true,
        public saladCount: number = 0,
        public doneLevel: DoneLevel = DoneLevel.Rare,
        public drinkCount: number = 0
    ) { }

}
