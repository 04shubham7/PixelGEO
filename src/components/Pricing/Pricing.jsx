import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const pricingPlans = [
  {
    name: 'Free (Buyers)',
    price: '$0',
    description: 'Perfect for property seekers looking for a home.',
    features: ['Access to 5000+ verified listings', 'Spam-free call masking', 'In-app chat with brokers', 'Basic search filters'],
    buttonText: 'Start Searching',
    highlighted: false
  },
  {
    name: 'Pro Broker',
    price: '$49/mo',
    description: 'For active brokers wanting high-quality leads.',
    features: ['Unlimited listings', 'Priority search placement', 'Verified Broker badge', 'Advanced lead analytics', 'Dedicated account manager'],
    buttonText: 'Upgrade to Pro',
    highlighted: true
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative z-10 bg-muted/30">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg">100% free for home buyers. Premium tools for brokers to close deals faster.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="h-full"
            >
              <Card className={`h-full flex flex-col glass-panel ${plan.highlighted ? 'border-brand-500 shadow-[0_0_30px_rgba(255,122,24,0.15)]' : 'border-border'}`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                  <div className="mt-4 flex items-baseline text-4xl font-extrabold text-foreground">
                    {plan.price}
                  </div>
                  <CardDescription className="text-muted-foreground mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className={`w-full ${plan.highlighted ? 'bg-brand-500 hover:bg-brand-600 text-white' : 'bg-muted hover:bg-muted/80 text-foreground'}`}>
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
