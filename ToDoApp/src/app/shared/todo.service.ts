import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  readonly baseUrl = 'http://localhost:5037/api/ToDoItem';
  formData:Todo = new Todo(); 

  postToDoItem(){
    return this.http.post(this.baseUrl, this.formData);
  }
}
