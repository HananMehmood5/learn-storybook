export enum TASK_STATES {
    TASK_ARCHIVED = "TASK_ARCHIVED", 
    TASK_PINNED = "TASK_PINNED",
    DEFAULT = "",
}

export type TaskType = {
    id: string;
    title: string;
    state: TASK_STATES;
}