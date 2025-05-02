import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonLink = styled(Link)`
  margin-top: 0;
  background-color: #d4d3d3;
  color: #070707;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  width: fit-content;

  &:hover {
    background-color: #4800EB;
    color: white;
  }
`;
