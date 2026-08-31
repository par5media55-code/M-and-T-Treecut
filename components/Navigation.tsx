'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Why Us', href: '#why-us' },
  // { name: 'Gallery', href: '#gallery' }, // Hidden for now
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar with phone number */}
      <div className="bg-am-charcoal border-b border-am-green-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center py-2">
          <a href="tel:0790642188" className="text-am-gold font-mono text-sm tracking-widest hover:text-am-gold-light transition-colors">079 064 2188</a>
        </div>
      </div>
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-am-charcoal border-b border-am-green-dark py-4 shadow-xl' : 'bg-transparent py-6 border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-am-gold flex items-center justify-center rounded-sm rotate-45 transition-transform group-hover:rotate-90">
            <div className="-rotate-45 font-bold text-am-charcoal text-xl underline-offset-4 decoration-2">M&T</div>
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase text-am-text">M&T Treecut</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-8 text-xs font-medium uppercase tracking-[0.2em] text-am-wood-light">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-am-gold transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:0790642188" className="px-6 py-2 border border-am-gold text-am-gold text-xs font-bold uppercase tracking-wider hover:bg-am-gold hover:text-am-charcoal transition-colors">
              Free Quote
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-am-charcoal border-t border-am-green-dark overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 space-y-6">
              <div className="flex flex-col gap-4 text-xs font-medium uppercase tracking-[0.2em] text-am-wood-light">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-am-gold transition-colors block py-2 border-b border-am-green-dark/30"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <a href="tel:0790642188" className="mt-4 px-6 py-4 border border-am-gold text-am-gold text-xs font-bold uppercase tracking-wider text-center hover:bg-am-gold hover:text-am-charcoal transition-colors">
                Call: 079 064 2188
              </a>
              <a href="tel:0722321139" className="px-6 py-4 border border-am-gold text-am-gold text-xs font-bold uppercase tracking-wider text-center hover:bg-am-gold hover:text-am-charcoal transition-colors">
                Call: 072 232 1139
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </nav>
  );
}
