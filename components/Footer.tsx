import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-am-charcoal pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-am-gold flex items-center justify-center rounded-sm rotate-45 transition-transform group-hover:rotate-90">
                <div className="-rotate-45 font-bold text-am-charcoal text-sm underline-offset-2 decoration-2">M&T</div>
              </div>
              <span className="text-lg font-bold tracking-tighter uppercase text-white">M&T Treecut</span>
            </Link>
            <p className="text-xs leading-relaxed text-am-wood">
              Reliable, affordable tree felling, stump removal, trimming and garden services across North West Province.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-am-green-dark flex items-center justify-center text-am-wood hover:border-am-gold hover:text-am-gold transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-10 h-10 border border-am-green-dark flex items-center justify-center text-am-wood hover:border-am-gold hover:text-am-gold transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif font-light text-lg mb-6"><span className="italic text-am-gold">Quick</span> Links</h3>
            <ul className="space-y-3 text-xs uppercase tracking-widest font-bold text-am-wood">
              <li><Link href="#home" className="hover:text-am-gold transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-am-gold transition-colors">Our Services</Link></li>
              <li><Link href="#why-us" className="hover:text-am-gold transition-colors">Why Choose Us</Link></li>
              <li><Link href="/blog" className="hover:text-am-gold transition-colors">Blog</Link></li>
              {/* <li><Link href="#gallery" className="hover:text-am-gold transition-colors">Project Gallery</Link></li> - Hidden for now */}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-serif font-light text-lg mb-6"><span className="italic text-am-gold">Service</span> Areas</h3>
            <ul className="space-y-3 text-xs uppercase tracking-widest font-bold text-am-wood">
              <li>Mahikeng</li>
              <li>Rustenburg</li>
              <li>Klerksdorp</li>
              <li>Potchefstroom</li>
              <li>Brits</li>
              <li>Mmabatho</li>
              <li>Zeerust</li>
              <li>Lichtenburg</li>
              <li>Schweizer-Reneke</li>
              <li>Vryburg</li>
              <li>Coligny</li>
              <li>Bloemhof</li>
              <li>Christiana</li>
              <li>Orkney</li>
              <li>Hartbeespoort</li>
              <li>Delareyville</li>
              <li>Ottosdal</li>
              <li>Stilfontein</li>
              <li>Koster</li>
              <li>Swartruggens</li>
              <li>Ventersdorp</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-serif font-light text-lg mb-6"><span className="italic text-am-gold">Contact</span> Us</h3>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-am-wood">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-am-gold shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:0790642188" className="hover:text-am-gold transition-colors">079 064 2188</a>
                  <a href="tel:0722321139" className="hover:text-am-gold transition-colors">072 232 1139</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-am-gold shrink-0 mt-0.5" />
                <a href="mailto:info@mttreecut.co.za" className="hover:text-am-gold transition-colors lowercase tracking-normal font-medium">info@mttreecut.co.za</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-am-gold shrink-0 mt-0.5" />
                <span>Rustenburg,<br />South Africa</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-am-green-dark text-center text-[10px] uppercase tracking-widest text-am-wood">
          <p>&copy; {new Date().getFullYear()} M&T Treecut. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
