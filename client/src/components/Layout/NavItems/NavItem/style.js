import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListItem = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  height: 100%;
  text-align: left;

  @media (min-width: 500px) {
    margin: 0;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;
  }
`;

export const NavLinkWrapper = styled(NavLink)`
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;
  color: ${(props) => props.theme.ON_SURFACE_COLOR};

  &:hover,
  &:active,
  &.active {
    color: ${(props) => props.theme.PRIMARY_COLOR};
  }

  @media (min-width: 500px) {
    padding: 16px 10px;
    border-bottom: 4px solid transparent;
    height: 100%;
    &.active {
      border-bottom: 4px solid #fff;
    }
  }
`;
