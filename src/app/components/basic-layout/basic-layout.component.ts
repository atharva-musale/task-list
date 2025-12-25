import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {
 TaskInputComponent,
} from '../task-input/task-input.component';
import {
 TaskListComponent,
} from '../task-list/task-list.component';

@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TaskInputComponent, TaskListComponent]
})
export class BasicLayoutComponent { }
