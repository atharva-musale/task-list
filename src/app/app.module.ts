import {
 NgModule,
} from '@angular/core';
import {
 FormsModule,
} from '@angular/forms';
import {
 BrowserModule,
} from '@angular/platform-browser';
import {
 BrowserAnimationsModule,
} from '@angular/platform-browser/animations';
import {
 AppComponent,
} from './app.component';
import {
 BasicLayoutComponent,
 TaskComponent,
 TaskInputComponent,
 TaskListComponent,
} from './components';
import {
  FilterBarComponent,
} from './components/filter-bar/filter-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicLayoutComponent,
    TaskComponent,
    TaskListComponent,
    TaskInputComponent,
    FilterBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
