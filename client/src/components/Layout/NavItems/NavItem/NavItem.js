import React from 'react';

import * as S from './style';

const NavItem = ({ link, exact, children, isActive, onClick }) => {
  return (
    <S.ListItem>
      <S.NavLinkWrapper
        to={link}
        exact={exact}
        isActive={isActive}
        onClick={onClick}>
        {children}
      </S.NavLinkWrapper>
    </S.ListItem>
  );
};

export default NavItem;
