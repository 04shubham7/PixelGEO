import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, User, Mail, Lock, Eye, Users, TrendingUp, ShieldCheck } from 'lucide-react';

const Signup = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex w-1/2 relative">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img src="/signup_bg.png" alt="High-rise building" className="absolute inset-0 w-full h-full object-cover" />
        
        <div className="relative z-20 flex flex-col justify-center px-16 xl:px-24 w-full">
          <h1 className="text-5xl xl:text-6xl font-bold text-white mb-6 uppercase leading-[1.1] tracking-tight">
            JOIN THE<br />
            <span className="text-brand-500">FUTURE</span><br />
            OF REAL ESTATE
          </h1>
          
          <div className="flex gap-2 mb-8">
            <div className="w-12 h-1 bg-brand-500 rounded-full" />
            <div className="w-8 h-1 bg-[#ffede0] rounded-full" />
            <div className="w-8 h-1 bg-[#ffede0] rounded-full" />
          </div>
          
          <p className="text-white/90 text-lg max-w-md leading-relaxed">
            Connect with thousands of verified brokers and clients in our secure, professional real estate marketplace.
          </p>
        </div>

        <div className="absolute bottom-12 left-16 xl:left-24 z-20 flex flex-col gap-4">
          <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10 w-max shadow-lg">
            <Users className="text-white/80 w-5 h-5" />
            <span className="text-white font-medium text-sm">Verified Brokers</span>
          </div>
          <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10 w-max shadow-lg">
            <TrendingUp className="text-white/80 w-5 h-5" />
            <span className="text-white font-medium text-sm">Verified Leads</span>
          </div>
          <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10 w-max shadow-lg">
            <ShieldCheck className="text-white/80 w-5 h-5" />
            <span className="text-white font-medium text-sm">Verified Transactions</span>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 bg-background flex flex-col py-12 px-8 sm:px-16 xl:px-32 overflow-y-auto">
        <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground text-sm font-medium transition-colors w-max mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <div className="max-w-md w-full mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold text-foreground mb-2">Create Account</h2>
          <p className="text-muted-foreground mb-10">Join our community of real estate professionals</p>

          <form className="flex flex-col gap-6">
            <div>
              <label className="text-sm font-medium text-[#4f5e71] dark:text-muted-foreground block mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input placeholder="Enter your full name" className="pl-12 py-6 bg-transparent border-border rounded-xl focus-visible:ring-brand-500" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-[#4f5e71] dark:text-muted-foreground block mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input type="email" placeholder="Enter your email" className="pl-12 py-6 bg-transparent border-border rounded-xl focus-visible:ring-brand-500" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-[#4f5e71] dark:text-muted-foreground block mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input type="password" placeholder="Create a strong password" className="pl-12 pr-12 py-6 bg-transparent border-border rounded-xl focus-visible:ring-brand-500" />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-2 mt-3 text-muted-foreground text-xs font-medium">
                <div className="w-3 h-3 rounded-full border border-muted-foreground/50 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-transparent" />
                </div>
                At least 6 characters
              </div>
            </div>

            <Button className="w-full bg-brand-500 hover:bg-brand-600 text-white rounded-xl py-6 text-base font-semibold shadow-lg hover:shadow-brand-500/25 transition-all mt-4">
              Continue <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background px-4 text-muted-foreground text-xs uppercase tracking-wider font-medium">Or continue with</span>
            </div>
          </div>

          <Button variant="outline" className="w-full border-border bg-transparent hover:bg-muted text-foreground rounded-xl py-6 font-medium">
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Continue with Google
          </Button>

          <p className="text-center text-muted-foreground mt-10 text-sm">
            Already have an account? <Link to="/login" className="text-brand-500 font-semibold hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
