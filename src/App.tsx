import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HeroSection from './components/home/HeroSection';
import ScrollToTop from './components/ScrollToTop';

// This is a legacy entry point for the Vite/React Router setup.
// In the Next.js setup, src/app/page.tsx is used instead.

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HeroSection />} />
          {/* Other routes omitted for brevity as they are handled by Next.js now */}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
