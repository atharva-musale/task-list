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
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class TaskComponent {
  /**
   * Task
   */
  @Input()
  public task?: Task;

  /**
   * Checks whether a task is completed or not
   */
  isTaskCompleted = isTaskCompleted;

  constructor(private taskService: TaskService) {}

  /**
   * Updates the task status when checkbox is selected/unselected
   *
   * @param event on checkbox toggle
   * @returns void
   */
  public checkboxChangeEvent(event: any) {
    if (!this.task) return;
    this.taskService.updateTaskStatus(
      this.task,
      event.currentTarget.checked ? TaskStatus.COMPLETED : TaskStatus.ACTIVE
    );
  }

  /**
   * Removes the task from the list
   */
  public removeTask() {
    if (this.task) {
      this.taskService.removeTask(this.task);
    }
  }
}
