import {
 HttpClient,
} from '@angular/common/http';
import {
  Injectable,
} from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  firstValueFrom,
  map,
  Observable,
} from 'rxjs';
import {
 getFilteredTasks,
} from '../../helpers';
import {
  FilterStatus,
  mockTasks,
  Task,
  TaskStatus,
} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly URL = 'http://localhost:5000/tasks';

  /** Current filter state */
  private selectedFilterSubject$ = new BehaviorSubject<FilterStatus>(FilterStatus.ALL);
  public selectedFilter$ = this.selectedFilterSubject$.asObservable();

  /**
   * Filters tasks based on the state selected
   */
  public filteredTasks$: Observable<Task[]>;

  /**
   * Number of active items
   */
  public numberOfActiveTasks$: Observable<number>

  /**
   * Subject to hold tasks
   */
  private tasksSubject$ = new BehaviorSubject<Task[]>(mockTasks);

  constructor(private http: HttpClient) {
    this.getTasksFromServer();

    this.filteredTasks$ = combineLatest([
      this.tasksSubject$.asObservable(),
      this.selectedFilter$
    ]).pipe(
      map(([tasks, selectedFilter]) => getFilteredTasks(tasks || [], selectedFilter))
    );

    this.numberOfActiveTasks$ = this.tasksSubject$.asObservable().pipe(
      map(tasks => tasks ? tasks.filter(task => task.status === TaskStatus.ACTIVE).length : 0)
    );
  }

  /**
   * Adds task to the list
   *
   * @param taskTitle title of the task to be added
   */
  public async addTask(taskTitle: string) {
    const newTaskWithId = this.createTask(taskTitle);
    const addedTask = await firstValueFrom(this.http.post<Task>(this.URL, newTaskWithId));
    this.getTasksFromServer();
    console.log('New task sussessfully added to server:', addedTask);
  }

  /**
   * Removed task from the list
   *
   * @param task task to be deleted
   */
  public async removeTask(task: Task) {
    await firstValueFrom(this.http.delete(`${this.URL}/${task.id}`));
    // this.getTasksFromServer();
    console.log('Task successfully deleted from server:', task);
  }

  /**
   * Clears completed tasks
   */
  public async clearCompletedTasks() {
    const completedTasks = this.tasksSubject$.getValue().filter(task => task.status === TaskStatus.COMPLETED);
    const deleteRequests = completedTasks.map(task =>
      this.http.delete(`${this.URL}/${task.id}`)
    );
    await Promise.all(deleteRequests.map(req => firstValueFrom(req)));
    // this.getTasksFromServer();
    console.log('Completed tasks successfully cleared from server');
  }

  /**
   * Marks the given task as completed
   *
   * @param task task to be set as completed
   */
  public async updateTaskStatus(task: Task, newStatus: TaskStatus) {
    await firstValueFrom(this.http.patch(`${this.URL}/${task.id}`, { status: newStatus }));
    this.getTasksFromServer();
    console.log('Task status successfully updated on server:', task);
  }

  /**
   * Sets filtered state value
   *
   * @param selectedStatus new status
   */
  public setFilterStatus(selectedStatus: FilterStatus) {
    this.selectedFilterSubject$.next(selectedStatus);
  }

  /**
   * Creates a new task object
   *
   * @param taskTitle title of the task
   * @returns task object
   */
  private createTask(taskTitle: string): Task {
    return {
      id: Date.now() + (this.tasksSubject$.getValue()?.length || 0),
      title: taskTitle,
      status: TaskStatus.ACTIVE
    };
  }

  private async getTasksFromServer() {
    try {
      const tasks = await firstValueFrom(this.http.get<Task[]>(this.URL));
      this.tasksSubject$.next(tasks);
    } catch (error) {
      console.error('Error fetching tasks from server, falling back to mock data.', error);
      this.tasksSubject$.next(mockTasks);
    }
  }
}
