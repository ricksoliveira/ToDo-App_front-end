import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Task } from "src/app/task";
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks!: Observable<Task[]>;

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.tasks = this.taskService.listAllTasks();
  }

  deleteTask (id: number){
    this.taskService.deleteTask(id).subscribe(
      data => {
        console.log(data)
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  taskInfo(id: number){
    this.router.navigate(['info', id]);
  }

  updateTask(id: number){
    this.router.navigate(['update', id]);
  }

}
