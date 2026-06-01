import React from 'react';
import { Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#fdf4ea] dark:bg-background border-t border-border pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 font-bold text-xl text-foreground mb-6">
              <div className="bg-brand-500 rounded-full p-1.5 shadow-md">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Intel Realty</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm pr-4">
              Intel Realty is a next-generation proptech marketplace that brings structure, transparency, and intelligence to real estate. By enabling secure communication and verified listings, we help brokers grow and buyers find the right property—faster and smarter.
            </p>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold text-lg mb-6">Top Cities</h4>
            <div className="grid grid-cols-2 gap-y-4 gap-x-4">
              <ul className="flex flex-col gap-4">
                <li><a href="#delhi" className="text-muted-foreground hover:text-brand-500 transition-colors text-sm">Delhi</a></li>
                <li><a href="#noida" className="text-muted-foreground hover:text-brand-500 transition-colors text-sm">Noida</a></li>
                <li><a href="#faridabad" className="text-muted-foreground hover:text-brand-500 transition-colors text-sm">Faridabad</a></li>
                <li><a href="#sonipat" className="text-muted-foreground hover:text-brand-500 transition-colors text-sm">Sonipat</a></li>
                <li><a href="#alwar" className="text-muted-foreground hover:text-brand-500 transition-colors text-sm">Alwar</a></li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li><a href="#gurgaon" className="text-muted-foreground hover:text-brand-500 transition-colors text-sm">Gurgaon</a></li>
                <li><a href="#greater-noida" className="text-muted-foreground hover:text-brand-500 transition-colors text-sm">Greater Noida</a></li>
                <li><a href="#ghaziabad" className="text-muted-foreground hover:text-brand-500 transition-colors text-sm">Ghaziabad</a></li>
                <li><a href="#meerut" className="text-muted-foreground hover:text-brand-500 transition-colors text-sm">Meerut</a></li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="text-muted-foreground hover:text-brand-500 transition-colors text-sm">Home</Link></li>
              <li><Link to="/discover" className="text-muted-foreground hover:text-brand-500 transition-colors text-sm">Discover</Link></li>
              <li><Link to="/featured" className="text-muted-foreground hover:text-brand-500 transition-colors text-sm">Featured Properties</Link></li>
              <li><a href="#blog" className="text-muted-foreground hover:text-brand-500 transition-colors text-sm">Blog</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-brand-500 transition-colors text-sm">Pricing</a></li>
              <li><a href="#privacy" className="text-muted-foreground hover:text-brand-500 transition-colors text-sm">Privacy policy</a></li>
              <li><a href="#terms" className="text-muted-foreground hover:text-brand-500 transition-colors text-sm">Terms of use</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-muted-foreground text-sm">Intel Realty</li>
              <li className="text-muted-foreground text-sm">+91-93156-43491</li>
              <li><a href="mailto:support@intelrealty.com" className="text-muted-foreground hover:text-brand-500 transition-colors text-sm">support@intelrealty.com</a></li>
              <li><a href="#instagram" className="text-muted-foreground hover:text-brand-500 transition-colors text-sm mt-2 block">Instagram</a></li>
              <li><a href="#facebook" className="text-muted-foreground hover:text-brand-500 transition-colors text-sm">Facebook</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-12 border-t border-border/50 gap-4">
          <p className="text-muted-foreground text-sm">&copy; 2026 Intel Realty. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="text-muted-foreground hover:text-brand-500 transition-colors text-sm font-medium">Privacy</a>
            <a href="#terms" className="text-muted-foreground hover:text-brand-500 transition-colors text-sm font-medium">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
