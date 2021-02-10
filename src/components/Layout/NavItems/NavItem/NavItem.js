import React from 'react';
import { NavLink } from 'react-router-dom';

import * as S from './style';

const NavItem = (props) => {
  return (
    <S.ListItem>
      <NavLink to={props.link} exact={props.exact}>
        {props.children}
      </NavLink>
    </S.ListItem>
  );
};

export default NavItem;
