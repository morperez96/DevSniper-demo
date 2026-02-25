import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, MousePointer2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Scene1Branding() {
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTagline(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(20px)' }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
      
      <motion.div
        className="flex items-center gap-4 z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative">
          <div className="w-20 h-20 rounded-full border-4 border-[#0F172A] flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-2 border-[#1D8A77] flex items-center justify-center">
               <div className="w-1 h-8 bg-[#1D8A77] absolute rotate-45 translate-x-6 translate-y-6 rounded-full" />
               <div className="w-4 h-4 rounded-full border-2 border-[#1D8A77]" />
            </div>
          </div>
        </div>
        <h1 className="text-7xl font-black text-[#0F172A] tracking-tighter">
          DevSniper
        </h1>
      </motion.div>

      <AnimatePresence>
        {showTagline && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-6 flex items-center gap-3"
          >
            <p className="text-2xl text-slate-500 font-medium">
              Bring the Inspector into your website.
            </p>
            <div className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded border border-slate-200 text-xs font-mono text-slate-400 pointer-events-none">
              <Command className="w-3 h-3" />
              <span>Ctrl + K</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
