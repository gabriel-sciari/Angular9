import { Component } from '@angular/core';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: []
})
export class DeleteUserComponent  {

    id:number=2;
    
    constructor(private myUsersService: UsersService) {}


    deleteUser(){
        this.myUsersService.deleteUser(this.id);
    }

}
