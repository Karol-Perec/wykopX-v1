import React from 'react';
import NavItems from '../NavItems/NavItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import * as S from './style';

const Topbar = ({ onDrawerToggleClick }) => {
  return (
    <S.Header>
      <DrawerToggle onClick={onDrawerToggleClick} />
      <nav>
        <NavItems topBarMode />
      </nav>
    </S.Header>
  );
};

export default Topbar;
