import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('seekers');

  return (
    <section className="py-24 bg-[#fcf8f3] dark:bg-background border-y border-border/50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="/how_it_works.png" 
                alt="Couple consulting with a real estate agent" 
                className="w-full h-auto object-cover aspect-[4/3] lg:aspect-auto lg:h-[600px] hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-[#ffede0] text-brand-600 dark:bg-brand-900/30 text-sm font-semibold rounded-full mb-6">
                How it works
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-[1.15]">
                The smarter way to <span className="text-brand-500">buy<br />and sell property</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                Whether you're a property seeker or a broker — Intel Realty is built to help you close better and faster.
              </p>

              {/* Tabs */}
              <div className="flex gap-4 mb-10">
                <button 
                  onClick={() => setActiveTab('seekers')}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                    activeTab === 'seekers' 
                      ? 'bg-brand-500 text-white shadow-md' 
                      : 'bg-[#eef2f6] text-[#4f5e71] hover:bg-[#e2e8f0] dark:bg-muted dark:text-muted-foreground'
                  }`}
                >
                  For Seekers
                </button>
                <button 
                  onClick={() => setActiveTab('brokers')}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                    activeTab === 'brokers' 
                      ? 'bg-brand-500 text-white shadow-md' 
                      : 'bg-[#eef2f6] text-[#4f5e71] hover:bg-[#e2e8f0] dark:bg-muted dark:text-muted-foreground'
                  }`}
                >
                  For Brokers
                </button>
              </div>

              {/* Steps List */}
              <div className="flex flex-col gap-8 mb-12">
                {/* Step 1 */}
                <div className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 bg-[#ffede0] dark:bg-brand-900/30 rounded-2xl flex items-center justify-center mt-1">
                    <Search className="w-5 h-5 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-1.5">
                      {activeTab === 'seekers' ? 'Describe your needs' : 'List your inventory'}
                    </h4>
                    <p className="text-[#4f5e71] dark:text-muted-foreground">
                      {activeTab === 'seekers' 
                        ? 'Manually or via our smart AI chatbot' 
                        : 'Add properties and update your preferences'}
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 bg-[#ffede0] dark:bg-brand-900/30 rounded-2xl flex items-center justify-center mt-1">
                    <Users className="w-5 h-5 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-1.5">
                      {activeTab === 'seekers' ? 'Get matched with top brokers' : 'Receive verified leads'}
                    </h4>
                    <p className="text-[#4f5e71] dark:text-muted-foreground">
                      {activeTab === 'seekers' 
                        ? "We'll connect you to brokers with the most relevant listings" 
                        : 'Leads land directly in your dashboard'}
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 bg-[#ffede0] dark:bg-brand-900/30 rounded-2xl flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-1.5">
                      {activeTab === 'seekers' ? 'Connect and close your deal' : 'Use AI-powered CRM tools'}
                    </h4>
                    <p className="text-[#4f5e71] dark:text-muted-foreground">
                      {activeTab === 'seekers' 
                        ? 'Shortlist, negotiate, and seal the deal — quickly and securely' 
                        : 'Manage your pipeline, follow-ups, and conversions with ease'}
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild className="bg-brand-500 hover:bg-brand-600 text-white rounded-xl px-8 py-6 text-base font-semibold shadow-lg hover:shadow-brand-500/25 transition-all">
                <Link to="/signup">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
