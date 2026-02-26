import { motion } from 'framer-motion';
import { CheckCircle2, Target } from 'lucide-react';

export function Scene4Drop() {
  const points = ["Zero Bloat", "Team Favorites", "Unmatched Speed"];

  return (
    <motion.div
      className="absolute inset-0 bg-white flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#1D8A77_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.05]" />
      
      <div className="flex flex-col gap-6 mb-20">
        {points.map((point, idx) => (
          <motion.div
            key={idx}
            className="bg-[#F8FAFC] px-10 py-6 rounded-3xl border border-slate-100 shadow-xl flex items-center gap-6"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.2, type: 'spring' }}
          >
            <CheckCircle2 className="w-10 h-10 text-[#1D8A77]" strokeWidth={3} />
            <span className="text-4xl font-black text-slate-900 tracking-tight">{point}</span>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="text-center space-y-12 max-w-5xl px-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', damping: 12 }}
      >
        <h1 className="text-7xl font-black text-slate-900 tracking-tighter leading-none">
          Stop Searching.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D8A77] to-teal-400">
            Start Snipping.
          </span>
        </h1>

        <div className="flex gap-6 justify-center pointer-events-none">
          <div className="px-12 py-5 rounded-2xl font-black text-2xl border-4 border-slate-200 text-slate-300">
            Get Free
          </div>
          <div className="px-12 py-5 rounded-2xl font-black text-2xl bg-[#1D8A77] text-white shadow-[0_20px_50px_-10px_rgba(29,138,119,0.5)]">
            Go PRO
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute -top-20 -left-20 opacity-[0.03]"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, ease: "linear" }}
      >
        <Target className="w-[800px] h-[800px] text-[#1D8A77]" />
      </motion.div>
    </motion.div>
  );
}
