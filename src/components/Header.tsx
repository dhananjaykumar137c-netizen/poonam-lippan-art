import { ShoppingBag, Menu, User } from 'lucide-react';
import type { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  isLoggedIn: boolean;
}

export default function Header({ currentPage, setCurrentPage, isLoggedIn }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/30">
      <nav className="flex justify-between items-center w-full px-6 md:px-16 py-4 max-w-7xl mx-auto">
        <button
          onClick={() => setCurrentPage('home')}
          className="font-serif text-2xl md:text-3xl text-primary tracking-tight font-bold"
        >
          Poonam Lippan Art
        </button>

        <div className="hidden md:flex items-center gap-12">
          <button
            onClick={() => setCurrentPage('home')}
            className={`font-medium transition-colors ${currentPage === 'home' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('shop')}
            className={`font-medium transition-colors ${currentPage === 'shop' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Shop Art
          </button>
          <button
            onClick={() => setCurrentPage(isLoggedIn ? 'account' : 'auth')}
            className={`font-medium transition-colors ${currentPage === 'account' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Account
          </button>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <ShoppingBag className="w-6 h-6" />
          </button>
          <button
            className="md:hidden text-primary"
            onClick={() => setCurrentPage(isLoggedIn ? 'account' : 'auth')}
          >
            <User className="w-6 h-6" />
          </button>
          <button className="md:hidden text-primary">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
  );
}
