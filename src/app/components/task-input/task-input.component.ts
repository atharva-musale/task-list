import {
 ChangeDetectionStrategy,
 Component,
 ViewEncapsulation,
} from '@angular/core';
import {
 FormsModule,
} from '@angular/forms';
import {
 TaskService,
} from '../../services';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule]
})
export class TaskInputComponent {
  /**
   * Title of the task
   */
  public taskTitle = '';

  constructor(private taskService: TaskService) { }

  /**
   * Adds the task to the list on clicking enter button
   *
   * @param event keyboard event
   */
  public onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.taskService.addTask(this.taskTitle);
      this.taskTitle = "";
    }
  }

}
