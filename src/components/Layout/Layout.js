import React, { useState } from 'react';
import Footer from './Footer/Footer';
import SideDrawer from './SideDrawer/SideDrawer';
import TopBar from './TopBar/TopBar';


const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      <SideDrawer />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
