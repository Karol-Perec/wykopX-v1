import React from 'react';
import NavItem from './NavItem/NavItem';

import * as S from './style';

const NavItems = () => {
  const isAuthenticated = false; //////////

  const myWykop = isAuthenticated ? (
    <NavItem link='/moj'>Mój Wykop</NavItem>
  ) : null;

  return (
    <S.UnorderedList>
      <NavItem link='/' exact>
        Główna
      </NavItem>
      <NavItem link='/wykopalisko'>Wykopalisko</NavItem>
      <NavItem link='/hity'>Hity</NavItem>
      <NavItem link='/mikroblog'>Mikroblog</NavItem>
      {myWykop}
    </S.UnorderedList>
  );
};

export default NavItems;
