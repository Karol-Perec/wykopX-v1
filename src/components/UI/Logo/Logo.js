import React from 'react';

import logoImg from '../../../assets/images/wykop.png';
import * as S from './style';

const Logo = ({topBarMode}) => {
  return (
    <S.Div>
      <S.Img src={logoImg} alt='' topBarMode={topBarMode}/>
    </S.Div>
  );
};

export default Logo;
