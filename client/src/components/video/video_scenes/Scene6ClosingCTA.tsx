import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

export function Scene6ClosingCTA() {
  return (
    <motion.div
      className="absolute inset-0 bg-white flex flex-col items-center justify-center overflow-hidden p-[3vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#1D8A77_1px,transparent_1px)] [background-size:2.5vw:2.5vw] opacity-[0.03]" />
      
      <div className="z-10 flex flex-col items-center text-center space-y-[3vh] max-w-[90vw]">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 15 }}
          className="relative"
        >
          <div className="w-[clamp(80px,12vw,120px)] h-[clamp(80px,12vw,120px)] rounded-[1.75rem] bg-[#1D8A77] flex items-center justify-center shadow-[0_15px_40px_-10px_rgba(29,138,119,0.5)]">
            <Target className="w-[clamp(40px,6vw,60px)] h-[clamp(40px,6vw,60px)] text-white" strokeWidth={3} />
          </div>
          <motion.div 
            className="absolute inset-0 rounded-[1.75rem] bg-[#1D8A77] z-[-1]"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <motion.h1 
          className="text-heading-xl font-black text-slate-900 tracking-tighter leading-none"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Stop Searching.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D8A77] to-emerald-400">
            Start Snipping.
          </span>
        </motion.h1>

        <motion.div 
          className="flex gap-[2vw] justify-center flex-wrap"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="px-[clamp(20px,3vw,40px)] py-[clamp(12px,1.5vh,20px)] rounded-2xl font-black text-[clamp(0.9rem,1.5vw,1.2rem)] border-2 border-slate-200 text-slate-300 cursor-default pointer-events-none whitespace-nowrap">
            Get DevSniper Free
          </div>
          <div className="px-[clamp(20px,3vw,40px)] py-[clamp(12px,1.5vh,20px)] rounded-2xl font-black text-[clamp(0.9rem,1.5vw,1.2rem)] bg-[#1D8A77] text-white shadow-[0_20px_40px_-10px_rgba(29,138,119,0.5)] cursor-default pointer-events-none whitespace-nowrap">
            Upgrade to PRO
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
