import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../services/jsonplaceholder.service';
import { Post } from '../models/post';


@Component({
  selector: 'app-crud-todo',
  templateUrl: './crud-todo.component.html',
  styleUrls: ['./crud-todo.component.css']
})
export class CrudTodoComponent implements OnInit {


  constructor(private _jsonplaceHolderService : JsonplaceholderService) { }

  ngOnInit(): void {
   this.createPost();
  }

  createPost() {
    const post = new Post();
      post.userId = 11;
       post.id = 1;
       post.title = 'this is test title';
       post.body = 'this is body';

    this._jsonplaceHolderService.createNewPost(post).subscribe(res =>{
      console.log('called post operation',res);
      
    })
    }

}
