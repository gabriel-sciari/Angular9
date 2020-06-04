import { Component } from '@angular/core';
import { PackagesServices } from '../shared/services/packages.service';
import { PackageInfo } from '../shared/models/package-info.model';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent {

  constructor(private myPackagesServices:PackagesServices) { }


  public get packagesInfo():PackageInfo[] {
    return this.myPackagesServices.packagesInfo;
  }

}
