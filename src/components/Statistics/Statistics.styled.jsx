import styled from 'styled-components';

export const StatsList = styled.ul`
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  & > li {
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 700;
    color: rgb(33 79 120);
  }

  & > li:last-child {
    margin-bottom: 0px;
  }
`;
