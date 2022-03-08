import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userLogin!: string;
  userLogin$: Subject<string>;
  constructor() {
    this.userLogin$ = new Subject();
  }

  login(user: string) {
    this.userLogin = user;
    this.userLogin$.next(this.userLogin);
  }
}
