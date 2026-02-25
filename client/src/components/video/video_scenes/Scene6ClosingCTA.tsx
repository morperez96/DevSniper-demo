import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

export function Scene6ClosingCTA() {
  return (
    <motion.div
      className="absolute inset-0 bg-white flex flex-col items-center justify-center overflow-hidden p-[3vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#1D8A77_1px,transparent_1px)] [background-size:3vw_3vw] opacity-[0.05]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#1D8A77]/5 via-transparent to-blue-500/5" />
      
      <div className="z-10 flex flex-col items-center text-center space-y-[4vh] max-w-[90vw]">
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: 'spring', damping: 12, stiffness: 100 }}
          className="relative"
        >
          <div className="w-[clamp(100px,15vw,160px)] h-[clamp(100px,15vw,160px)] rounded-[2.5rem] bg-gradient-to-br from-[#1D8A77] to-[#146e5f] flex items-center justify-center shadow-[0_30px_60px_-15px_rgba(29,138,119,0.5)] border-4 border-white">
            <Target className="w-[clamp(50px,8vw,80px)] h-[clamp(50px,8vw,80px)] text-white" strokeWidth={2.5} />
          </div>
          
          {/* Enhanced Pulse Rings */}
          {[1, 1.5, 2].map((s, i) => (
            <motion.div 
              key={i}
              className="absolute inset-0 rounded-[2.5rem] bg-[#1D8A77] z-[-1]"
              animate={{ 
                scale: [1, s + 0.5], 
                opacity: [0.4, 0] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: i * 0.8,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>

        <div className="space-y-[1vh]">
          <motion.h1 
            className="text-[clamp(2.5rem,6vw,5rem)] font-black text-slate-950 tracking-tighter leading-[0.9] uppercase"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Stop Searching.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D8A77] via-emerald-500 to-blue-600">
              Start Snipping.
            </span>
          </motion.h1>
          <motion.p
            className="text-[clamp(1rem,1.5vw,1.5rem)] text-slate-500 font-bold tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Available for Chrome & Edge
          </motion.p>
        </div>

        <motion.div 
          className="flex gap-[2.5vw] justify-center items-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="px-[clamp(24px,4vw,50px)] py-[clamp(14px,1.8vh,24px)] rounded-2xl font-black text-[clamp(1rem,1.4vw,1.3rem)] border-2 border-slate-200 text-slate-400 cursor-default pointer-events-none uppercase tracking-wider">
            Basic Free
          </div>
          <div className="px-[clamp(24px,4vw,50px)] py-[clamp(14px,1.8vh,24px)] rounded-2xl font-black text-[clamp(1rem,1.4vw,1.3rem)] bg-[#1D8A77] text-white shadow-[0_25px_50px_-12px_rgba(29,138,119,0.5)] cursor-default pointer-events-none uppercase tracking-wider relative overflow-hidden group">
            <motion.div 
              className="absolute inset-0 bg-white/20"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            />
            Upgrade to PRO
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
