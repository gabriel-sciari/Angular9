import { Component } from '@angular/core';
import {PostService} from './shared/services/post.service'
import { Post } from './shared/models/post.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  post:Post=new Post();

  constructor(public myPostService:PostService){}


  public sendPost(){
    this.myPostService.addNewPost(this.post);
  }


}
