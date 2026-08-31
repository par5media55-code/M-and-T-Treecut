'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center pt-20 overflow-hidden">
      {/* Background Image Container - Off-centered style like theme */}
      <div className="absolute inset-0 z-0 bg-am-green-base md:left-1/3">
        <div className="w-full h-full opacity-50 relative">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
            alt="Professional tree felling"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          {/* Dark Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-am-charcoal to-transparent" />
        </div>
      </div>

      {/* Background fill for left side on desktop */}
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-am-charcoal via-am-charcoal to-transparent z-0 hidden md:block" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-xl space-y-6 md:p-8"
        >
          <div className="flex items-center gap-2 text-am-gold uppercase text-[10px] font-bold tracking-[0.4em]">
            <span className="w-8 h-[1px] bg-am-gold" />
            Rustenburg&apos;s Premier Arborists
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light font-serif text-white leading-[1.1]">
            Professional Tree Felling & <br />
            <span className="italic text-am-gold">Tree Care in North West Province</span>
          </h1>
          
          <p className="text-am-wood text-sm max-w-md leading-relaxed">
            Helping homeowners with reliable and affordable tree felling solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="tel:0790642188"
              className="px-8 py-4 bg-am-green-dark text-am-text rounded-none flex items-center justify-center gap-3 border-l-4 border-am-gold hover:bg-am-charcoal-light transition-colors"
            >
              <span className="text-xs uppercase font-bold tracking-widest">Call Now</span>
            </a>
            <a
              href="tel:0722321139"
              className="px-8 py-4 bg-am-green-dark text-am-text rounded-none flex items-center justify-center gap-3 border-l-4 border-am-gold hover:bg-am-charcoal-light transition-colors"
            >
              <span className="text-xs uppercase font-bold tracking-widest">Call: 072 232 1139</span>
            </a>
            <a
              href="https://wa.me/27722321139"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border border-am-green-dark text-am-text flex items-center justify-center hover:border-am-gold transition-colors"
            >
              <span className="text-xs uppercase font-bold tracking-widest">WhatsApp Us</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Stat Box */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="hidden md:flex absolute bottom-12 right-12 bg-am-green-base p-8 border border-am-green-dark shadow-2xl gap-12 z-20"
      >
        <div>
          <div className="text-2xl font-serif text-am-gold">15+</div>
          <div className="text-[10px] uppercase tracking-widest text-am-wood">Years Experience</div>
        </div>
        <div className="w-[1px] bg-am-green-dark" />
        <div>
          <div className="text-2xl font-serif text-am-gold">24/7</div>
          <div className="text-[10px] uppercase tracking-widest text-am-wood">Emergency Call-out</div>
        </div>
      </motion.div>
    </section>
  );
}
