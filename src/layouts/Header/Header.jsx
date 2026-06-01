import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Building2, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../components/ThemeContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 md:top-4 left-0 right-0 mx-auto w-full md:w-[calc(100%-2rem)] max-w-[1440px] z-[100] md:rounded-full bg-background/95 md:bg-background/80 backdrop-blur-xl border-b md:border border-border shadow-lg px-6 py-4 transition-colors duration-300">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 font-bold text-xl text-foreground cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="bg-brand-500 rounded-full p-1.5">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <span>Intel Realty</span>
        </Link>

        <nav className={`absolute top-full left-0 w-full bg-background/95 backdrop-blur-2xl border-b border-border p-8 flex flex-col gap-8 transition-all duration-300 md:static md:w-auto md:bg-transparent md:border-none md:p-0 md:flex-row md:items-center ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 md:opacity-100 md:visible md:translate-y-0'}`}>
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-brand-500" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/discover" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-brand-500" onClick={() => setIsMobileMenuOpen(false)}>Discover</Link>
          <Link to="/featured" className="text-muted-foreground hover:text-brand-500 transition-colors font-medium text-sm relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-brand-500" onClick={() => setIsMobileMenuOpen(false)}>Featured</Link>
          <a href="/#pricing" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-brand-500" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-4 md:mt-0">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-muted text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <Button asChild className="w-full md:w-auto bg-brand-500 hover:bg-brand-600 text-white">
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
            </Button>
          </div>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-muted text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <button 
            className="text-foreground z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
