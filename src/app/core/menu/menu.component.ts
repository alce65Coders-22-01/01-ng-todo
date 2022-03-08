import { Component, Input, OnInit } from '@angular/core';
import { MenuItemsI } from 'src/app/interfaces';

@Component({
  selector: 'isdi-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() menuItems!: Array<MenuItemsI>;
  constructor() {}

  ngOnInit(): void {}
}
