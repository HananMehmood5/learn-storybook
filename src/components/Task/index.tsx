import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCheck } from '@fortawesome/free-solid-svg-icons'
import { TASK_STATES } from "../../types"
import * as S from "./styles";

type Props = {
  id: string,
  title: string,
  state: TASK_STATES,
  onArchiveTask: (id: string) => void,
  onPinTask: (id: string) => void,
};

const Task: React.FC<Props> = ({ id, title, state = "", onArchiveTask, onPinTask }) => {
  return (
    <S.ListItem>
      <S.CheckboxContainer state={state}>
        <input
          type="checkbox"
          defaultChecked={false}
          disabled={true}
          name="checked"
        />
        {state === TASK_STATES.TASK_ARCHIVED ? 
          <FontAwesomeIcon icon={faCheck} onClick={() => onPinTask(id)} />
          :
          <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
        }
      </S.CheckboxContainer>
      <S.ItemTitle status={state}>{title}</S.ItemTitle>
      {state !== TASK_STATES.TASK_ARCHIVED && (
        <S.ActionContainer state={state} onClick={event => event.stopPropagation()}>
          <FontAwesomeIcon icon={faStar} onClick={() => onPinTask(id)} />  
        </S.ActionContainer>
      )}
    </S.ListItem>
  );
}

export default Task;