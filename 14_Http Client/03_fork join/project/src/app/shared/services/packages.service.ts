import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PackageInfo } from '../models/package-info.model';
import { PackageDetails } from '../models/package.model';
import { forkJoin } from 'rxjs';
import { PackageAmount } from '../models/package-amount.model';

@Injectable(
    {'providedIn':'root'}
)
export class PackagesServices{

    public packagesInfo:PackageInfo[]=[];

    public packageSubject:string;
    public startDate:string="2019-02-02";
    public endDate:string="2020-05-05";

    constructor(private myHttpClient:HttpClient){}


    public getPackagesDetails(){
        this.myHttpClient.get<PackageDetails[]>(`https://api.npms.io/v2/search/suggestions?q=${this.packageSubject}&size=5`)
        .subscribe(
            res=>{
                this.packagesInfo=res.map(e=>new PackageInfo(e));
                this.getPackagesAmount();
            },
            err=>console.log(err)
        )
    }


    public getPackagesAmount(){
        forkJoin(
            this.packagesInfo.map(e=>this.myHttpClient.get<PackageAmount>(`https://api.npmjs.org/downloads/point/${this.startDate}:${this.endDate}/${e.packageDetails.package.name}`))
                )
                .subscribe(
                    res=>{
                        for(let packageAmount of res){
                            let p:PackageInfo=this.packagesInfo.find(e=>e.packageDetails.package.name==packageAmount.package);
                            if(p)
                                p.packageAmount=packageAmount;
                        }
                    },
                    err=>console.log(err)
                );
        }
}