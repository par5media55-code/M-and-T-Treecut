'use client';

import { motion } from 'motion/react';
import { ShieldCheck, Clock, Wallet, Hammer, UserCheck, HardHat, Car, FileText } from 'lucide-react';

const reasons = [
  { title: 'Years of Experience', icon: UserCheck, desc: 'Decades of combined expertise in professional tree felling.' },
  { title: 'Affordable Pricing', icon: Wallet, desc: 'Competitive rates without compromising on quality or safety.' },
  { title: 'Fast Response', icon: Clock, desc: 'Quick turnaround times for quotes and project execution.' },
  { title: 'Fully Equipped', icon: Hammer, desc: 'State-of-the-art chainsaws, rigging, and safety gear.' },
  { title: 'Safe Working Methods', icon: ShieldCheck, desc: 'Strict adherence to industry safety standards and protocols.' },
  { title: 'Residential & Commercial', icon: HardHat, desc: 'Equipped to handle projects of any scale or complexity.' },
  { title: 'Emergency Services', icon: Car, desc: '24/7 availability for urgent storm damage or hazardous trees.' },
  { title: 'Free Quotations', icon: FileText, desc: 'Transparent, no-obligation quotes before any work begins.' }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-am-charcoal border-t border-am-green-dark relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-am-green-base/50 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          
          <div className="lg:col-span-1 space-y-8 sticky top-32">
            <div className="flex items-center gap-2 text-am-gold uppercase text-[10px] font-bold tracking-[0.4em]">
              <span className="w-8 h-[1px] bg-am-gold" />
              Why Choose Us
            </div>
            <h3 className="text-4xl md:text-5xl font-serif font-light leading-[1.1] text-white">
              The Trusted <br />
              <span className="italic text-am-gold">Choice</span> for <br />
              Tree Care.
            </h3>
            <p className="text-am-wood text-sm leading-relaxed">
              We combine professional expertise with state-of-the-art equipment to deliver safe, efficient, and reliable tree services. When you choose M&T Treecut, you&apos;re choosing peace of mind.
            </p>
            <a href="tel:0722321139" className="inline-flex items-center justify-center px-8 py-4 border border-am-gold text-am-gold text-xs font-bold uppercase tracking-wider hover:bg-am-gold hover:text-am-charcoal transition-colors">
              Request a Free Quote
            </a>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-px bg-am-green-dark border border-am-green-dark">
            {reasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <motion.div 
                  key={reason.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  className="p-8 bg-am-charcoal hover:bg-am-charcoal-light transition-colors group flex flex-col items-start gap-4"
                >
                  <div className="text-am-gold">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-2 text-white group-hover:text-am-gold transition-colors">{reason.title}</h4>
                    <p className="text-[11px] text-am-wood leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
