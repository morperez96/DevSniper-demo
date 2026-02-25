import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Users, Search, Database, Layout, Clipboard, RefreshCw } from 'lucide-react';

export function Scene5ValueGrid() {
  const features = [
    { title: "Live Edit", icon: RefreshCw },
    { title: "Zero Bloat", icon: Zap },
    { title: "Team Favs", icon: Users },
    { title: "Admin Search", icon: Search },
    { title: "Data Sync", icon: Database },
    { title: "Native UI", icon: Layout },
    { title: "Copy Paths", icon: Clipboard },
    { title: "Cache Clear", icon: RefreshCw },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 15, opacity: 0, scale: 0.95 },
    show: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring' as const, damping: 20 }
    }
  };

  return (
    <motion.div
      className="absolute inset-0 bg-[#F8FAFC] flex flex-col items-center justify-center overflow-hidden p-[3vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
    >
      {/* Enhanced Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[45%] h-[45%] bg-[#1D8A77]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[45%] h-[45%] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(#1D8A77_1px,transparent_1px)] [background-size:2vw:2vw] opacity-[0.03]" />
      
      <motion.div 
        className="z-10 w-full max-w-[90vw]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2vw]">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              variants={item}
              className="flex flex-col items-center justify-center gap-[1.2vh] bg-white p-[1.2vw] rounded-xl border border-slate-100 shadow-md hover:shadow-lg transition-all text-center group aspect-square w-full max-w-[15vw] mx-auto"
            >
              <div className="w-[clamp(32px,3vw,48px)] h-[clamp(32px,3vw,48px)] rounded-lg bg-[#1D8A77]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <f.icon className="w-[clamp(16px,1.5vw,24px)] h-[clamp(16px,1.5vw,24px)] text-[#1D8A77]" strokeWidth={2.5} />
              </div>
              <span className="text-[clamp(0.7rem,1.2vw,0.9rem)] font-black text-slate-900 tracking-tight leading-tight px-1">{f.title}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
