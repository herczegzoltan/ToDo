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
  list:Todo[];

  postToDoItem()
  {
    return this.http.post(this.baseUrl, this.formData);
  }

  loadList()
  {
    this.http.get(this.baseUrl)
    .toPromise()
    .then(res => this.list = res as Todo[]);
  }

  putTodoItem(){
    return this.http.put(`${this.baseUrl}/${this.formData.toDoItemId}`, this.formData);
  }
}
