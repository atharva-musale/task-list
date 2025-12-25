import {
  BehaviorSubject,
} from "rxjs";
import {
  FilterStatus,
  Task,
} from "../../models";
import {
  TaskService,
} from "./task.service";

export class MockTaskService implements Readonly<TaskService> {
  public selectedFilter$ = new BehaviorSubject<FilterStatus>(FilterStatus.ALL);
  public filteredTasks$ = new BehaviorSubject<Task[]>([]);
  public numberOfActiveTasks$ = new BehaviorSubject(0);
  public tasks$ = new BehaviorSubject<Task[]>([]);

  public clearCompletedTasks = jasmine.createSpy('clearCompletedTasks');
  public updateTaskStatus = jasmine.createSpy('updateTaskStatus');
  public setFilterStatus = jasmine.createSpy('setFilterStatus');
  public addTask = jasmine.createSpy('addTask');
  public removeTask = jasmine.createSpy('removeTask');
  public markTaskAsCompleted = jasmine.createSpy('markTaskAsCompleted');
}
