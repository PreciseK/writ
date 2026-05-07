"use client";

import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import HomeNavbar from './HomeNavbar';
import Footer from './Footer';

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0f172a]">
      <HomeNavbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
