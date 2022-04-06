import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { Todo } from '../shared/todo.model';
import { DatePipe, formatDate } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent implements OnInit {

  constructor(public service: TodoService) { }

  ngOnInit(): void {
    this.service.loadList();
  }

  populateForm(selectedRecord:Todo)
  {
    var date = new Date(selectedRecord.dueDate);
    const format = 'yyyy-MM-dd';
    const culture = 'en-US';

    selectedRecord.dueDate = formatDate(date, format, culture);
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onUpdate(form:NgForm)
  {
    this.service.putTodoItem().subscribe();
  }
}