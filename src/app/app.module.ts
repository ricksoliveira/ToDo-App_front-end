import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskInfoComponent } from './task-info/task-info.component';
import { TaskListComponent } from './task-list/task-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateTaskComponent } from './update-task/update-task.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    UpdateTaskComponent,
    TaskInfoComponent,
    TaskListComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
