import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 md:top-4 left-1/2 -translate-x-1/2 w-full md:w-[calc(100%-2rem)] max-w-[1440px] z-[100] md:rounded-full bg-slate-900/40 backdrop-blur-xl border-b md:border border-white/10 shadow-lg px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 font-bold text-xl text-white cursor-pointer">
          <div className="bg-blue-500 rounded-full p-1.5">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span>Nexus</span>
        </div>

        <nav className={`fixed inset-y-0 right-0 w-64 bg-slate-900/95 backdrop-blur-2xl border-l border-white/10 p-8 flex flex-col gap-8 transition-transform duration-300 md:static md:w-auto md:bg-transparent md:border-none md:p-0 md:flex-row md:items-center md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <a href="#features" className="text-slate-300 hover:text-white transition-colors font-medium text-sm" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#analytics" className="text-slate-300 hover:text-white transition-colors font-medium text-sm" onClick={() => setIsMobileMenuOpen(false)}>Analytics</a>
          <a href="#pricing" className="text-slate-300 hover:text-white transition-colors font-medium text-sm" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-4 md:mt-0">
            <Button variant="ghost" className="w-full md:w-auto text-slate-300 hover:text-white hover:bg-white/10">Log In</Button>
            <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
          </div>
        </nav>

        <button 
          className="md:hidden text-white z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
};

export default Header;
