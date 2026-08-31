'use client';

import { motion } from 'motion/react';
import { Phone, MessageCircle, FileText } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-am-charcoal border-t border-am-green-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-am-green-base opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none filter grayscale" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 text-am-gold uppercase text-[10px] font-bold tracking-[0.4em] mb-6">
            <span className="w-8 h-[1px] bg-am-gold" />
            Fast Response
            <span className="w-8 h-[1px] bg-am-gold" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-light mb-6 text-white">Need a <span className="italic text-am-gold">Tree Removed?</span></h2>
          <p className="text-sm text-am-wood mb-12 max-w-2xl mx-auto">
            Call us today for a fast, affordable and professional quotation. We&apos;re ready to help.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:0722321139" className="flex items-center justify-center gap-3 px-8 py-4 bg-am-green-dark text-am-text border-l-4 border-am-gold hover:bg-am-charcoal-light transition-colors group">
              <Phone size={18} className="text-am-gold group-hover:text-am-text transition-colors" />
              <span className="text-xs uppercase font-bold tracking-widest">Call Now</span>
            </a>
            <a href="https://wa.me/27722321139" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-am-green-dark text-am-text hover:border-[#25D366] transition-colors group">
              <MessageCircle size={18} className="text-am-wood group-hover:text-[#25D366] transition-colors" />
              <span className="text-xs uppercase font-bold tracking-widest group-hover:text-white transition-colors">WhatsApp</span>
            </a>
            <a href="#contact" className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-am-green-dark text-am-text hover:border-am-gold transition-colors group">
              <FileText size={18} className="text-am-wood group-hover:text-am-gold transition-colors" />
              <span className="text-xs uppercase font-bold tracking-widest group-hover:text-white transition-colors">Request Quote</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
