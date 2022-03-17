import React, { createContext, useReducer } from "react";
import { TasksContextType } from "./types";
import reducer from "./reducer";
import defineActions from "./actions";
import { initialState } from "./state";

const TasksContext = createContext<TasksContextType>({
    state: initialState,
    actions: {
        onPinTask: () => { },
        onArchiveTask: () => { },
    },
});

const TasksContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = {
    state,
    actions: defineActions(dispatch),
  };
  
  return <TasksContext.Provider value={contextValue}>{children}</TasksContext.Provider>;
}

const TasksContextConsumer = TasksContext.Consumer;

export {
  TasksContext, TasksContextProvider, TasksContextConsumer
};
