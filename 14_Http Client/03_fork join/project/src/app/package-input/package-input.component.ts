import { Component, OnInit } from '@angular/core';
import { PackagesServices } from './../shared/services/packages.service';
@Component({
  selector: 'app-package-input',
  templateUrl: './package-input.component.html',
  styleUrls: ['./package-input.component.css']
})
export class PackageInputComponent{

  constructor(private myPackagesServices:PackagesServices) { }

  public editPackageSubject(newSubject:string){
      this.myPackagesServices.packageSubject=newSubject;
      this.myPackagesServices.getPackagesDetails();
  }

}
