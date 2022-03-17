import { TASK_STATES } from "../../types";
import { TasksStateProps } from "./types";

/****  Initial State  ****/
export const defaultTasks = [
  { id: '1', title: 'Something', state: TASK_STATES.DEFAULT },
  { id: '2', title: 'Something more', state: TASK_STATES.DEFAULT },
  { id: '3', title: 'Something else', state: TASK_STATES.DEFAULT },
  { id: '4', title: 'Something again', state: TASK_STATES.DEFAULT },
];

export const initialState: TasksStateProps = { loading: false, tasks: defaultTasks };