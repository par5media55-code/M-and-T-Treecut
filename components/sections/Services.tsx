'use client';

import { motion } from 'motion/react';
import { 
  TreePine, 
  Scissors, 
  Axe, 
  Wind, 
  Sprout, 
  AlertTriangle,
  Leaf,
  Trash2
} from 'lucide-react';

const services = [
  {
    title: 'Tree Felling & Removal',
    description: 'Safe and efficient removal of trees of any size, protecting your property.',
    icon: TreePine,
  },
  {
    title: 'Stump Removal',
    description: 'Complete stump grinding and extraction to leave your ground level and clean.',
    icon: Trash2,
  },
  {
    title: 'Tree Trimming & Pruning',
    description: 'Expert branch trimming to promote tree health and improve aesthetics.',
    icon: Scissors,
  },
  {
    title: 'Plot Clearing',
    description: 'Thorough clearing of vegetation and trees for construction or landscaping.',
    icon: Axe,
  },
  {
    title: 'Lawn Maintenance',
    description: 'Comprehensive clearing of garden waste, branches, and overgrowth.',
    icon: Sprout,
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-am-charcoal-light flex flex-col border-t border-am-green-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-am-gold uppercase text-[10px] font-bold tracking-[0.4em] mb-4">
            <span className="w-8 h-[1px] bg-am-gold" />
            Our Expertise
            <span className="w-8 h-[1px] bg-am-gold" />
          </div>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Comprehensive Tree Services</h3>
          <p className="text-sm text-am-wood max-w-2xl mx-auto">
            We offer a full range of professional tree felling and maintenance services for residential and commercial properties in Rustenburg.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 border-t border-l border-am-green-dark">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="group p-8 border-r border-b border-am-green-dark hover:bg-am-green-base transition-colors duration-300"
              >
                <div className="text-am-gold mb-4 group-hover:-translate-y-1 transition-transform">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-white">{service.title}</h4>
                <p className="text-[11px] text-am-wood leading-relaxed line-clamp-3">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Bottom Meta Info */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-4 bg-am-charcoal border-t border-am-green-dark gap-4">
        <div className="flex flex-wrap justify-center gap-4 text-[10px] uppercase tracking-widest text-[#5A605A]">
          <span>Mahikeng</span>
          <span>Rustenburg</span>
          <span>Klerksdorp</span>
          <span>Potchefstroom</span>
          <span>Brits</span>
          <span>North West</span>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-am-gold" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-am-wood-light">Residential</span>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <div className="w-2 h-2 rounded-full bg-am-green-dark" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-am-wood-light">Commercial</span>
          </div>
        </div>
      </div>
    </section>
  );
}
