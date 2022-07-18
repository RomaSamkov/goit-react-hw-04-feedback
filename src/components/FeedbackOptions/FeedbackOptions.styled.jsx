import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  width: 300px;
  gap: 10px;
  height: 25px;
  margin: 10px auto;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 0 10px;
  width: 100px;
  background-color: rgb(133, 180, 222);
  color: var(--light-text-color);
  height: 100%;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &::first-letter {
    text-transform: uppercase;
  }
  &:hover,
  &:focus {
    color: #fff;
    background-color: rgb(114, 79, 163);
  }
`;
