import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import type { Page } from '../types';
import momImage from '../images/mom.png';

interface HomeProps {
  setCurrentPage: (page: Page) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 md:px-16 gap-12 py-24 pt-32">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-8 order-2 md:order-1"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-xs">Traditional Clay Art</span>
          <h1 className="text-5xl md:text-7xl text-on-surface leading-[1.1]">
            Mrs Poonam Kumar
          </h1>
          <p className="text-lg text-on-surface-variant max-w-md leading-relaxed">
            Explore the ancient rhythmic beauty of Lippan Kaam. Hand-molded with earth and adorned with shimmering mirrors, every piece by Poonam tells a story of heritage and handcrafted devotion.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-1/2 order-1 md:order-2 p-4 bg-white rounded-[2.5rem] shadow-xl relative"
        >
          <img
            alt="Poonam, the artist"
            className="w-full aspect-square object-cover rounded-[2rem]"
            src={momImage}
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-4 bg-white rounded-[2.5rem] shadow-xl relative"
            >
              <img
                alt="Lippan Art Piece"
                className="w-full aspect-square object-cover rounded-[2rem]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeWmkoKQLiLQtNOlc0vv1T3nPh5ZLmbb1pKcfale5TJ_RRpWDIR43bmQz8h2UK6A_DxSVYNBKToioslT8_Nb8nEX1Y5MGLQfDccHfXEuWzrPlw1PiRJcif7nXzDMdZWcZkNUDKl1xmmAxMZjhyOQXaoe4T_Wy12hv1pnxG29lPw8fOsNtnXHin8zcNlazeRM0gJ3blTuZN-VxDlLaEOzbAVJB8QblZyTDLkzvv7hu6l6SKEWQ3GrXjmJFEq1A07FXNsOLt4AfTnxVr"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl text-on-surface">Echoes of the Rann</h2>
            <div className="w-16 h-1 bg-primary-container rounded-full"></div>
            <p className="text-on-surface-variant leading-relaxed">
              Originating from the salt marshes of the Rann of Kutch in Gujarat, Lippan art is a traditional mud-relief craft. Historically used to decorate the interior and exterior walls of 'Bhunga' huts, these intricate patterns of clay and mirrors served both aesthetic and cooling purposes.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Today, Poonam brings this ancient tradition into the modern home. Each piece is a meditative journey, requiring precision in molding the 'kam' (relief work) and placement of the 'Abhla' (mirrors) to catch and dance with the light in your space.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center max-w-4xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl text-on-surface mb-6">Ready to add a piece of tradition to your walls?</h3>
        <p className="text-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
          Each piece is custom-made and uniquely handcrafted, ensuring that your art is the only one of its kind in the world.
        </p>
        <button
          onClick={() => setCurrentPage('shop')}
          className="group relative inline-flex items-center gap-3 bg-primary text-on-primary px-12 py-6 rounded-full font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl hover:shadow-primary/20"
        >
          <span className="relative z-10">Explore the Collection</span>
          <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-primary-container opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </section>
    </div>
  );
}
