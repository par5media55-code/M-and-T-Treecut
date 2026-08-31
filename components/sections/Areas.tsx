'use client';

import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const areas = [
  'Mahikeng',
  'Rustenburg',
  'Klerksdorp',
  'Potchefstroom',
  'Brits',
  'Mmabatho',
  'Zeerust',
  'Lichtenburg',
  'Schweizer-Reneke',
  'Vryburg',
  'Coligny',
  'Bloemhof',
  'Christiana',
  'Orkney',
  'Hartbeespoort',
  'Delareyville',
  'Ottosdal',
  'Stilfontein',
  'Koster',
  'Swartruggens',
  'Ventersdorp'
];

export default function AreasWeService() {
  return (
    <section id="areas" className="py-24 bg-am-charcoal border-t border-am-green-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="flex items-center gap-2 text-am-gold uppercase text-[10px] font-bold tracking-[0.4em] mb-4">
              <span className="w-8 h-[1px] bg-am-gold" />
              Service Areas
            </div>
            <h3 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              Where We <span className="italic text-am-gold">Work</span>
            </h3>
            <p className="text-sm text-am-wood mb-10 leading-relaxed">
              Based in Rustenburg, we provide professional tree felling services across the greater North West region. We are fully equipped to travel to your location.
            </p>

            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              {areas.map((area, idx) => (
                <motion.div 
                  key={area}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <MapPin className="text-am-gold shrink-0" size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider text-am-wood-light">{area}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-[500px] border border-am-green-dark p-2 bg-am-charcoal-light shadow-2xl">
            <div className="absolute inset-2 bg-am-green-base overflow-hidden border border-am-green-dark">
              <iframe
                title="Google Maps Rustenburg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114440.09873998651!2d27.166669899326442!3d-25.66667086829767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebd113b52b21cf5%3A0x6b74619d80d2fc21!2sRustenburg!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2) invert(0.9) hue-rotate(180deg)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
