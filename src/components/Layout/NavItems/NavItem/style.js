import styled from 'styled-components';

export const ListItem = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;
  background-color: ${props => props.theme.PRIMARY_COLOR};

  a {
    color: #f38181;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;

    &:hover,
    &:active,
    &.active {
      color: #aaa;
    }
  }

  @media (min-width: 500px) {
    margin: 0;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;

    a {
      color: white;
      height: 100%;
      padding: 16px 10px;
      border-bottom: 4px solid transparent;

      &.active {
        border-bottom: 4px solid #eaffd0;
        color: #f38181;
      }
    }
  }
`;
