import {
  FilterStatus,
  Task,
  TaskStatus,
} from '../../models';

export function getFilteredTasks(tasks: Task[], filterBy: FilterStatus): Task[] {
  if (filterBy === FilterStatus.ALL) {
    return tasks;
  } else if (filterBy === FilterStatus.ACTIVE) {
    return tasks.filter(task => task.status === TaskStatus.ACTIVE);
  } else {
    return tasks.filter(task => task.status === TaskStatus.COMPLETED);
  }
}

export function isTaskActive(task: Task): boolean {
  return task.status === TaskStatus.ACTIVE;
}

export function isTaskCompleted(task: Task): boolean {
  return task.status === TaskStatus.COMPLETED;
}
