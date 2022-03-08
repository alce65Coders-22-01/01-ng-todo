import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'isdi-todo',
  template: ` <p>todo works!</p> `,
  styles: [],
})
export class TodoComponent implements OnInit {
  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.api.getTasks().then((data) => console.log(data));
  }
}
