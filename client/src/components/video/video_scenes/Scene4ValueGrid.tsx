import { motion } from 'framer-motion';
import { RefreshCw, Zap, Users, Search, Database, Layout, Clipboard } from 'lucide-react';

export function Scene4ValueGrid() {
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
      className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden p-[4vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
    >
      <div className="z-10 w-full" style={{ maxWidth: 'min(90%, 75vw)' }}>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {features.map((f, i) => (
            <motion.div 
              key={i}
              variants={item}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl flex flex-col items-center text-center gap-4 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#1D8A77]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <f.icon className="w-8 h-8 text-[#1D8A77]" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-black text-slate-900 tracking-tight leading-tight">{f.title}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        className="absolute w-full text-center px-[4vw]"
        style={{ bottom: '8vh' }}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <h2 className="text-heading-lg text-slate-900 tracking-tight leading-tight">
          Everything you need to speed up development.
        </h2>
      </motion.div>
    </motion.div>
  );
}
