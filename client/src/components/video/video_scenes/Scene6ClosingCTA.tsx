import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

export function Scene6ClosingCTA() {
  return (
    <motion.div
      className="absolute inset-0 bg-white flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#1D8A77_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.03]" />
      
      <div className="z-10 flex flex-col items-center text-center space-y-[6vh] px-[4vw] max-w-responsive">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 15 }}
          className="relative"
        >
          <div className="w-[8vw] h-[8vw] rounded-[2.5rem] bg-[#1D8A77] flex items-center justify-center shadow-[0_20px_50px_-10px_rgba(29,138,119,0.5)]">
            <Target className="w-[4vw] h-[4vw] text-white" strokeWidth={3} />
          </div>
          <motion.div 
            className="absolute inset-0 rounded-[2.5rem] bg-[#1D8A77] z-[-1]"
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

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

        <motion.div 
          className="flex gap-[2vw] justify-center flex-wrap"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="px-[3vw] py-[1.5vh] rounded-[2rem] font-black text-[1.5vw] border-4 border-slate-200 text-slate-300 cursor-default pointer-events-none whitespace-nowrap">
            Get DevSniper Free
          </div>
          <div className="px-[3vw] py-[1.5vh] rounded-[2rem] font-black text-[1.5vw] bg-[#1D8A77] text-white shadow-[0_30px_60px_-15px_rgba(29,138,119,0.5)] cursor-default pointer-events-none whitespace-nowrap">
            Upgrade to PRO
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
