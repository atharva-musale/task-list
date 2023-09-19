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
