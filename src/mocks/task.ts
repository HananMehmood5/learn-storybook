import { TASK_STATES } from "../types"

export const Task = {
    id: "1",
    title: 'Test Task',
    state: TASK_STATES.DEFAULT,
};

export const Tasks = [
    { ...Task, id: "1", title: "Task 1" },
    { ...Task, id: "2", title: "Task 2" },
    { ...Task, id: "3", title: "Task 3" },
    { ...Task, id: "4", title: "Task 4" },
    { ...Task, id: "5", title: "Task 5" },
    { ...Task, id: "6", title: "Task 6" },
];

export const PinnedTasks = [
    ...Tasks.slice(0, 5),
    { id: "6", title: "Task 6 (pinned)", state: TASK_STATES.TASK_PINNED },
];