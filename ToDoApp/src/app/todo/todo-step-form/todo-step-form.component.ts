import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Step } from 'src/app/shared/step.model';
import { TodoService } from 'src/app/shared/todo.service';

@Component({
  selector: 'app-todo-step-form',
  templateUrl: './todo-step-form.component.html',
  styles: [
  ]
})
export class TodoStepFormComponent implements OnInit {

  constructor(public service: TodoService) { }

  ngOnInit(): void {
  }

  insertForm(form:NgForm)
  {
    this.service.postToDoStepItem().subscribe(
      res => {
        this.resetForm(form);
        //this.service.loadList();
        this.service.loadStepList();
      },
      err => {console.log(err)},
    );
  }

  resetForm(form:NgForm)
  {
    form.form.reset();
    this.service.formStepData = new Step();
  }
  
  // insertForm(form:NgForm)
  // {
  //   this.service.formStepData = new Step();
  //   this.service.formStepData.title = title;
  //   this.service.formStepData.toDoItemId = selectedToDoItemId;

  //   this.service.postToDoStepItem().subscribe(
  //     res => {
  //       this.service.loadList();
  //     },
  //     err => {console.log(err)},
  //   )
  // }
}
