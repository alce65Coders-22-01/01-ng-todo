import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskI } from 'src/app/interfaces';

@Component({
  selector: 'isdi-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task!: TaskI;
  @Output() onDelete: EventEmitter<TaskI>;
  constructor() {
    this.onDelete = new EventEmitter();
  }

  ngOnInit(): void {}

  handleDelete(): void {
    this.onDelete.next(this.task);
  }
}
