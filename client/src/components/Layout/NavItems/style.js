import styled from 'styled-components';

export const UnorderedList = styled.ul`
  display: ${(props) => (props.topBarMode ? 'none' : 'flex')};
  margin: 0;
  padding: 0;
  list-style: none;
  flex-flow: column;
  align-items: left;
  height: 100%;

  @media (min-width: 600px) {
    display: flex;
    flex-flow: row;
    align-items: center;
  }
`;
