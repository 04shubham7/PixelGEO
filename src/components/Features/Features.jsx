import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Activity, Globe, Zap, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const featuresData = [
  {
    id: 1,
    title: 'Real-time Metrics',
    description: 'Monitor your application performance with sub-millisecond latency.',
    icon: <Activity className="w-6 h-6 text-blue-400" />
  },
  {
    id: 2,
    title: 'Advanced Routing',
    description: 'Predictive prefetching ensures users never wait for a page load.',
    icon: <Zap className="w-6 h-6 text-blue-400" />
  },
  {
    id: 3,
    title: 'Global Edge Network',
    description: 'Deploy instantly to 35+ regions worldwide with zero configuration.',
    icon: <Globe className="w-6 h-6 text-blue-400" />
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Analytical Data Grids</h2>
          <p className="text-slate-400 text-lg">Unparalleled insights delivered through a responsive, modular architecture utilizing Shadcn UI.</p>
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
              <Card className="bg-slate-900/40 backdrop-blur-xl border-white/10 hover:border-blue-500/30 transition-colors h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400 text-base">{feature.description}</CardDescription>
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
          <Card className="bg-slate-900/40 backdrop-blur-xl border-white/10 overflow-hidden">
            <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <CardTitle className="text-2xl text-white">Performance Benchmark</CardTitle>
                <CardDescription className="text-slate-400 mt-2">Comparison against legacy systems.</CardDescription>
              </div>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 gap-2">
                <Download className="w-4 h-4" /> Export Data
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-slate-900/50">
                    <TableRow className="border-white/10 hover:bg-transparent">
                      <TableHead className="text-slate-300 font-medium py-4 px-6">Metric</TableHead>
                      <TableHead className="text-slate-300 font-medium py-4 px-6">Current System</TableHead>
                      <TableHead className="text-slate-300 font-medium py-4 px-6">Nexus Optimization</TableHead>
                      <TableHead className="text-slate-300 font-medium py-4 px-6 text-right">Improvement</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { metric: 'Time to Interactive', current: '3.2s', nexus: '0.8s', diff: '+75%' },
                      { metric: 'First Contentful Paint', current: '1.8s', nexus: '0.4s', diff: '+78%' },
                      { metric: 'Lighthouse Score', current: '72/100', nexus: '100/100', diff: '+38%' },
                    ].map((row, i) => (
                      <TableRow key={i} className="border-white/10 hover:bg-white/5 transition-colors">
                        <TableCell className="text-slate-400 font-medium py-4 px-6">{row.metric}</TableCell>
                        <TableCell className="text-slate-500 py-4 px-6">{row.current}</TableCell>
                        <TableCell className="text-white font-semibold py-4 px-6">{row.nexus}</TableCell>
                        <TableCell className="text-emerald-400 font-medium text-right py-4 px-6">{row.diff}</TableCell>
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
