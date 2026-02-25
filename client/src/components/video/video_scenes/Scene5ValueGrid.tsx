import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Users, Search, Database, Layout, Clipboard, RefreshCw } from 'lucide-react';

export function Scene5ValueGrid() {
  const features = [
    { title: "Live Text & CSS Editing", icon: RefreshCw },
    { title: "Zero Frontend Bloat", icon: Zap },
    { title: "Team Shared Favorites", icon: Users },
    { title: "Global Admin Search", icon: Search },
    { title: "Elementor Data Sync", icon: Database },
    { title: "Native WordPress UI", icon: Layout },
    { title: "One-Click Copy Paths", icon: Clipboard },
    { title: "Smart Cache Clearing", icon: RefreshCw },
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
        className="z-10 w-full max-w-responsive px-[3vw]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1.5vw]">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              variants={item}
              className="flex flex-col items-center gap-[1.5vw] bg-white p-[2vw] rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all text-center group"
            >
              <div className="w-[4vw] h-[4vw] rounded-2xl bg-[#1D8A77]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <f.icon className="w-[2vw] h-[2vw] text-[#1D8A77]" strokeWidth={2.5} />
              </div>
              <span className="text-[1.2vw] font-black text-slate-900 tracking-tight leading-tight">{f.title}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
