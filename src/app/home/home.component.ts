import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'isdi-home',
  template: `
    <p>home</p>
    <isdi-greetings></isdi-greetings>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
