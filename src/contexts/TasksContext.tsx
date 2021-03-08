import React, { createContext, useReducer } from "react";
import { TASK_STATES, TaskType } from "../types";

/****  State and Dispatch Props  ****/
type TasksStateProps = {
    loading: boolean;
    tasks: TaskType[];
}

/****  Initial State  ****/
const defaultTasks = [
  { id: '1', title: 'Something', state: TASK_STATES.DEFAULT },
  { id: '2', title: 'Something more', state: TASK_STATES.DEFAULT },
  { id: '3', title: 'Something else', state: TASK_STATES.DEFAULT },
  { id: '4', title: 'Something again', state: TASK_STATES.DEFAULT },
];

const initialState: TasksStateProps = { loading: false, tasks: defaultTasks };


/****  Action Keys  ****/
export enum TasksActionKeys {
  onPinTask = "onPinTask",
  onArchiveTask = "onArchiveTask",
}

/****  Action Types  ****/
type TasksActionTypes = {
  type: TasksActionKeys.onArchiveTask | TasksActionKeys.onPinTask;
  id: string;
}

/****  Reducer  ****/
const TasksReducer = (state: TasksStateProps = initialState, action: TasksActionTypes): TasksStateProps => {
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

/****  Context  ****/
type TasksDispatchProps = {
  onPinTask: (id: string) => void,
  onArchiveTask: (id: string) => void,
}

type TasksContextType = {
  state: TasksStateProps;
  actions: TasksDispatchProps;
}

const TasksContext = createContext<TasksContextType | null>(null);


type TasksContextProviderProps = {
  children: React.ReactNode
}

const TasksContextProvider = (props: TasksContextProviderProps) => {
  const [state, dispatch] = useReducer(TasksReducer, initialState);
  const contextValue = {
    state,
    actions: {
      onPinTask: (id: string) => dispatch({ type: TasksActionKeys.onPinTask, id: id }),
      onArchiveTask: (id: string) => dispatch({ type: TasksActionKeys.onArchiveTask, id: id }),
    },
  };

  const { children } = props;
  
  return <TasksContext.Provider value={contextValue}>{children}</TasksContext.Provider>;
}

const TasksContextConsumer = TasksContext.Consumer;

export {
  TasksContext, TasksContextProvider, TasksContextConsumer
};
