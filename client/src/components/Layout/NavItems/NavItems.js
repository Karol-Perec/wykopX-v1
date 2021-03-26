import React from 'react';
import { useSelector } from 'react-redux';

import NavItem from './NavItem/NavItem';
import * as S from './style';

const NavItems = ({ topBarMode, onNavItemClick }) => {
  const isAuthenticated = useSelector((state) => state.auth.token !== null);

  const guardedNavs = isAuthenticated ? (
    <>
      <NavItem link='/logout'>Wyloguj się</NavItem>
    </>
  ) : (
    <NavItem link='/login' onClick={onNavItemClick}>
      Zaloguj się
    </NavItem>
  );

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
      {guardedNavs}
    </S.UnorderedList>
  );
};

export default NavItems;
