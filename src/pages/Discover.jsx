import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square, Search, SlidersHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

const properties = [
  {
    id: 1,
    title: 'Modern Luxury Villa',
    location: 'Golf Course Road, Gurgaon',
    price: '₹12.5 Cr',
    beds: 5,
    baths: 6,
    sqft: '6,500',
    type: 'Sale',
    image: '/luxury_villa.png',
    verified: true,
  },
  {
    id: 2,
    title: 'Skyline View Apartment',
    location: 'Sector 42, DLF Phase 5',
    price: '₹1.5 L/mo',
    beds: 3,
    baths: 3,
    sqft: '2,200',
    type: 'Rent',
    image: '/modern_apartment.png',
    verified: true,
  },
  {
    id: 3,
    title: 'Premium Independent Floor',
    location: 'Vasant Vihar, South Delhi',
    price: '₹8.0 Cr',
    beds: 4,
    baths: 4,
    sqft: '4,000',
    type: 'Sale',
    image: '/hero_property.png',
    verified: true,
  }
];

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 max-w-[1440px]">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              Discover <span className="text-brand-500">Premium Properties</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Explore our curated selection of verified residential properties across Delhi-NCR.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4 w-full md:w-auto"
          >
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search location..." 
                className="pl-10 bg-muted/50 border-border focus-visible:ring-brand-500 text-foreground w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="border-border text-foreground hover:bg-muted shrink-0">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </motion.div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Card className="glass-panel overflow-hidden border-border group h-full flex flex-col hover:border-brand-500/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(255,122,24,0.1)]">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <Badge className="bg-brand-500 hover:bg-brand-600 text-white font-medium shadow-sm">
                      {property.type}
                    </Badge>
                    {property.verified && (
                      <Badge variant="secondary" className="bg-emerald-500/90 text-white hover:bg-emerald-600 shadow-sm border-none backdrop-blur-md">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 right-4 z-10">
                    <div className="bg-background/90 backdrop-blur-md px-4 py-2 rounded-lg font-bold text-lg text-foreground shadow-lg border border-border/50">
                      {property.price}
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-brand-500 transition-colors">
                    {property.title}
                  </CardTitle>
                  <CardDescription className="flex items-center text-muted-foreground mt-1 gap-1">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span className="truncate">{property.location}</span>
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <div className="flex justify-between items-center py-4 border-y border-border/50">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Bed className="w-4 h-4" />
                      <span className="text-sm font-medium">{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Bath className="w-4 h-4" />
                      <span className="text-sm font-medium">{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Square className="w-4 h-4" />
                      <span className="text-sm font-medium">{property.sqft} sqft</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-2">
                  <Button className="w-full bg-brand-500 hover:bg-brand-600 text-white transition-all shadow-md hover:shadow-brand-500/25">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Discover;
