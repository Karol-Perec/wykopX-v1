import React, { useState } from 'react';
import Footer from './Footer/Footer';
import SideDrawer from './SideDrawer/SideDrawer';
import TopBar from './TopBar/TopBar';

import * as S from './style'

const Layout = ({ children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const handleSideDrawerClose = () => {
    setShowSideDrawer(false);
  };

  const handleSideDrawerOpen = () => {
    setShowSideDrawer((prevState) => !prevState);
  };

  return (
    <>
      <TopBar onDrawerToggleClick={handleSideDrawerOpen} />
      <SideDrawer
        onBackdropClick={handleSideDrawerClose}
        show={showSideDrawer}
      />
      <S.Main>{children}</S.Main>
      <Footer />
    </>
  );
};

export default Layout;
