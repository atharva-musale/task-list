import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import {
  isTaskCompleted,
} from '../../helpers';
import {
  Task,
  TaskStatus,
} from '../../models';
import {
  TaskService,
} from '../../services';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent {
  /**
   * Task
   */
  @Input()
  public task?: Task;

  isTaskCompleted = isTaskCompleted;

  constructor(private taskService: TaskService) {}

  public checkboxChangeEvent(event: any) {
    if (!this.task) return;
    this.taskService.updateTaskStatus(
      this.task,
      event.currentTarget.checked ? TaskStatus.COMPLETED : TaskStatus.ACTIVE
    );
  }
}
