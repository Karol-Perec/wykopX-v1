import React from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavItems from '../NavItems/NavItems';
import Logo from '../../UI/Logo/Logo';

import * as S from './style';

const SideDrawer = ({ show, onBackdropClick }) => {
  return (
    <>
      <Backdrop show={show} onClick={onBackdropClick} />
      <S.Div show={show}>
        <Logo/>
        <S.Nav>
          <NavItems onNavItemClick={onBackdropClick}/>
        </S.Nav>
      </S.Div>
    </>
  );
};

export default SideDrawer;
