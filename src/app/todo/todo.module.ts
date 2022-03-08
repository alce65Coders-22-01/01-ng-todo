import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TaskComponent } from './task/task.component';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoComponent, TaskComponent, AddComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TodoRoutingModule],
})
export class TodoModule {}
