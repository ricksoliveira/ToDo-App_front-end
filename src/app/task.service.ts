import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = 'http://localhost:8081/api/v1/task';

  constructor(private http: HttpClient) { }

  getTask(id: number) : Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.baseUrl}`, task);
  }

  updateTask(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  listAllTasks(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
