import { Share2, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-outline-variant pb-8 mb-8">
          <div className="space-y-2 text-center md:text-left w-full md:w-auto">
            <h2 className="font-serif text-2xl text-on-surface">Poonam Lippan Art</h2>
            <p className="text-xs text-on-surface-variant max-w-xs mx-auto md:mx-0">
              © 2024 Poonam Lippan Art. Handcrafted with Tradition. Preserving the ancient mud-mirror work of Kutch.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">About Us</a>
            <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Shipping Policy</a>
            <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Contact</a>
            <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Terms</a>
          </div>

          <div className="flex gap-4 w-full md:w-auto justify-center">
            <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-all">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-all">
              <Globe className="w-4 h-4" />
            </button>
          </div>
        </div>
        <p className="text-center text-[10px] text-on-surface-variant/60">
          Handcrafted Contemporary Craftsmanship • Heritage & Tradition
        </p>
      </div>
    </footer>
  );
}
