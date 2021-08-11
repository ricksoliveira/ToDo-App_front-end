import { TaskInfoComponent } from './task-info/task-info.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskListComponent },
  { path: 'add', component: CreateTaskComponent },
  { path: 'update/:id', component: UpdateTaskComponent },
  { path: 'info/:id', component: TaskInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }