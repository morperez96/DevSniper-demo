import { motion, AnimatePresence } from 'framer-motion';
import { Command, Search, Image as ImageIcon, FileText, User } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Scene2Search() {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let text = 'hero';
      let i = 0;
      const interval = setInterval(() => {
        setQuery(text.slice(0, i));
        i++;
        if (i > text.length) {
          clearInterval(interval);
          setShowResults(true);
        }
      }, 150);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 bg-[#0F172A] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background with subtle WP branding */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1D8A77]/5 to-blue-900/10" />
      <div className="absolute inset-0 bg-[url('https://s.w.org/style/images/about/WordPress-logotype-wmark.png')] bg-no-repeat bg-center bg-[length:60vw] opacity-[0.02] grayscale invert" />
      
      <motion.div 
        className="z-50 mb-[5vh] flex items-center gap-[1vw] bg-slate-800/80 backdrop-blur-xl px-[2vw] py-[1.5vh] rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
        initial={{ scale: 0.8, opacity: 0, y: -20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 15 }}
      >
        <div className="flex items-center gap-[0.5vw] font-black text-white">
           <Command className="w-[1.5vw] h-[1.5vw] text-[#1D8A77]" /> 
           <span className="text-slate-500 text-[1.2vw] font-bold">+</span> 
           <span className="text-[2.2vw] tracking-tighter">K</span>
           <span className="ml-[1vw] text-[1vw] text-slate-400 font-medium uppercase tracking-widest">Global Search</span>
        </div>
      </motion.div>

      <motion.div 
        className="w-[65%] max-w-[50vw] bg-slate-900 rounded-[2rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] border border-white/10 overflow-hidden z-20 relative"
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: 'spring', damping: 20, delay: 0.2 }}
      >
        <div className="p-[1.5vw] border-b border-white/5 flex items-center gap-[1.5vw] bg-slate-950/50">
          <Search className="w-[1.8vw] h-[1.8vw] text-[#1D8A77]" />
          <div className="flex-1 text-[2vw] font-black text-white font-mono tracking-tighter">
            {query}
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }} 
              className="inline-block w-[0.3vw] h-[2vw] bg-[#1D8A77] ml-2 align-middle shadow-[0_0_10px_#1D8A77]" 
            />
          </div>
        </div>

        <AnimatePresence>
          {showResults && (
            <motion.div 
              className="p-[1.2vw] space-y-[0.8vw] bg-slate-950/30"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{ duration: 0.5, ease: "circOut" }}
            >
              {[
                { icon: ImageIcon, title: 'Hero_Banner.jpg', type: 'Media Asset', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                { icon: FileText, title: 'Home Page', type: 'Core Page', color: 'text-blue-400', bg: 'bg-blue-500/10' },
                { icon: User, title: 'Admin Dashboard', type: 'System User', color: 'text-purple-400', bg: 'bg-purple-500/10' },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="flex items-center gap-[1vw] p-[1vw] rounded-2xl bg-white/5 border border-white/5 hover:border-[#1D8A77]/30 hover:bg-white/10 transition-all duration-300"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className={`w-[clamp(35px,3.5vw,50px)] h-[clamp(35px,3.5vw,50px)] rounded-xl ${item.bg} flex items-center justify-center shadow-inner`}>
                    <item.icon className={`w-[clamp(18px,1.8vw,26px)] h-[clamp(18px,1.8vw,26px)] ${item.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[clamp(0.9rem,1.4vw,1.2rem)] font-black text-white">{item.title}</div>
                    <div className="text-slate-500 text-[clamp(8px,0.8vw,11px)] font-black uppercase tracking-[0.3em]">{item.type}</div>
                  </div>
                  <div className="text-[1vw] text-slate-600 font-mono">↵ Enter</div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div 
        className="absolute bottom-[8vh] text-center px-[2vw]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
      >
        <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-black text-white tracking-tight leading-none">
          Global Admin Search. <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D8A77] to-emerald-400">Find anything in milliseconds.</span>
        </h2>
      </motion.div>
    </motion.div>
  );
}
