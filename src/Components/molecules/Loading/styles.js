// styles.js
import styled from 'styled-components';

export const LoaderContainer = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  width: 100vw; 
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8); 
  z-index: 9999;
`;

export const LoaderImage = styled.img`
  width: 50px;
  height: 50px;
`;
