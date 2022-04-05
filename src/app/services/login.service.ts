import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // userLogin!: string;
  private readonly userLoginSource: Subject<string>;
  readonly userLogin$;
  constructor() {
    this.userLoginSource = new Subject();
    this.userLogin$ = this.userLoginSource.asObservable();
  }

  login(user: string) {
    //this.userLogin = user;
    this.userLoginSource.next(user);
  }
}
