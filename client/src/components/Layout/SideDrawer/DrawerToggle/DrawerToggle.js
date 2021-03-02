import React from 'react';

import * as S from './style';

const DrawerToggle = ({ onClick }) => (
  <S.OuterDiv onClick={onClick}>
    <S.InnerDiv></S.InnerDiv>
    <S.InnerDiv></S.InnerDiv>
    <S.InnerDiv></S.InnerDiv>
  </S.OuterDiv>
);

export default DrawerToggle;
