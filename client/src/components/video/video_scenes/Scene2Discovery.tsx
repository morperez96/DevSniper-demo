import { motion, AnimatePresence } from 'framer-motion';
import { Target, Copy, Search, MousePointer2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Scene2Discovery() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 bg-[#F8FAFC] flex flex-col items-center justify-center overflow-hidden"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Mock Website Background */}
      <div className="w-full max-w-5xl bg-white h-[70vh] rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative">
        <div className="h-12 bg-slate-50 border-b border-slate-200 flex items-center px-6 gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-slate-200" />
            <div className="w-3 h-3 rounded-full bg-slate-200" />
            <div className="w-3 h-3 rounded-full bg-slate-200" />
          </div>
          <div className="mx-auto w-1/3 h-6 bg-slate-100 rounded-md" />
        </div>

        <div className="p-20 flex flex-col items-center text-center gap-8 h-full">
          <motion.div 
            className={`relative p-4 rounded-lg transition-all duration-300 ${showTooltip ? 'ring-2 ring-[#1D8A77] bg-[#1D8A77]/5' : ''}`}
          >
            <h1 className="text-7xl font-black text-slate-900 leading-tight">
              Welcome to our awesome website
            </h1>
          </motion.div>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            Experience the future of web design with our revolutionary tools and features designed for modern teams.
          </p>
        </div>

        {/* Cursor & Tooltip */}
        <motion.div 
          className="absolute z-50 pointer-events-none"
          initial={{ x: '80vw', y: '80vh' }}
          animate={{ x: '50vw', y: '35vh' }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="relative">
            <Target className="w-12 h-12 text-[#1D8A77] drop-shadow-md" strokeWidth={3} />
            
            <AnimatePresence>
              {showTooltip && (
                <motion.div 
                  className="absolute top-12 left-6 bg-[#1E293B] rounded-xl shadow-2xl border border-slate-700 w-80 overflow-hidden text-white p-5"
                  initial={{ scale: 0.8, opacity: 0, y: 10 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ type: 'spring', damping: 20 }}
                >
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-700">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">Inspector</span>
                    <Search className="w-3 h-3 text-[#1D8A77]" />
                  </div>
                  <div className="space-y-3 font-mono text-[11px]">
                    <div className="flex justify-between items-center group">
                      <span className="text-slate-500">TAG</span>
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400">h1</span>
                        <Copy className="w-3 h-3 text-slate-600" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center group">
                      <span className="text-slate-500">CLASSES</span>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-400">.hero-title</span>
                        <Copy className="w-3 h-3 text-slate-600" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center group">
                      <span className="text-slate-500">DOM PATH</span>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-400">div &gt; h1</span>
                        <Copy className="w-3 h-3 text-slate-600" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-12 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <h2 className="text-4xl font-black text-slate-900 tracking-tight">Hover. Inspect. Copy. Done.</h2>
      </motion.div>
    </motion.div>
  );
}
