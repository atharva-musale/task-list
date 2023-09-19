import {
  Injectable,
} from '@angular/core';
import {
 BehaviorSubject,
} from 'rxjs';
import {
 Task, TaskStatus,
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  /**
   * To store the tasks
   */
  private tasks: Task[] = [
    { id: 1, title: 'Online JavaScript course', status: TaskStatus.ACTIVE },
    { id: 2, title: 'Exercise', status: TaskStatus.COMPLETED },
    { id: 3, title: 'Read for 1 hour', status: TaskStatus.ACTIVE },
    { id: 4, title: 'Pick up groceries', status: TaskStatus.ACTIVE },
    { id: 5, title: 'Go for a walk', status: TaskStatus.ACTIVE },
    { id: 6, title: 'Call mom', status: TaskStatus.ACTIVE }
  ];
  private taskLength = this.tasks.length;

  /**
   * To do operations on the tasks
   */
  private tasksSubject$ = new BehaviorSubject<Task[]>(this.tasks);
  public tasks$ = this.tasksSubject$.asObservable();

  constructor() { }

  /**
   * Adds task to the list
   *
   * @param taskTitle title of the task to be added
   */
  public addTask(taskTitle: string) {
    this.tasks.push(this.createTask(taskTitle));
    this.tasksSubject$.next(this.tasks);
  }

  /**
   * Removed task from the list
   *
   * @param task task to be deleted
   */
  public removeTask(task: Task) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
    this.tasksSubject$.next(this.tasks);
  }

  /**
   * Marks the given task as completed
   *
   * @param task task to be set as completed
   */
  public markTaskAsCompleted(task: Task) {
    this.tasks = this.tasks.map(t => t.id === task.id ? { ...t, status: TaskStatus.COMPLETED } : t);
    this.tasksSubject$.next(this.tasks);
  }

  /**
   * Creates a new task object
   *
   * @param taskTitle title of the task
   * @returns task object
   */
  private createTask(taskTitle: string): Task {
    this.taskLength++;
    return {
      id: this.taskLength,
      title: taskTitle,
      status: TaskStatus.ACTIVE
    };
  }
}
