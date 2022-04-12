import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { HttpClient } from "@angular/common/http"
import { Step } from './step.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }
  readonly baseUrl = 'http://localhost:5037/api/ToDoItem';
  formInputData: Todo = new Todo();
  formData: Todo = new Todo();
  list: Todo[];

  postToDoItem() {
    return this.http.post(this.baseUrl, this.formInputData);
  }

  putTodoItem() {
    return this.http.put(`${this.baseUrl}/${this.formData.toDoItemId}`, this.formData);
  }

  deleteToDoItem(selectedToDoItemId: number) {
    return this.http.delete(`${this.baseUrl}/${selectedToDoItemId}`);
  }

  loadList() {
    this.http.get(this.baseUrl)
      .toPromise()
      .then(res =>
        this.list = res as Todo[]
      )
      .then(item => item.sort((a: Todo, b: Todo) => (a.isCompleted < b.isCompleted) ? -1 : 1))
      .then(item => item.forEach(function (toDoItem) {
        toDoItem.steps.sort((a: Step, b: Step) => (a.isCompleted < b.isCompleted) ? -1 : 1)
      }));
  }
}
