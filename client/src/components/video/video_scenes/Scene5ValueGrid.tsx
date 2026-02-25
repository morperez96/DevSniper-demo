import { motion } from 'framer-motion';
import { CheckCircle2, Target } from 'lucide-react';

export function Scene5ValueGrid() {
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
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    show: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring' as const, damping: 20 }
    }
  };

  return (
    <motion.div
      className="absolute inset-0 bg-white flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#1D8A77_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]" />
      
      <motion.div 
        className="z-10 w-full max-w-5xl px-[6vw]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              variants={item}
              className="flex items-center gap-6 bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-500" strokeWidth={3} />
              </div>
              <span className="text-2xl font-black text-slate-900 tracking-tight">{f}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
