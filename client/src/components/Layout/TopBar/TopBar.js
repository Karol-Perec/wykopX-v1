import React from 'react';
import { useDispatch } from 'react-redux';
import NavItems from '../NavItems/NavItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Switch from '@material-ui/core/Switch';

import { switchTheme } from '../../../store/Theme/actions';

import * as S from './style';

//TODO https://material-ui.com/components/switches/
const Topbar = ({ onDrawerToggleClick }) => {
  const dispatch = useDispatch();

  return (
    <S.Header>
      <DrawerToggle onClick={onDrawerToggleClick} />
      <nav>
        <NavItems topBarMode />
      </nav>

      <Switch
        onChange={() => dispatch(switchTheme())}
        color='default'
        inputProps={{ 'aria-label': 'theme switcher' }}
      />
    </S.Header>
  );
};

export default Topbar;
