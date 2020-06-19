import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from '../models/root-object.model';
import { User } from '../models/user.model';



@Injectable({
    providedIn: 'root'
})
export class UsersService {


    public rootObject: RootObject = new RootObject();

    constructor(private myHttpClient: HttpClient) { 
        this.getUsers();
    }

    public getUsers() {
        this.myHttpClient
            .get<User[]>("/all")
            .subscribe(
                res => {this.rootObject.data = res;},
                err=>{console.log(err)}
            )
    }


    public addUser(newUser:User) {
        this.myHttpClient
            .post("/add",newUser)
            .subscribe(
                res => {this.getUsers()},
                err=>{console.log(err)}
            )
    }

    public editUser(editedUser:User,name:string) {
        this.myHttpClient
            .put(`/edit/${name}`,editedUser)
            .subscribe(
                res => {this.getUsers()},
                err=>{console.log(err)}
            )
    }

    public deleteUser(name:string) {
        this.myHttpClient
            .delete(`/delete/${name}`)
            .subscribe(
                res => {this.getUsers()},
                err=>{console.log(err)}
            )
    }
}
