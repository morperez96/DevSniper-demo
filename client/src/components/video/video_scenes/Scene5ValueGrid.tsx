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
      className="absolute inset-0 bg-[#020617] flex flex-col items-center justify-center overflow-hidden p-[3vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
    >
      {/* Hyper-Modern Background with moving light */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#1D8A77]/20 blur-[160px] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-blue-600/20 blur-[160px] rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.05] mix-blend-screen" />
        
        {/* Animated Scanline effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1D8A77]/5 to-transparent h-[20%] w-full"
          animate={{ y: ['-100%', '500%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:5vw_5vw] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]" />
      
      <motion.div 
        className="z-10 w-full max-w-[88vw] flex flex-col items-center gap-[6vh]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="text-center space-y-4 relative">
          <motion.div 
            className="absolute -inset-4 bg-[#1D8A77]/20 blur-2xl rounded-full opacity-50"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-white tracking-tighter uppercase italic leading-none relative">
            Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D8A77] to-emerald-400 not-italic">Performance</span>
          </h2>
          <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-[#1D8A77] to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-4 gap-[2vw]">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              variants={item}
              className="group relative"
            >
              {/* Card Glow Layer */}
              <div className="absolute -inset-[2px] bg-gradient-to-br from-[#1D8A77] via-blue-500/20 to-emerald-500 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-700 blur-[8px] group-hover:blur-[12px]" />
              
              <div className="relative flex flex-col items-center justify-center gap-[2vh] bg-slate-950/80 backdrop-blur-3xl p-[2.5vw] rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:bg-slate-900/40 transition-all duration-500 text-center aspect-square w-full group-hover:-translate-y-4 group-hover:rotate-[1deg]">
                {/* Icon Container with Glassmorphism */}
                <div className="w-[clamp(64px,6vw,90px)] h-[clamp(64px,6vw,90px)] flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 rounded-2xl shadow-2xl group-hover:scale-125 group-hover:bg-[#1D8A77]/20 transition-all duration-700 mb-[1vh] border border-white/10 overflow-hidden group-hover:shadow-[0_0_30px_rgba(29,138,119,0.4)]">
                   <div className="absolute inset-0 bg-gradient-to-tr from-[#1D8A77]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   <f.icon className="w-[clamp(32px,3vw,48px)] h-[clamp(32px,3vw,48px)] text-white group-hover:text-emerald-400 transition-all duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" strokeWidth={1} />
                </div>
                
                <div className="space-y-[0.8vh]">
                  <div className="text-[clamp(1.1rem,1.6vw,1.4rem)] font-black text-white tracking-widest leading-tight uppercase group-hover:text-emerald-300 transition-colors duration-500">
                    {f.title}
                  </div>
                  <div className="text-[clamp(0.8rem,1.1vw,1rem)] text-slate-400 font-semibold tracking-wide leading-snug px-2 group-hover:text-slate-100 transition-colors duration-500">
                    {f.desc}
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-4 right-4 w-2 h-2 border-t-2 border-r-2 border-[#1D8A77]/0 group-hover:border-[#1D8A77]/50 transition-all duration-700" />
                <div className="absolute bottom-4 left-4 w-2 h-2 border-b-2 border-l-2 border-[#1D8A77]/0 group-hover:border-[#1D8A77]/50 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
