import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { TASK_STATES } from "../../types"
import Task from '../Task';
import * as S from "./styles";


type Props = {
  loading: boolean,
    tasks: {
        id: string,
        title: string,
        state: TASK_STATES,
    }[],
  onPinTask: (id: string) => void,
  onArchiveTask: (id: string) => void,
}

export const TaskList: React.FC<Props> = ({
    loading = false,
    tasks,
    onPinTask,
    onArchiveTask
}) => {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  const LoadingRow = (
    <S.LoadingItem>
      <S.GlowCheckBox/>
      <S.GlowTextSpan>
        <span>Loading</span> <span>cool</span> <span>state</span>
      </S.GlowTextSpan>
    </S.LoadingItem>
  );

  if (loading) {
    return (
      <S.ListItems>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </S.ListItems>
    );
  }

  if (tasks.length === 0) {
    return (
      <S.ListItems>
        <S.WrapperMessage>
            <FontAwesomeIcon icon={faCheck}  />
            <S.WrapperTitle>You have no tasks</S.WrapperTitle>
            <S.WrapperSubTitle>Sit back and relax</S.WrapperSubTitle>
        </S.WrapperMessage>
      </S.ListItems>
    );
  }

  const tasksInOrder = [
    ...tasks.filter((t) => t.state === 'TASK_PINNED'),
    ...tasks.filter((t) => t.state !== 'TASK_PINNED'),
  ];

  return (
    <div className="list-items">
      {tasksInOrder.map((task) => (
        <Task key={task.id} {...task} {...events} />
      ))}
    </div>
  );
}

export default TaskList;