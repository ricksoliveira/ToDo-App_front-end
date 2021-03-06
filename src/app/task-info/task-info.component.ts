import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.css']
})
export class TaskInfoComponent implements OnInit {

  id!: number;
  task!: Task;

  constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService) { }

  ngOnInit() {
    this.task = new Task();

    this.id = this.route.snapshot.params['id'];
    
    this.taskService.getTask(this.id).subscribe(
      data => {
        console.log(data)
        this.task = data;
      },
      error => console.log(error)
    );
  }

  list(){
    this.router.navigate(['tasks']);
  }

}
