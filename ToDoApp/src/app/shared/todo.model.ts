import { Step } from "./step.model";

export class Todo {
    toDoItemId:number=0;
    title:string='';
    description:string='';
    dueDate:string='';
    isCompleted:boolean=false;
    steps:Step[]=[];
}
