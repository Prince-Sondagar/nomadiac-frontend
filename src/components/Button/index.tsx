import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
}

export const Button = styled.button<ButtonProps>`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border: 0.5px solid #4caf50;
  border-radius: 0.25rem;
  text-align:center;
  text-decoration:none;
  display:inline-block;
  transition:0.5s all ease-out;
  background-color: ${(props) => props.primary ? '#0077FF' : '#FFFFFF'};
  color: ${(props) => props.primary ? '#FFFFFF' : '#000000'};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.primary ? '#0055CC' : '#F0F0F0'};
  }
`;


