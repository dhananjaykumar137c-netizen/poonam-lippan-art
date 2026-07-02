import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Auth from './components/Auth';
import Account from './components/Account';
import Shop from './components/Shop';
import type { Page } from './types';
import { supabase } from './supabaseClient';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(!!session);
      if (session && currentPage === 'auth') {
        setCurrentPage('account');
      }
    });

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const loggedIn = !!session;
      setIsLoggedIn(loggedIn);
      if (loggedIn) {
        // Redirect to account if user is on the login page
        setCurrentPage((prev) => (prev === 'auth' ? 'account' : prev));
      } else {
        // Redirect to home if user was on the account page and logged out
        setCurrentPage((prev) => (prev === 'account' ? 'home' : prev));
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogin = () => {
    setCurrentPage('account');
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
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
