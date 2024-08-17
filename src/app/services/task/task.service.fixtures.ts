import {
  ReplaySubject,
} from "rxjs";
import {
  Task,
} from "../../models";
import {
  TaskService,
} from "./task.service";

export class MockTaskService implements Readonly<TaskService> {
  public tasks$ = new ReplaySubject<Task[]>(1);

  public addTask = jasmine.createSpy('addTask');
  public removeTask = jasmine.createSpy('removeTask');
  public markTaskAsCompleted = jasmine.createSpy('markTaskAsCompleted');
}
