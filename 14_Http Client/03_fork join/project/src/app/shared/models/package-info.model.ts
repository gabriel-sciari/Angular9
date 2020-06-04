import { PackageDetails } from "./package.model";
import { PackageAmount } from "./package-amount.model";

export class PackageInfo{
    public packageAmount:PackageAmount;

    constructor(public packageDetails:PackageDetails){}
}