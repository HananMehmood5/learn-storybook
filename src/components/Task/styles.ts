import styled, { css } from "styled-components";

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
    :hover {
    background-image: linear-gradient(to bottom, #e5f9f7 0%, #f0fffd 100%);
    }
`;

export const CheckboxContainer = styled.div<{ state?: string }>`
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
      state === 'TASK_ARCHIVED' &&
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


export const ItemTitle = styled.p<{ status?: string }>`
  white-space: nowrap;
  background: transparent;
  width: 100%;
  margin: 0 0 0 0.75rem;

  ${({ status }) =>
      status === 'TASK_ARCHIVED' &&
      css`
        color: #aaa;
      `}
`

export const ActionContainer = styled.div<{ state?: string }>`

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
        state === 'TASK_PINNED' &&
        css`
        svg {
            color: #2cc5d2;
        }
    `}
`;