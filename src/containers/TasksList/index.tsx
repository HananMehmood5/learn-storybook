import React, { useContext } from 'react';
import * as S from "./styles";

import { TasksContext } from '../../contexts/TasksContext';

import TaskListDisplay from '../../components/TaskList';

const TasksList: React.FC = () => {
  const { state, actions: { onPinTask, onArchiveTask } } = useContext(TasksContext);
  
  return (
    <S.ListShow className="page lists-show">
      <S.ListShowNav>
        <S.PageTitle>
          <S.TitleWrapper>Taskbox</S.TitleWrapper>
        </S.PageTitle>
      </S.ListShowNav>
      <TaskListDisplay {...state} onPinTask={onPinTask} onArchiveTask={onArchiveTask} />
    </S.ListShow>
  );
}

export default TasksList;