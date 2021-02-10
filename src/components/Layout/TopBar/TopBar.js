import React from 'react';
import NavItems from '../NavItems/NavItems';

import StyledHeader from './style';

const Topbar = () => {
  return (
    <StyledHeader>
      <NavItems />
    </StyledHeader>
  );
};

export default Topbar;
