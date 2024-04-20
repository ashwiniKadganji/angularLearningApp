import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  data!: any[];
  id: any;

  constructor(private _todoService: TodoService) { }

  ngOnInit(): void {

    this._todoService.getTodos().subscribe(res =>{
      console.log(res); 
    })

    this.create();
    this.update(this.id);
  }

  create(){
    let todo = 
      { id : new Date().getTime(),
      name : 'Angular material' }

    this._todoService.createTodo(todo).subscribe(res =>{
     console.log('create method called',res);
     this.data = res.value;
    })
  }

  update(id : any){
    this._todoService.updateTodo(id).subscribe(res =>{
      console.log('Edit or update method called',res);
      
    })
  }
}
