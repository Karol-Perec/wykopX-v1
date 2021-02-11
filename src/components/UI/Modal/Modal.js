import React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import * as S from './style';

const Modal = ({ show, onBackdropClick, children }) => (
  <>
    <Backdrop show={show} onClick={onBackdropClick} />
    <S.Div>{children}</S.Div>
  </>
);

const isShowUnchanged = (prevProps, nextProps) =>
  prevProps.show === nextProps.show &&
  prevProps.children === nextProps.children;

export default React.memo(Modal, isShowUnchanged);
