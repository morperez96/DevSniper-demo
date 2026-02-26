import { motion } from 'framer-motion';
import { Zap, Users, Search, Database, Layout, Clipboard, RefreshCw, Sparkles } from 'lucide-react';

export function Level5() {
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
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    show: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring' as const, damping: 20 } }
  };

  return (
    <motion.div
      className="absolute inset-0 bg-white flex flex-col items-center justify-center overflow-hidden p-[3vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="z-10 w-full max-w-[92vw] flex flex-col items-center gap-[4vh]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="text-center space-y-2">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-slate-900 tracking-tighter uppercase italic leading-none">
            Stop Searching.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D8A77] to-emerald-600 not-italic">Start Snipping.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-4 gap-[1.5vw] w-full">
          {features.map((f, i) => (
            <motion.div key={i} variants={item} className="group relative">
              <div className="relative flex flex-col items-center justify-center gap-[1vh] bg-white border border-slate-100 p-[1.5vw] rounded-[1.5rem] shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-[#1D8A77]/10 transition-all duration-500 text-center aspect-square w-full">
                <div className="w-[clamp(40px,4vw,56px)] h-[clamp(40px,4vw,56px)] flex items-center justify-center bg-slate-50 rounded-2xl group-hover:scale-110 group-hover:bg-[#1D8A77]/10 transition-all duration-500 mb-[0.5vh] text-slate-400 group-hover:text-[#1D8A77]">
                   <f.icon className="w-[clamp(20px,2vw,28px)] h-[clamp(20px,2vw,28px)]" strokeWidth={1.5} />
                </div>
                <div className="text-[clamp(0.9rem,1.1vw,1.1rem)] font-extrabold text-slate-800 tracking-tight leading-tight group-hover:text-[#1D8A77] transition-colors duration-500">
                  {f.title}
                </div>
                <div className="text-[clamp(0.7rem,0.9vw,0.9rem)] text-slate-500 font-medium leading-snug px-1">
                  {f.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={item} className="flex gap-[1.5vw] mt-[1vh]">
          <button className="px-[3vw] py-[2vh] bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-black text-[clamp(14px,1.5vw,20px)] shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
            Get DevSniper Free
          </button>
          <button onClick={() => window.location.href='https://devsniper.com/pro/'} className="px-[3vw] py-[2vh] bg-[#1D8A77] hover:bg-[#156e5e] text-white rounded-xl font-black text-[clamp(14px,1.5vw,20px)] shadow-xl shadow-[#1D8A77]/30 transition-all hover:scale-105 hover:shadow-[#1D8A77]/50 active:scale-95 flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Upgrade to PRO
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
