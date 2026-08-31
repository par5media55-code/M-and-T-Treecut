'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

const images = [
  { src: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80', alt: 'Large tree removal', title: 'Large Tree Removal' },
  { src: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80', alt: 'Professional Equipment', title: 'Professional Equipment' },
  { src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80', alt: 'Site clearing', title: 'Site Clearing' },
  { src: 'https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?auto=format&fit=crop&q=80', alt: 'Stump removal', title: 'Stump Grinding' },
  { src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80', alt: 'Garden cleanup', title: 'Garden Clean-up' },
  { src: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80', alt: 'Professional equipment', title: 'Safety First' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-am-charcoal-light border-t border-am-green-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="flex items-center gap-2 text-am-gold uppercase text-[10px] font-bold tracking-[0.4em] mb-4">
            <span className="w-8 h-[1px] bg-am-gold" />
            Our Work
            <span className="w-8 h-[1px] bg-am-gold" />
          </div>
          <h3 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">Recent <span className="italic text-am-gold">Projects</span></h3>
          <p className="text-sm text-am-wood">
            Take a look at some of our recent tree felling and removal projects across Rustenburg.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
              className="relative group overflow-hidden break-inside-avoid border border-am-green-dark bg-am-charcoal p-2"
            >
              <div className="relative w-full h-auto overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-am-charcoal/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h4 className="text-am-gold uppercase text-xs tracking-widest font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {img.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
