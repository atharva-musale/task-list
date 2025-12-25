import {
 TaskStatus,
} from "./task-status";

/**
 * Interface for Task
 */
export interface Task {
  /**
   * id for the task
   */
  id: number;

  /**
   * Title of the task
   */
  title: string;

  /**
   * Description of the task
   */
  description?: string;

  /**
   * Status of the task
   */
  status: TaskStatus;
}

export const mockTasks: Task[] = [
  { id: 1, title: 'Online JavaScript course', status: TaskStatus.ACTIVE },
  { id: 2, title: 'Exercise', status: TaskStatus.COMPLETED },
  { id: 3, title: 'Read for 1 hour', status: TaskStatus.ACTIVE },
  { id: 4, title: 'Pick up groceries', status: TaskStatus.ACTIVE },
  { id: 5, title: 'Go for a walk', status: TaskStatus.ACTIVE },
  { id: 6, title: 'Call mom', status: TaskStatus.ACTIVE }
];
