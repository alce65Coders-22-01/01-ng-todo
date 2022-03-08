import { Component, OnInit } from '@angular/core';
import { TaskI } from '../interfaces';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'isdi-todo',
  template: `<h2>Tareas</h2>
    <isdi-add (onAddTask)="handleAddTask($event)"></isdi-add>
    <ul>
      <isdi-task
        *ngFor="let task of tasks"
        [task]="task"
        (onDelete)="handleDelete($event)"
      ></isdi-task>
    </ul> `,
  styles: [],
})
export class TodoComponent implements OnInit {
  tasks: Array<TaskI>;
  constructor(public api: ApiService) {
    this.tasks = [];
  }

  ngOnInit(): void {
    this.api.getTasks().subscribe((data) => {
      console.log(data);
      this.tasks = [...data];
    });
  }

  handleDelete(task: TaskI) {
    this.api.deleteTask(task).subscribe((resp) => {
      console.log(resp);
      this.tasks = this.tasks.filter((item) => item.id !== task.id);
    });
  }

  handleAddTask(task: TaskI) {
    this.api.addTask(task).subscribe((resp) => {
      this.tasks = [...this.tasks, resp];
    });
  }
}
