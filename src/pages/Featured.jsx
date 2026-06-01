import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, ChevronDown, List, Grid, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const Featured = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [viewMode, setViewMode] = useState('list');

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 max-w-[1200px]">
        
        {/* Header Section */}
        <div className="mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-semibold text-foreground mb-2"
          >
            Featured Properties
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-base"
          >
            Discover our handpicked selection of premium properties
          </motion.p>
        </div>
        
        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative mb-8"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder="Search featured properties by title, description, city, or location..." 
            className="pl-12 py-6 text-base bg-background border-border focus-visible:ring-brand-500 text-foreground w-full rounded-xl shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </motion.div>

        {/* Filters Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16"
        >
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-muted-foreground">Property category</span>
            <div className="flex items-center gap-2 bg-muted/30 p-1 rounded-lg border border-border">
              {['All', 'Residential', 'Commercial'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 text-sm rounded-md transition-colors flex items-center gap-2 ${
                    category === cat 
                      ? 'bg-background text-brand-500 shadow-sm border border-border font-medium' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {cat !== 'All' && <Building className="w-4 h-4" />}
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-end gap-4 w-full md:w-auto">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-muted-foreground">Additional Filters</span>
              <Button variant="outline" className="border-border text-foreground hover:bg-muted shrink-0 h-10 px-4 rounded-lg bg-background shadow-sm">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-muted-foreground">Sort by</span>
              <Button variant="outline" className="border-border text-foreground hover:bg-muted shrink-0 h-10 px-4 rounded-lg bg-background shadow-sm justify-between w-40">
                Newest first
                <ChevronDown className="w-4 h-4 ml-2 text-muted-foreground" />
              </Button>
            </div>

            <div className="flex flex-col gap-2 md:ml-4">
              <span className="text-sm font-medium text-muted-foreground hidden md:block opacity-0">View Mode</span>
              <div className="flex items-center bg-muted/30 p-1 rounded-lg border border-border h-10">
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-background text-brand-500 shadow-sm border border-border' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-background text-brand-500 shadow-sm border border-border' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Empty State */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center py-20 text-center"
        >
          <div className="w-16 h-16 bg-muted/50 rounded-2xl flex items-center justify-center mb-6">
            <Building className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-medium text-foreground mb-2">No featured properties found</h3>
          <p className="text-muted-foreground mb-8 max-w-md">
            Try adjusting your search criteria or filters to find more properties.
          </p>
          <Button 
            className="bg-brand-500 hover:bg-brand-600 text-white rounded-lg px-6"
            onClick={() => {
              setSearchTerm('');
              setCategory('All');
            }}
          >
            Clear filters
          </Button>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Featured;
