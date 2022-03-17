import React from "react";
import { TaskType } from "../../types";

/****  State and Dispatch Props  ****/
export type TasksStateProps = {
    loading: boolean;
    tasks: TaskType[];
}

/****  Action Keys  ****/
export enum TasksActionKeys {
  onPinTask = "onPinTask",
  onArchiveTask = "onArchiveTask",
}

/****  Action Types  ****/
export type TasksActionTypes = {
  type: TasksActionKeys.onArchiveTask | TasksActionKeys.onPinTask;
  id: string;
}

/****  Context  ****/
export type TasksDispatchProps = {
  onPinTask: (id: string) => void,
  onArchiveTask: (id: string) => void,
}

export type TasksContextType = {
  state: TasksStateProps;
  actions: TasksDispatchProps;
}