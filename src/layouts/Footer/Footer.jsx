import React from 'react';
import { Sparkles, Twitter, Github } from 'lucide-react';

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
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#github" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
