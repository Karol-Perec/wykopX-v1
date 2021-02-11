import React, { useState } from 'react';
import Footer from './Footer/Footer';
import SideDrawer from './SideDrawer/SideDrawer';
import TopBar from './TopBar/TopBar';

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
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
