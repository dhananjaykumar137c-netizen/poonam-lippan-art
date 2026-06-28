import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { motion } from 'motion/react';
import type { Page } from '../types';

interface AuthProps {
  onLogin: () => void;
  onExplore: () => void;
  setCurrentPage: (page: Page) => void;
}

export default function Auth({ onLogin, onExplore, setCurrentPage }: AuthProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center px-6 md:px-16 py-24 relative overflow-hidden bg-background">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border border-primary/20"></div>
        <div className="absolute top-1/2 -right-48 w-[32rem] h-[32rem] rounded-full border border-primary/10"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 rotate-45 border border-primary/30"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md z-10"
      >
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl flex flex-col gap-8 transition-all duration-500 border border-outline-variant/20">
          {/* Brand Anchor */}
          <div className="flex flex-col items-center text-center gap-2 mb-2">
            <h1 className="text-3xl text-primary font-serif font-bold tracking-tight">Lippan Art</h1>
            <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">Heritage & Craft</p>
          </div>

          {/* Form Toggle */}
          <div className="flex p-1 bg-surface-container rounded-xl">
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${isLogin ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant'}`}
            >
              Login
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${!isLogin ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant'}`}
            >
              Register
            </button>
          </div>

          {/* Auth Form */}
          <form className="flex flex-col gap-8" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-on-surface-variant px-1" htmlFor="email">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors w-5 h-5" />
                  <input 
                    className="w-full pl-11 pr-4 py-4 bg-surface-container-low border-none rounded-xl focus:ring-1 focus:ring-primary-container text-base placeholder:text-on-surface-variant/40 transition-all shadow-inner" 
                    id="email" 
                    placeholder="artisan@heritage.com" 
                    type="email" 
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-on-surface-variant px-1" htmlFor="password">Password</label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors w-5 h-5" />
                  <input 
                    className="w-full pl-11 pr-12 py-4 bg-surface-container-low border-none rounded-xl focus:ring-1 focus:ring-primary-container text-base placeholder:text-on-surface-variant/40 transition-all shadow-inner" 
                    id="password" 
                    placeholder="••••••••" 
                    type={showPassword ? 'text' : 'password'} 
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant cursor-pointer hover:text-primary transition-colors focus:outline-none"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-end -mt-4">
              <a className="text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Forgot password?</a>
            </div>
            <button 
              className="w-full py-5 bg-primary-container text-on-primary rounded-xl font-bold shadow-lg hover:shadow-primary-container/20 hover:scale-[1.02] active:scale-95 transition-all" 
              type="submit"
            >
              Continue
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 py-2">
            <div className="h-px flex-1 bg-outline-variant"></div>
            <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">or</span>
            <div className="h-px flex-1 bg-outline-variant"></div>
          </div>

          {/* Social Auth */}
          <button 
            onClick={onLogin}
            className="w-full py-4 px-4 bg-white border border-outline-variant/40 rounded-xl flex items-center justify-center gap-3 text-sm font-medium text-on-surface hover:bg-surface-container transition-all"
          >
            <img 
              alt="Google" 
              className="w-5 h-5" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXJEXW3ccbSCEaR9nPmy59jgTaqCwP6TyCY5_aTOEQBgkRrhtipJslS3FAJ-nSincMYpBOpEaY5XLF_ttGFiRitqdIU5GbfuvSnbrR-sBXyjzskZ4K4dhKvrBNHjf9v8C47htvMHuDTF5UYqB5Q-h8YBuVertUr21UqxBJ1VOMGvaxWotwuO0FqeOcJDxhJLUKJDXdB1BYbUm_-OzgcMAlzrnqbgqJFRq4tWeNsSeId3nXvs2shj4efauXRbrMWP-sSZANLMWjgmqj" 
            />
            Continue with Google
          </button>

          <div className="mt-4 text-center">
            <p className="text-sm text-on-surface-variant">
              New to the craft? <button onClick={() => setCurrentPage('shop')} className="text-primary font-bold hover:underline">Explore Collections</button>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Decorative Corner Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="fixed bottom-0 right-0 w-48 md:w-80 pointer-events-none"
      >
        <img 
          className="w-full h-auto grayscale filter invert opacity-50" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhwWoaEwCbZccNOD129I40B6Ba3RyAp1T-3_MRZwvrWtO_r6npJWlqRt_Zl-WpzFCwNwyA8c76JzcA6byCIEHD4DeEFjUXW2gbAitWznomfm8cIJbdeMQDpOi7rQra0ptTMR61BpMmkSxG3DhTASWPjZkCKwknlbZD0AIYN47alqSWZ4ky4q6IhEe7mPK_pFX7aoQAs-bKHLYvizvtUzrxsVi7dlks6O3BDMuTle8iqAbGvE4dFvUbn0CUmci0lvdiELIzztihvtul" 
        />
      </motion.div>
    </main>
  );
}
