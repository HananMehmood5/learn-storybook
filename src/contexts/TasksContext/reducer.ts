import { TASK_STATES } from "../../types";
import { TasksStateProps, TasksActionKeys, TasksActionTypes } from "./types";

/****  Reducer  ****/
const TasksReducer = (state: TasksStateProps, action: TasksActionTypes): TasksStateProps => {
  console.log("xx reducer", action);
  switch (action.type) {
    case TasksActionKeys.onArchiveTask:
      return {
        ...state,
        tasks: state.tasks.map(
          task => (task.id === action.id ?
            {
              ...task,
              state: task.state === TASK_STATES.TASK_ARCHIVED ?
                TASK_STATES.DEFAULT :
                TASK_STATES.TASK_ARCHIVED
            } : task
          )
        ),
      };
    case TasksActionKeys.onPinTask:
      return {
        ...state,
        tasks: state.tasks.map(
          task => (task.id === action.id ?
            {
              ...task,
              state: task.state === TASK_STATES.TASK_PINNED ?
                TASK_STATES.DEFAULT :
                TASK_STATES.TASK_PINNED
            } : task)
        ),
      };
    
    default:
      return state;
  }
};

export default TasksReducer;