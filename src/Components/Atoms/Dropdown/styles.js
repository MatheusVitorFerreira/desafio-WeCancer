// DropdownStyles.js
import styled, { css } from 'styled-components';

const baseBoxStyle = css`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const baseListReset = css`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Dropdown = styled.div`
  position: absolute;
  bottom: calc(100% + 8px);
  right: 0;
  ${baseBoxStyle};
  padding: 0.5rem;
  z-index: 10;
  min-width: 120px;
`;

export const DropdownList = styled.ul`
  ${baseListReset};
`;

export const DropdownItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Arrow = styled.div`
  position: absolute;
  bottom: -6px;
  right: 10px;
  width: 12px;
  height: 12px;
  ${baseBoxStyle};
  transform: rotate(45deg);
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  z-index: -1;
`;
