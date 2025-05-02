import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideBarContainer = styled.nav`
  width: 240px;
  height: 100vh;
  position: relative; 
  flex-shrink: 0;
  background-color: #FCFCFC;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

export const Logo = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

export const Header = styled.h1`
  font-size: 1.7rem;
  font-weight: 600;
  color: #556DF0;
  margin: 0;
  text-transform: lowercase;
  line-height: 1.2;
  margin-top: 13px;
`;

export const SubHeader = styled.p`
  font-size: 0.75rem;
  color: #C8CFF8;
  margin: 0;
  margin-top: 2px;
  text-align: left;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ListItemLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  color: #37404D;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 8px;
  width: fit-content;
  padding: 0.25rem 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f0f4ff;
    color: #2d60e3;
    transform: translateX(4px);
  }

  .navIcon {
    margin-right: 2px;
    font-size: 25px;
  }
`;