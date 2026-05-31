import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

const Hero = () => {
  return (
    <section className="pt-40 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div 
            className="flex flex-col items-center lg:items-start text-center lg:text-left z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
              ✨ New: AI-Powered Analytics
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              Discover Optimization <br />
              <span className="bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">Primitives</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-slate-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              A pixel-perfect, highly performant web interface built for the next generation of frontend engineering. Seamlessly scalable and robust.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-12 text-base w-full sm:w-auto">
                Start Building
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base border-white/20 hover:bg-white/10 text-white w-full sm:w-auto">
                View Documentation
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Visuals */}
          <motion.div 
            className="relative flex justify-center z-10 mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          >
            <div className="w-full max-w-md p-8 glass-panel transform perspective-1000 lg:rotate-y-[-5deg] lg:rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-500">
              <div className="flex items-end gap-4 h-48 mb-8 border-b border-white/10 pb-4">
                {[60, 80, 40, 100, 70].map((height, i) => (
                  <motion.div 
                    key={i}
                    className="flex-1 bg-gradient-to-t from-blue-500/20 to-blue-500 rounded-t-md origin-bottom"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.1), type: "spring", stiffness: 100 }}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">+124%</span>
                  <span className="text-slate-400 text-sm">Conversion</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-3xl font-bold text-white">0.8s</span>
                  <span className="text-slate-400 text-sm">TTI</span>
                </div>
              </div>
            </div>
            
            <motion.div 
              className="hidden lg:block absolute -top-6 -right-6 p-4 rounded-2xl glass-panel"
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <Activity className="w-8 h-8 text-blue-500" />
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
