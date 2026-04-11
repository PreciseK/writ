import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0f172a] font-inter">
      {!isHome && <Navbar />}
      <main className={isHome ? 'flex-grow' : 'flex-grow pt-[80px]'}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;