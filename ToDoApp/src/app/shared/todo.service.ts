import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { Step } from './step.model';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }
  readonly baseUrl = 'http://localhost:5037/api/ToDoItem';
  formInputData: Todo = new Todo();
  formData: Todo = new Todo();
  formStepData: Step = new Step();
  formUpdateStepData: Step = new Step();
  list: Todo[];
  listStep: Step[];

  postToDoItem() {
    return this.http.post(this.baseUrl, this.formInputData);
  }

  postToDoStepItem() {
    this.formStepData.toDoItemId = this.formData.toDoItemId;
    return this.http.post(`${this.baseUrl}/ToDoItemStep`, this.formStepData);
  }

  putTodoItem() {
    return this.http.put(`${this.baseUrl}/${this.formData.toDoItemId}`, this.formData);
  }

  putTodoStepItem()
  {
    return this.http.put(`${this.baseUrl}/ToDoItemStep/${this.formUpdateStepData.toDoItemStepId}`, this.formUpdateStepData);
  }

  deleteToDoItem(selectedToDoItemId: number) {
    return this.http.delete(`${this.baseUrl}/${selectedToDoItemId}`);
  }
  
  deleteToDoStepItem(selectedToDoStepItemId: number) {
    return this.http.delete(`${this.baseUrl}/ToDoItemStep/${selectedToDoStepItemId}`);
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

  loadStepList() {
    this.http.get(`${this.baseUrl}/${this.formData.toDoItemId}`)
    .toPromise()
    .then(res =>
      this.listStep = (res as Todo).steps as Step[]
    )
    .then(item => item.sort((a: Step, b: Step) => (a.isCompleted < b.isCompleted) ? -1 : 1))
  }
}
