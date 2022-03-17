import { Dispatch as ReactDispatch } from "react";
import { TasksActionKeys, TasksActionTypes } from "./types";

const defineActions = (dispatch: ReactDispatch<TasksActionTypes>,) => ({
    onPinTask: (id: string) => dispatch({ type: TasksActionKeys.onPinTask, id: id }),
    onArchiveTask: (id: string) => dispatch({ type: TasksActionKeys.onArchiveTask, id: id }),
});
    
export default defineActions;