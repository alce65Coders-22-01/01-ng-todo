import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskI } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  tasksUrl: string;
  constructor(public http: HttpClient) {
    this.tasksUrl = ' http://localhost:3000/tasks/';
  }

  getTasks(): Observable<Array<TaskI>> {
    return this.http.get(this.tasksUrl) as Observable<Array<TaskI>>;
  }

  addTask(task: TaskI): Observable<TaskI> {
    return this.http.post(this.tasksUrl, task) as Observable<TaskI>;
  }

  deleteTask(task: TaskI): Observable<{}> {
    return this.http.delete(this.tasksUrl + task.id);
  }
}
