import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Analytics = () => {
  return (
    <section id="analytics" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Real Estate Market Analytics</h2>
          <p className="text-muted-foreground text-lg">Gain powerful insights into property trends, demand heatmaps, and local price variations across Delhi-NCR.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass-panel hover:border-brand-500/30 transition-colors h-full">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Price Trends (Delhi-NCR)</CardTitle>
                <CardDescription className="text-muted-foreground">Average price per sqft over the last 12 months.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 flex items-end gap-2 border-b border-border pb-2 mt-4">
                  {[30, 45, 40, 60, 55, 75, 80, 70, 85, 95, 90, 100].map((height, i) => (
                    <div key={i} className="flex-1 group relative cursor-pointer h-full flex items-end">
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.05, type: "spring" }}
                        className="w-full bg-gradient-to-t from-brand-500/40 to-brand-500 rounded-t-md transition-all group-hover:brightness-110 shadow-sm" 
                      />
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs py-1 px-2 rounded font-medium transition-opacity pointer-events-none whitespace-nowrap shadow-lg z-20">
                        ₹{Math.floor(height * 125)}/sqft
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  <span>Jan</span>
                  <span>Dec</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="glass-panel hover:border-brand-500/30 transition-colors h-full">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Demand Heatmap</CardTitle>
                <CardDescription className="text-muted-foreground">High-demand localities based on buyer search intent.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-6 mt-2">
                  <div>
                    <div className="flex justify-between text-sm mb-2 text-[#4f5e71] dark:text-muted-foreground font-medium">
                      <span>Gurgaon (Golf Course Road)</span>
                      <span className="text-foreground">92%</span>
                    </div>
                    <div className="h-3 w-full bg-[#f0f1f3] dark:bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '92%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full bg-gradient-to-r from-[#f8f9fb] to-[#fff3e8] dark:from-muted/50 dark:to-brand-900/30 border-r-2 border-brand-500 rounded-l-full relative" 
                      >
                        <div className="absolute right-0 top-0 bottom-0 w-4 bg-brand-500/20 blur-[2px]" />
                      </motion.div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2 text-[#4f5e71] dark:text-muted-foreground font-medium">
                      <span>Noida (Sector 150)</span>
                      <span className="text-foreground">85%</span>
                    </div>
                    <div className="h-3 w-full bg-[#f0f1f3] dark:bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="h-full bg-gradient-to-r from-[#f8f9fb] to-[#fff3e8] dark:from-muted/50 dark:to-brand-900/30 border-r-2 border-brand-500 rounded-l-full relative" 
                      >
                        <div className="absolute right-0 top-0 bottom-0 w-4 bg-brand-500/20 blur-[2px]" />
                      </motion.div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2 text-[#4f5e71] dark:text-muted-foreground font-medium">
                      <span>Delhi (South Ext.)</span>
                      <span className="text-foreground">78%</span>
                    </div>
                    <div className="h-3 w-full bg-[#f0f1f3] dark:bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '78%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-[#f8f9fb] to-[#fff3e8] dark:from-muted/50 dark:to-brand-900/30 border-r-2 border-brand-500 rounded-l-full relative" 
                      >
                        <div className="absolute right-0 top-0 bottom-0 w-4 bg-brand-500/20 blur-[2px]" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
