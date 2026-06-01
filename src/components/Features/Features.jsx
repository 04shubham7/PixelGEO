import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ShieldCheck, LockKeyhole, SearchCheck, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const featuresData = [
  {
    id: 1,
    title: 'Verified Leads Only',
    description: 'No spam or junk data. Work with genuine buyers and renters actively seeking properties.',
    icon: <ShieldCheck className="w-6 h-6 text-brand-500" />
  },
  {
    id: 2,
    title: 'Protected Lead Flow',
    description: 'In-app messaging and private calling ensure your client interactions are secure and spam-free.',
    icon: <LockKeyhole className="w-6 h-6 text-brand-500" />
  },
  {
    id: 3,
    title: 'Smart Matching Engine',
    description: 'Your listings are matched with the right leads using buyer intent and smart filters.',
    icon: <SearchCheck className="w-6 h-6 text-brand-500" />
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why we stand out in finding your perfect home</h2>
          <p className="text-muted-foreground text-lg">Unparalleled insights and verified properties delivered through our next-gen real estate platform.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {featuresData.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <Card className="glass-panel hover:border-brand-500/30 transition-colors h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="glass-panel overflow-hidden">
            <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border pb-6">
              <div>
                <CardTitle className="text-2xl text-foreground">Market Advantage</CardTitle>
                <CardDescription className="text-muted-foreground mt-2">Comparison against legacy real estate portals.</CardDescription>
              </div>
              <Button variant="outline" className="border-border text-foreground hover:bg-muted gap-2">
                <Download className="w-4 h-4" /> Export Report
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-muted/30">
                    <TableRow className="border-border hover:bg-transparent">
                      <TableHead className="text-muted-foreground font-medium py-4 px-6 w-1/4">Metric</TableHead>
                      <TableHead className="text-muted-foreground font-medium py-4 px-6 w-1/4">Legacy Portals</TableHead>
                      <TableHead className="text-brand-600 dark:text-brand-500 font-bold py-4 px-6 w-1/4 bg-brand-500/5 relative overflow-hidden">
                        Intel Realty
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-500"></div>
                      </TableHead>
                      <TableHead className="text-muted-foreground font-medium py-4 px-6 text-right w-1/4">Improvement</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { metric: 'Verified Listings', current: '30%', intel: '100%', diff: '+70%', diffColor: 'text-emerald-500' },
                      { metric: 'Spam Calls / Week', current: '15+', intel: '0', diff: '100% Drop', diffColor: 'text-emerald-500' },
                      { metric: 'Lead Quality Score', current: '3.2/10', intel: '9.4/10', diff: '+193%', diffColor: 'text-emerald-500' },
                    ].map((row, i) => (
                      <TableRow key={i} className="border-border hover:bg-muted/50 transition-colors">
                        <TableCell className="text-foreground font-medium py-4 px-6">{row.metric}</TableCell>
                        <TableCell className="text-muted-foreground py-4 px-6">{row.current}</TableCell>
                        <TableCell className="text-foreground font-bold py-4 px-6 bg-brand-500/5 border-l border-r border-brand-500/10 shadow-[inset_0_0_20px_rgba(255,122,24,0.02)]">
                          {row.intel}
                        </TableCell>
                        <TableCell className={`${row.diffColor} font-semibold text-right py-4 px-6`}>
                          <span className="bg-emerald-500/10 px-3 py-1 rounded-full">{row.diff}</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
