import React from 'react';

import * as S from './style';

const Backdrop = ({ show, onClick }) =>
  show ? <S.Div onClick={onClick}></S.Div> : null;

export default Backdrop;
