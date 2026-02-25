import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Users, Search, Database, Layout, Clipboard, RefreshCw } from 'lucide-react';

export function Scene5ValueGrid() {
  const features = [
    { title: "Live Edit", desc: "Real-time CSS & Text", icon: RefreshCw },
    { title: "Zero Bloat", desc: "Fast & Lightweight", icon: Zap },
    { title: "Team Favs", desc: "Built for Agencies", icon: Users },
    { title: "Admin Search", desc: "Find anything fast", icon: Search },
    { title: "Data Sync", desc: "Cloud connectivity", icon: Database },
    { title: "Native UI", desc: "Seamless integration", icon: Layout },
    { title: "Copy Paths", desc: "One-click copy", icon: Clipboard },
    { title: "Cache Clear", desc: "Instant refresh", icon: RefreshCw },
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
        className="z-10 w-full max-w-[80vw]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="grid grid-cols-4 gap-[1vw]">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              variants={item}
              className="flex flex-col items-center justify-center gap-[1vh] bg-white/80 backdrop-blur-sm p-[1.2vw] rounded-2xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(29,138,119,0.1)] transition-all text-center group aspect-square w-full max-w-[17vw] mx-auto"
            >
              <div className="w-[clamp(44px,4vw,64px)] h-[clamp(44px,4vw,64px)] flex items-center justify-center bg-slate-50 rounded-2xl group-hover:scale-110 group-hover:bg-[#1D8A77]/5 transition-all duration-500 pointer-events-none mb-[0.2vh]">
                <f.icon className="w-[clamp(22px,2vw,32px)] h-[clamp(22px,2vw,32px)] text-[#1D8A77]" strokeWidth={2} />
              </div>
              <div className="space-y-[0.2vh]">
                <div className="text-[clamp(0.85rem,1.2vw,1.05rem)] font-black text-slate-900 tracking-tight leading-tight px-1 uppercase">{f.title}</div>
                <div className="text-[clamp(0.65rem,0.85vw,0.8rem)] text-slate-500 font-semibold leading-tight">{f.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
