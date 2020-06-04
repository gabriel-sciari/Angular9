import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { Country } from '../models/country.model'

@Injectable({
    'providedIn':'root'
})
export class CountryService{

    public country:Country;
    constructor(private myHttpClient:HttpClient){
        this.myHttpClient.get<Country[]>("https://restcountries.eu/rest/v2/name/israel?fields=name;capital;flag")
        .subscribe(
            res=>this.country=res[0],
            err=>console.log(err)
        )
     }

}