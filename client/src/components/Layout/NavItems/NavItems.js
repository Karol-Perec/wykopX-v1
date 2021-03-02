import React from 'react';
import NavItem from './NavItem/NavItem';

import * as S from './style';

const NavItems = ({ topBarMode, onNavItemClick }) => {
  const isAuthenticated = false; //////////TODO

  const myWykop = isAuthenticated ? (
    <NavItem link='/moj'>Mój Wykop</NavItem>
  ) : null;

  return (
    <S.UnorderedList topBarMode={topBarMode}>
      <NavItem link='/' exact onClick={onNavItemClick}>
        Główna
      </NavItem>
      <NavItem link='/wykopalisko' onClick={onNavItemClick}>
        Wykopalisko
      </NavItem>
      <NavItem link='/hity' onClick={onNavItemClick}>
        Hity
      </NavItem>
      <NavItem link='/mikroblog' onClick={onNavItemClick}>
        Mikroblog
      </NavItem>
      {myWykop}
    </S.UnorderedList>
  );
};

export default NavItems;
