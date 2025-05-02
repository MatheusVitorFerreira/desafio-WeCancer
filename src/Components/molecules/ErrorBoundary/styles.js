import styled from 'styled-components';


export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  min-height: 100vh;
  background-color: #f8d7da;
  color: #721c24;
  font-family: 'Arial', sans-serif;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Message = styled.p`
  font-size: 1.2rem;
`;
