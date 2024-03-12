import React, { ReactNode } from 'react';
import Nav from './Nav'; 
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
    <Nav />
        {children}
      <Footer />
    </>
  );
};

export default Layout;