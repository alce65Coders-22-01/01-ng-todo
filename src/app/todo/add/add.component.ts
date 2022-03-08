import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskI } from 'src/app/interfaces';

@Component({
  selector: 'isdi-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  @Output() onAddTask: EventEmitter<TaskI>;
  constructor(public fb: FormBuilder) {
    this.addForm = fb.group({
      title: ['', []],
      responsible: ['Pepe', []],
    });
    this.onAddTask = new EventEmitter();
  }

  ngOnInit(): void {}

  handleSubmit() {
    this.onAddTask.next(this.addForm.value);
  }
}
