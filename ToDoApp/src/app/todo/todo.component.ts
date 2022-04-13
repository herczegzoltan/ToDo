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
    if (selectedRecord.dueDate != '')
    {
      var date = new Date(selectedRecord.dueDate);
      const format = 'yyyy-MM-dd';
      const culture = 'en-US';
      selectedRecord.dueDate = formatDate(date, format, culture);
    }

    this.service.formData = Object.assign({}, selectedRecord);
    this.service.listStep = selectedRecord.steps;
  }

  insertForm(form:NgForm)
  {
    if (this.service.formInputData.toDoItemId == 0)
    {
      this.service.postToDoItem().subscribe(
        res => {
          this.resetForm(form);
          this.service.loadList();
        },
        err => {console.log(err)},
      );
    }
  }

  onIsComplatedCheckboxChange(selectedRecord:Todo, values:any)
  {
    selectedRecord.isCompleted = values.currentTarget.checked;
    
    this.service.formData = Object.assign({}, selectedRecord);
    this.service.putTodoItem().subscribe(
      res => {
        this.service.loadList();
      },
      err => {console.log(err)},
    );
  }

  resetForm(form:NgForm)
  {
    form.form.reset();
    this.service.formData = new Todo();
  }
}