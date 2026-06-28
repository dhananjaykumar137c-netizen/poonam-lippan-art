import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Auth from './components/Auth';
import Account from './components/Account';
import Shop from './components/Shop';
import type { Page } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        isLoggedIn={isLoggedIn}
      />
      
      <main className="flex-grow">
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === 'shop' && <Shop />}
        {currentPage === 'auth' && (
          <Auth 
            onLogin={handleLogin} 
            onExplore={() => setCurrentPage('home')} 
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === 'account' && (
          <Account onLogout={handleLogout} />
        )}
      </main>

      <Footer />
    </div>
  );
}
