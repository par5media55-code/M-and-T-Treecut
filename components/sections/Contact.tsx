'use client';

import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-am-charcoal border-t border-am-green-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <div className="flex items-center gap-2 text-am-gold uppercase text-[10px] font-bold tracking-[0.4em] mb-4">
              <span className="w-8 h-[1px] bg-am-gold" />
              Get in Touch
            </div>
            <h3 className="text-4xl md:text-5xl font-serif font-light text-white mb-8">
              Contact Us <span className="italic text-am-gold">Today</span>
            </h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-am-green-dark border border-am-green-base flex items-center justify-center text-am-gold shrink-0 group-hover:bg-am-charcoal transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-1">Phone</h4>
                  <div className="flex flex-col gap-1">
                    <a href="tel:0790642188" className="text-am-wood hover:text-am-gold transition-colors text-sm">079 064 2188</a>
                    <a href="tel:0722321139" className="text-am-wood hover:text-am-gold transition-colors text-sm">072 232 1139</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-am-green-dark border border-am-green-base flex items-center justify-center text-am-gold shrink-0 group-hover:bg-am-charcoal transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-1">Email</h4>
                  <a href="mailto:info@mttreecut.co.za" className="text-am-wood hover:text-am-gold transition-colors text-sm">info@mttreecut.co.za</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-am-green-dark border border-am-green-base flex items-center justify-center text-am-gold shrink-0 group-hover:bg-am-charcoal transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-1">Location</h4>
                  <p className="text-am-wood text-sm">Rustenburg, North West Province</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-am-green-dark border border-am-green-base flex items-center justify-center text-am-gold shrink-0 group-hover:bg-am-charcoal transition-colors">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-1">Operating Hours</h4>
                  <p className="text-am-wood text-sm">Monday &ndash; Saturday</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-am-gold mt-1">Emergency call-outs available.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-am-charcoal-light p-8 md:p-12 border border-am-green-dark relative"
          >
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-am-gold/30 m-4" />
            <h4 className="text-2xl font-serif font-light text-white mb-6">Request a <span className="italic text-am-gold">Free Quote</span></h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-widest text-am-wood-light mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 bg-am-charcoal border border-am-green-dark focus:outline-none focus:border-am-gold transition-colors text-white text-sm" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-widest text-am-wood-light mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 bg-am-charcoal border border-am-green-dark focus:outline-none focus:border-am-gold transition-colors text-white text-sm" placeholder="072 123 4567" />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-[10px] font-bold uppercase tracking-widest text-am-wood-light mb-2">Service Required</label>
                <select id="service" className="w-full px-4 py-3 bg-am-charcoal border border-am-green-dark focus:outline-none focus:border-am-gold transition-colors text-white text-sm appearance-none">
                  <option>Tree Felling & Removal</option>
                  <option>Stump Removal</option>
                  <option>Tree Pruning</option>
                  <option>Site Clearing</option>
                  <option>Emergency Services</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-widest text-am-wood-light mb-2">Message (Optional)</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 bg-am-charcoal border border-am-green-dark focus:outline-none focus:border-am-gold transition-colors text-white text-sm resize-none" placeholder="Tell us more about what you need..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-am-green-dark text-am-text border border-am-gold hover:bg-am-gold hover:text-am-charcoal transition-colors font-bold uppercase tracking-widest text-xs">
                Send Request
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
