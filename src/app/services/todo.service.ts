import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = 'http://localhost:3000/Todo';

  constructor(private _httpClient : HttpClient) { }

  // read = get data

  getTodos(): Observable<any>{
    return this._httpClient.get(this.apiUrl);
  }

  // create = post data

  createTodo(data: any): Observable<any>{
    return this._httpClient.post(this.apiUrl,data);
  }

  //update = put

  updateTodo(id: any): Observable<any>{
    return this._httpClient.put(this.apiUrl,id);
  }
}
