import { motion } from 'framer-motion';
import { Target, Download, Star } from 'lucide-react';

export function Scene5ClosingCTA() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="z-10 flex flex-col items-center text-center" style={{ gap: 'clamp(2rem, 8vh, 5rem)' }}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 15 }}
          className="relative"
        >
          <div className="w-28 h-28 rounded-[2rem] bg-[#1D8A77] flex items-center justify-center shadow-[0_20px_50px_-10px_rgba(29,138,119,0.5)]">
            <Target className="w-14 h-14 text-white" strokeWidth={3} />
          </div>
          <motion.div 
            className="absolute inset-0 rounded-[2rem] bg-[#1D8A77] z-[-1]"
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <div style={{ gap: 'clamp(1rem, 3vh, 2rem)' }} className="flex flex-col">
          <motion.h1 
            className="text-heading-xl font-black text-slate-900 tracking-tighter leading-none"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Stop Searching.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D8A77] to-emerald-400">
              Start Snipping.
            </span>
          </motion.h1>
        </div>
      </div>

      <motion.div 
        className="absolute w-full flex flex-col items-center"
        style={{ bottom: '8vh', gap: 'clamp(1rem, 3vh, 2rem)' }}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex gap-[2vw]">
          <div className="rounded-2xl font-black border-4 border-slate-200 text-slate-300 pointer-events-none px-[3vw] py-[1.5vh]" style={{ fontSize: 'clamp(0.875rem, 2vw, 1.25rem)' }}>
            Get DevSniper Free
          </div>
          <div className="rounded-2xl font-black bg-[#1D8A77] text-white shadow-[0_20px_40px_-10px_rgba(29,138,119,0.4)] pointer-events-none px-[3vw] py-[1.5vh]" style={{ fontSize: 'clamp(0.875rem, 2vw, 1.25rem)' }}>
            Upgrade to PRO
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
