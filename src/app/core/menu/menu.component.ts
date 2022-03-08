import { Component, OnInit } from '@angular/core';

interface MenuItemsI {
  path: string;
  label: string;
}

@Component({
  selector: 'isdi-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuItems: Array<MenuItemsI>;
  constructor() {
    this.menuItems = [
      { path: 'home', label: 'Inicio' },
      { path: 'about', label: 'Acerca de' },
    ];
  }

  ngOnInit(): void {}
}
