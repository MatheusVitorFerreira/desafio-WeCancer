import styled from 'styled-components';

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

export const Label = styled.label`
  margin-bottom: 0.6em;
  font-weight: bold;
`;


export const InputContainer = styled.input`
  padding: 0.7em;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  background: #ccc;
  font-size: 1rem;  /* Aumentando o tamanho das letras do valor digitado */
  line-height: 1.5;
  box-sizing: border-box;
  width: 100%; /* Para garantir que o input ocupe toda a largura possível */

  &::placeholder {
    color:rgb(0, 0, 0);
    font-size: 2rem;  /* Tamanho maior para o texto do placeholder também */
  }
`;