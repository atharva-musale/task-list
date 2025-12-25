import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import {
 AsyncPipe,
} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {
  Observable,
  take,
} from 'rxjs';
import {
  Task,
} from '../../models';
import {
  TaskService,
} from '../../services/task/task.service';
import {
 FilterBarComponent,
} from '../filter-bar/filter-bar.component';
import {
 TaskComponent,
} from '../task/task.component';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CdkDropList, CdkDrag, TaskComponent, FilterBarComponent, AsyncPipe]
})
export class TaskListComponent {
  /**
   * List of tasks
   */
  public tasks$: Observable<Task[]>;

  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.filteredTasks$;
  }

  /**
   * Handles the drop event for reordering tasks
   *
   * @param event drop event
   */
  public drop(event: CdkDragDrop<string[]>) {
    this.tasks$.pipe(take(1)).subscribe((tasks) => moveItemInArray(tasks, event.previousIndex, event.currentIndex));
  }
}
