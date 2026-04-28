"use client";

import { usePathname } from 'next/navigation';
import HomeNavbar from './HomeNavbar';
import Footer from './Footer';

const Layout = () => {
  const { pathname } = ({ pathname: usePathname() });
  const isHome = pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0f172a]">
      <HomeNavbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
