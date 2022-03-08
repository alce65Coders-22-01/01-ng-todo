import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItemsI } from 'src/app/interfaces';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'isdi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string;
  menuItems: Array<MenuItemsI>;
  user$: Observable<string>;
  constructor(public ls: LoginService) {
    this.title = 'aprendiendo angular';
    this.menuItems = [
      { path: 'home', label: 'Inicio' },
      { path: 'todo', label: 'Tareas' },
      { path: 'about', label: 'Acerca de' },
    ];
    this.user$ = this.ls.userLogin$;
  }

  ngOnInit(): void {}
}
