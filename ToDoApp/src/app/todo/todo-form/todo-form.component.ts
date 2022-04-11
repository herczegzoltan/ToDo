import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/shared/todo.service';
import { NgForm } from '@angular/forms'
import { Todo } from 'src/app/shared/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styles: [
  ]
})
export class TodoFormComponent implements OnInit {

  constructor(public service:TodoService) { }

  ngOnInit(): void {}

  resetForm(form:NgForm)
  {
    form.form.reset();
    this.service.formData = new Todo();
  }

  updateForm(form:NgForm)
  {
    this.service.putTodoItem().subscribe(
      res => {
        this.service.loadList();
      },
      err => {console.log(err)},
    )
  }

  deleteForm(selectedToDoItemId:number)
  {
    if (confirm('Are you sure to delete this record?'))
    {
      this.service.deleteToDoItem(selectedToDoItemId).subscribe(
        res => {
          this.service.loadList();
          this.service.formData = Object.assign({}, new Todo);
        },
        err => {console.log(err);}
      );
    }
  }
}
