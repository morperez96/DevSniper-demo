import { motion } from 'framer-motion';
import { Clock, MousePointer2, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Scene1Pain() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: '-100%' }}
      transition={{ duration: 0.8 }}
    >
      {!showLogo ? (
        <motion.div 
          className="flex flex-col items-center gap-8"
          key="pain-content"
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <Clock className="w-24 h-24 text-slate-300" strokeWidth={1.5} />
          </motion.div>
          
          <motion.h1 
            className="text-5xl font-black text-slate-900 text-center max-w-2xl leading-tight tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Stop wasting hours hunting for the right CSS class.
          </motion.h1>

          <motion.div
            className="absolute"
            animate={{ 
              x: [0, 100, -100, 50, -50, 0], 
              y: [0, -50, 50, -100, 100, 0] 
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <MousePointer2 className="w-10 h-10 text-slate-400 fill-slate-100 drop-shadow-sm" />
          </motion.div>
        </motion.div>
      ) : (
        <motion.div 
          className="flex flex-col items-center gap-6"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 20 }}
          key="logo-content"
        >
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-[#1D8A77] flex items-center justify-center shadow-[0_0_40px_rgba(29,138,119,0.3)]">
              <Target className="w-12 h-12 text-white" strokeWidth={3} />
            </div>
            <h2 className="text-7xl font-black text-slate-900 tracking-tighter">DevSniper</h2>
          </div>
          <div className="text-center space-y-2">
            <p className="text-2xl text-slate-500 font-medium">Bring the Inspector into your website.</p>
            <p className="text-xl text-[#1D8A77] font-bold">Find & Edit in milliseconds.</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
