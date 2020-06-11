import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';



const appRoutes: Routes = [
  {path:"view",component:ViewUsersComponent},
  {path:"add",component:AddUserComponent},
  {path:"edit",component:EditUserComponent},
  {path:"delete",component:DeleteUserComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ViewUsersComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
