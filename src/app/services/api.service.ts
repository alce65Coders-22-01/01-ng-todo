import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  tasksUrl: string;
  constructor(public http: HttpClient) {
    this.tasksUrl = ' http://localhost:3000/tasks';
  }

  getTasks() {
    return this.http.get(this.tasksUrl).toPromise();
  }
}
