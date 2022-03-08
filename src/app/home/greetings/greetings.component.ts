import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'isdi-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss'],
})
export class GreetingsComponent implements OnInit {
  placeHolderText: string;
  userName: string;
  constructor(public ls: LoginService) {
    this.placeHolderText = 'Dime tu nombre';
    this.userName = 'Pepe';
  }

  handleDelete() {
    this.userName = '';
  }

  handleLogin() {
    this.ls.login(this.userName);
  }

  ngOnInit(): void {}
}
