import {
  Injectable,
} from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
} from 'rxjs';
import {
 getFilteredTasks,
} from '../../helpers';
import {
  FilterStatus,
  Task,
  TaskStatus,
} from '../../models';

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

  /** Current filter state */
  private filterStateSubject$ = new BehaviorSubject<FilterStatus>(FilterStatus.ALL);
  public filterState$ =this.filterStateSubject$.asObservable();

  /**
   * Filters tasks based on the state selected
   */
  public filteredTasks$: Observable<Task[]>

  /**
   * Number of active items
   */
  public numberOfActiveTasks$: Observable<Number>

  constructor() {
    this.filteredTasks$ = combineLatest([this.tasksSubject$, this.filterStateSubject$]).pipe(
      map(([tasks, filterBy]) => getFilteredTasks(tasks, filterBy))
    );

    this.numberOfActiveTasks$ = this.tasksSubject$.pipe(
      map(tasks => tasks.filter(task => task.status === TaskStatus.ACTIVE).length)
    );
  }

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
   * Clears completed tasks
   */
  public clearCompletedTasks() {
    this.tasks = this.tasks.filter(task => task.status !== TaskStatus.COMPLETED);
    this.tasksSubject$.next(this.tasks);
  }

  /**
   * Marks the given task as completed
   *
   * @param task task to be set as completed
   */
  public updateTaskStatus(task: Task, newStatus: TaskStatus) {
    this.tasks = this.tasks.map(t => t.id === task.id ? { ...t, status: newStatus } : t);
    this.tasksSubject$.next(this.tasks);
  }

  /**
   * Sets filtered state value
   *
   * @param status new status
   */
  public setFilterStatus(status: FilterStatus) {
    this.filterStateSubject$.next(status);
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
