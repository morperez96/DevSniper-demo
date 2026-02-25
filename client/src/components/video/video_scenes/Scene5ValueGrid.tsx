import { motion } from 'framer-motion';
import { Zap, Users, Search, Database, Layout, Clipboard, RefreshCw } from 'lucide-react';

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
      className="absolute inset-0 bg-white flex flex-col items-center justify-center overflow-hidden p-[3vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
    >
      {/* Soft Background Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#1D8A77]/5 blur-[160px] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-blue-50/50 blur-[160px] rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Animated Scanline effect - subtle for light theme */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1D8A77]/5 to-transparent h-[15%] w-full"
          animate={{ y: ['-100%', '600%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:5vw_5vw] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_95%)]" />
      
      <motion.div 
        className="z-10 w-full max-w-[88vw] flex flex-col items-center gap-[6vh]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="text-center space-y-4 relative">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-slate-900 tracking-tighter uppercase italic leading-none relative">
            Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D8A77] to-emerald-600 not-italic">Performance</span>
          </h2>
          <div className="h-[3px] w-32 bg-gradient-to-r from-transparent via-[#1D8A77] to-transparent mx-auto rounded-full opacity-50" />
        </motion.div>

        <div className="grid grid-cols-4 gap-[2vw]">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              variants={item}
              className="group relative"
            >
              {/* Card Shadow/Glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-[#1D8A77]/20 to-blue-500/10 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-[4px]" />
              
              <div className="relative flex flex-col items-center justify-center gap-[2vh] bg-white border border-slate-100 p-[2.5vw] rounded-[2rem] shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-[#1D8A77]/10 transition-all duration-500 text-center aspect-square w-full group-hover:-translate-y-3">
                {/* Icon Container */}
                <div className="w-[clamp(64px,6vw,90px)] h-[clamp(64px,6vw,90px)] flex items-center justify-center bg-slate-50 rounded-2xl group-hover:scale-110 group-hover:bg-[#1D8A77]/5 transition-all duration-500 mb-[1vh] border border-slate-100 relative overflow-hidden">
                   <f.icon className="w-[clamp(32px,3vw,48px)] h-[clamp(32px,3vw,48px)] text-slate-400 group-hover:text-[#1D8A77] transition-all duration-500" strokeWidth={1.5} />
                </div>
                
                <div className="space-y-[0.8vh]">
                  <div className="text-[clamp(1.1rem,1.6vw,1.4rem)] font-extrabold text-slate-800 tracking-tight leading-tight group-hover:text-[#1D8A77] transition-colors duration-500">
                    {f.title}
                  </div>
                  <div className="text-[clamp(0.8rem,1.1vw,1rem)] text-slate-500 font-medium leading-snug px-2 group-hover:text-slate-700 transition-colors duration-500">
                    {f.desc}
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-6 right-6 w-2 h-2 border-t-2 border-r-2 border-slate-200 group-hover:border-[#1D8A77]/40 transition-all duration-500" />
                <div className="absolute bottom-6 left-6 w-2 h-2 border-b-2 border-l-2 border-slate-200 group-hover:border-[#1D8A77]/40 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
