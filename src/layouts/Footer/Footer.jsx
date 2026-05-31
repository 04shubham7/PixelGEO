import React from 'react';
import { Sparkles } from 'lucide-react';

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const Footer = () => {
  return (
    <footer className="bg-slate-900/80 border-t border-white/10 py-16 mt-16">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 font-bold text-xl text-white mb-4">
              <div className="bg-blue-500 rounded-full p-1.5">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span>Nexus</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm">
              Empowering the next generation of frontend engineering with robust, scalable primitives.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#features" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Features</a></li>
              <li><a href="#analytics" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Analytics</a></li>
              <li><a href="#pricing" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Pricing</a></li>
              <li><a href="#changelog" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#docs" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Documentation</a></li>
              <li><a href="#blog" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Blog</a></li>
              <li><a href="#community" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Community</a></li>
              <li><a href="#help" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#privacy" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#terms" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
          <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} Nexus Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#twitter" className="text-slate-400 hover:text-white transition-colors">
              <TwitterIcon />
            </a>
            <a href="#github" className="text-slate-400 hover:text-white transition-colors">
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
