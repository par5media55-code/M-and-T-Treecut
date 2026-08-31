'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Ziaan Martins',
    location: 'Rustenburg',
    text: 'M&T Tree felling is the best tree felling company in Rustenburg hands down!',
  },
  {
    name: 'Merinda Starbuck',
    location: 'North West',
    text: 'The team was very professional and took down the tree perfectly in our backyard.',
  },
  {
    name: 'Local Homeowner',
    location: 'North West',
    text: 'Fast, affordable and tidy work — highly recommend M&T Treecut.',
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-am-charcoal-light border-t border-am-green-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-am-gold)_0%,_transparent_100%)] blur-3xl mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="flex items-center gap-2 text-am-gold uppercase text-[10px] font-bold tracking-[0.4em] mb-4">
            <span className="w-8 h-[1px] bg-am-gold" />
            Testimonials
            <span className="w-8 h-[1px] bg-am-gold" />
          </div>
          <h3 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
            What Our <span className="italic text-am-gold">Clients Say</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-am-charcoal border border-am-green-dark p-8 relative flex flex-col group hover:border-am-gold/50 transition-colors"
            >
              <Quote size={32} className="text-am-gold/20 absolute top-8 right-8 group-hover:text-am-gold/40 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-am-gold text-am-gold" />
                ))}
              </div>
              <p className="text-am-wood text-sm italic mb-8 leading-relaxed flex-grow">
                &quot;{review.text}&quot;
              </p>
              <div className="pt-6 border-t border-am-green-dark flex items-center justify-between">
                <h4 className="font-bold text-xs uppercase tracking-widest text-white">{review.name}</h4>
                <p className="text-[10px] uppercase tracking-widest text-am-gold">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
