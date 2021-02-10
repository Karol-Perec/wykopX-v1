import styled from 'styled-components';

export const UnorderedList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;

  @media (min-width: 500px) {
    flex-flow: row;
  }
`;
