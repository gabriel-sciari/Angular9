import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BranchesComponent } from './branches/branches.component';
import { ProductsComponent } from './products/products.component';



const appRoutes: Routes = [
    {path:"branches",component:BranchesComponent},
    {path:"products",component:ProductsComponent},
    {path: '',redirectTo: '/branches', pathMatch: 'full'}
];


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        BranchesComponent,
        ProductsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
