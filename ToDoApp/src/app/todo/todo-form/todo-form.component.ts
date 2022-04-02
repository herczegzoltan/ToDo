import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/shared/todo.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styles: [
  ]
})
export class TodoFormComponent implements OnInit {

  constructor(public service:TodoService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)
  {
  }
}
