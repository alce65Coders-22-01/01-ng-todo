import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'isdi-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss'],
})
export class GreetingsComponent implements OnInit {
  placeHolderText: string;
  userName: string;
  constructor() {
    this.placeHolderText = 'Dime tu nombre';
    this.userName = 'Pepe';
  }

  handleDelete() {
    this.userName = '';
  }

  ngOnInit(): void {}
}
