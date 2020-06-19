import { Component } from '@angular/core';
import { RootObject } from '../shared/models/root-object.model';
import { User } from '../shared/models/user.model';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: []
})
export class EditUserComponent {

    myRootObject: RootObject;
    editUser: User= {
        "name": "Bob",
        "age": 13
    };
    constructor(private myUsersService: UsersService) {
        this.myRootObject = this.myUsersService.rootObject;
    }


    updateUser(){
        this.myUsersService.editUser(this.editUser, this.editUser.name);
    }

}
