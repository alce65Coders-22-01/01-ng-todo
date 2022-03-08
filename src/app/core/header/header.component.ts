import { Component, OnInit } from '@angular/core';
import { MenuItemsI } from 'src/app/interfaces';

@Component({
  selector: 'isdi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string;
  menuItems: Array<MenuItemsI>;
  constructor() {
    this.title = 'aprendiendo angular';
    this.menuItems = [
      { path: 'home', label: 'Inicio' },
      { path: 'todo', label: 'Tareas' },
      { path: 'about', label: 'Acerca de' },
    ];
  }

  ngOnInit(): void {}
}
