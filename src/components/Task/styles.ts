import styled, { css } from "styled-components";
import { TASK_STATES } from "../../types"

export const ListItem = styled.div`
    font-size: 14px;
    line-height: 20px;
    display: flex;
    height: 3rem;
    width: 100%;
    background: white;
    transition: all ease-out 150ms;
    align-items: center;
    position: relative;
    flex-direction: row;
    border-bottom: 1px solid #f0f9fb;

    :hover {
        background-image: linear-gradient(to bottom, #e5f9f7 0%, #f0fffd 100%);
    }
`;

export const CheckboxContainer = styled.div<{ state?: TASK_STATES }>`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1em;
    margin: 0;
    height: 3rem;
    width: 2.25rem;

    input[type="checkbox"] {
        font-size: 1em;
        visibility: hidden;
        margin-left: 1.5rem;
    }

    span {
        position: absolute;
        top: 50%;
        right: auto;
        bottom: auto;
        left: 1.75rem;
        width: 0.85em;
        height: 0.85em;
        transform: translate3d(-50%, -50%, 0);
        box-shadow: #2cc5d2 0 0 0 1px inset;
    }

    ${({ state }) =>
      state === TASK_STATES.TASK_ARCHIVED &&
      css`
        svg {
            font-size: 16px;
            line-height: 24px;
            box-shadow: none;
            color: #2cc5d2;
            margin-top: -1px;
            line-height: 1;
        }
    `}
`;


export const ItemTitle = styled.p<{ status?: TASK_STATES }>`
  white-space: nowrap;
  background: transparent;
  width: 100%;
  margin: 0 0 0 0.75rem;

  ${({ status }) =>
      status === TASK_STATES.TASK_ARCHIVED &&
      css`
        color: #aaa;
      `}
`

export const ActionContainer = styled.div<{ state?: TASK_STATES }>`
    transition: all 200ms ease-in;
    padding-right: 20px;

    svg {
        width: 0.85em;
        height: 0.85em;
        font-size: 16px;
        line-height: 1.5;
        color: #eee;
    }

    :hover {
        svg {
            color: #2cc5d2;
        }
    }

    ${({ state }) =>
        state === TASK_STATES.TASK_PINNED &&
        css`
        svg {
            color: #2cc5d2;
        }
    `}
`;