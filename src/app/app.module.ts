import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicLayoutComponent } from './components/basic-layout/basic-layout.component';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskInputComponent } from './components/task-input/task-input.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicLayoutComponent,
    TaskComponent,
    TaskListComponent,
    TaskInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }