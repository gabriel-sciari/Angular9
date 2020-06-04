import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { Post } from '../models/post.model'
import { PostResponse } from '../models/response.model'

@Injectable({
    'providedIn':'root'
})
export class PostService{

    public postResponse:PostResponse;
    public postGetResponse:PostResponse;

    constructor(private myHttpClient:HttpClient){
        this.myHttpClient.get<PostResponse>("https://jsonplaceholder.typicode.com/posts/1")
        .subscribe(
            res=>this.postGetResponse=res,
            err=>console.log(err)
        )
    }


    public addNewPost(newPost:Post):void{
        this.myHttpClient.post<PostResponse>("https://jsonplaceholder.typicode.com/posts",newPost)
        .subscribe(
            res=>this.postResponse=res,
            err=>console.log(err)
        )
    }

}