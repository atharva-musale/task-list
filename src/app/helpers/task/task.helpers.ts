import {
  FilterStatus,
  Task,
  TaskStatus,
} from '../../models';

/**
 * Filters the tasks based on the given criteria
 *
 * @param tasks list of tasks
 * @param filterBy criteria for filtering
 * @returns filtered tasks
 */
export function getFilteredTasks(tasks: Task[], filterBy: FilterStatus): Task[] {
  if (filterBy === FilterStatus.ALL) {
    return tasks;
  } else if (filterBy === FilterStatus.ACTIVE) {
    return tasks.filter(task => task.status === TaskStatus.ACTIVE);
  } else {
    return tasks.filter(task => task.status === TaskStatus.COMPLETED);
  }
}

/**
 * Returns whether the task is active
 *
 * @param task task
 * @returns boolean
 */
export function isTaskActive(task: Task): boolean {
  return task.status === TaskStatus.ACTIVE;
}

/**
 * Returns whether the task is completed
 *
 * @param task task
 * @returns boolean
 */
export function isTaskCompleted(task: Task): boolean {
  return task.status === TaskStatus.COMPLETED;
}
