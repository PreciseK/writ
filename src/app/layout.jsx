import '../index.css';
import HomeNavbar from '../components/HomeNavbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'WRIT Website',
  description: 'IT Consultancies, Digital Agencies, System Integrators',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-[#0f172a]">
        <HomeNavbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
