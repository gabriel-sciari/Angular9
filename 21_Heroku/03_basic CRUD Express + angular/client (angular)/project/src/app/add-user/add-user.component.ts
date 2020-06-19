import { Component } from '@angular/core';
import { RootObject } from '../shared/models/root-object.model';
import { UsersService } from '../shared/services/users.service';
import { User } from '../shared/models/user.model';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: []
})
export class AddUserComponent{

    myRootObject: RootObject;
    
    newUser: User = {
        "name": "Bob",
        "age": 12
    };

    constructor(private myUsersService: UsersService) {
        this.myRootObject = this.myUsersService.rootObject;
    }


    addUser(){
        this.myUsersService.addUser(this.newUser);
    }

}
