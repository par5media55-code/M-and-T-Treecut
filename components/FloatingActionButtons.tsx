'use client';

import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActionButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a
        href="tel:0722321139"
        className="w-12 h-12 bg-am-green-dark text-am-gold border border-am-green-base flex items-center justify-center hover:bg-am-charcoal transition-colors md:hidden shadow-2xl"
        aria-label="Call Now"
      >
        <Phone size={20} />
      </a>
      <a
        href="https://wa.me/27722321139"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-am-green-dark text-[#25D366] border border-am-green-base flex items-center justify-center hover:bg-am-charcoal transition-colors shadow-2xl"
        aria-label="WhatsApp Us"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
