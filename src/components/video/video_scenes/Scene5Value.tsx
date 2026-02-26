import { motion } from 'framer-motion';
import { Target, CheckCircle2 } from 'lucide-react';

export function Scene5Value() {
  const features = [
    "Live Text & CSS Editing",
    "Zero Frontend Bloat",
    "Team Shared Favorites",
    "Global Admin Search",
    "Elementor Data Sync",
    "Native WordPress UI",
    "One-Click Copy Paths",
    "Smart Cache Clearing",
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    show: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring' as const, damping: 15 }
    }
  };

  return (
    <motion.div
      className="absolute inset-0 bg-white flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#1D8A77_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.03]" />
      
      <motion.div 
        className="z-10 w-full max-w-6xl px-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              variants={item}
              className="flex items-center gap-6 bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-500" strokeWidth={3} />
              </div>
              <span className="text-2xl font-black text-slate-900 tracking-tight">{f}</span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center space-y-16"
          variants={item}
        >
          <h1 className="text-9xl font-black text-slate-900 tracking-tighter leading-none">
            Stop Searching.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D8A77] to-emerald-400">
              Start Snipping.
            </span>
          </h1>

          <div className="flex gap-8 justify-center pointer-events-none">
            <div className="px-14 py-6 rounded-[2rem] font-black text-2xl border-4 border-slate-200 text-slate-400">
              Get DevSniper Free
            </div>
            <div className="px-14 py-6 rounded-[2rem] font-black text-2xl bg-[#1D8A77] text-white shadow-[0_30px_60px_-15px_rgba(29,138,119,0.5)]">
              Upgrade to PRO
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute -bottom-40 -left-40 opacity-[0.02]"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <Target className="w-[1000px] h-[1000px] text-[#1D8A77]" />
      </motion.div>
    </motion.div>
  );
}
