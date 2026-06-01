import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Home } from 'lucide-react';

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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  // Moves the background down at half the speed of the scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="pt-40 pb-24 relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0 w-full h-[130%]"
        style={{ y: backgroundY }}
      >
        <img 
          src="/hero_parallax_bg.png" 
          alt="Cityscape Aerial View" 
          className="w-full h-full object-cover"
        />
        {/* Dynamic gradient overlay to blend seamlessly into the next section while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </motion.div>

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div 
            className="flex flex-col items-center lg:items-start text-center lg:text-left z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 text-foreground mt-4">
              Find Verified <br />
              <span className="text-brand-500">Property Listings</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Connect with verified brokers and discover premium residential and commercial properties. A seamless, spam-free property search experience.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white rounded-full px-8 h-12 text-base w-full sm:w-auto">
                Search Properties
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base border-border hover:bg-muted text-foreground w-full sm:w-auto">
                For Brokers
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
            <div className="w-full max-w-lg p-2 glass-panel transform perspective-1000 lg:rotate-y-[-2deg] lg:rotate-x-[2deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-500 relative">
              <img src="/hero_property.png" alt="Premium Modern Property" className="rounded-xl w-full h-[400px] object-cover shadow-inner" />
              
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur border border-border px-8 py-4 rounded-2xl shadow-xl flex gap-8">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-foreground">5000+</span>
                  <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Listings</span>
                </div>
                <div className="w-px bg-border"></div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-brand-500">100%</span>
                  <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Spam-Free</span>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

