import { Currency } from "./currency.model";

export interface Country{
    currencies: Currency[];
    flag: string;
    name: string;
}