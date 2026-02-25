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
      className="absolute inset-0 bg-white flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-[#F1F5F9] blur-3xl opacity-30 bg-[url('https://s.w.org/style/images/about/WordPress-logotype-wmark.png')] bg-no-repeat bg-center bg-[length:800px]" />
      
      <motion.div 
        className="z-50 mb-[5vh] flex items-center gap-[1vw] bg-white/90 backdrop-blur-md px-[2vw] py-[1.5vh] rounded-3xl border border-slate-200 shadow-xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
        transition={{ duration: 0.8, times: [0, 0.6, 1] }}
      >
        <div className="flex items-center gap-[0.5vw] font-black text-heading-md text-slate-800">
           <Command className="w-[2vw] h-[2vw]" /> <span className="text-slate-400 text-[1.5vw] font-bold">+</span> <span className="text-[2.5vw]">K</span>
        </div>
      </motion.div>

      <motion.div 
        className="w-[90%] max-w-[85vw] bg-[#1E293B] rounded-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] border border-slate-700 overflow-hidden z-20"
        initial={{ y: 100, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.2 }}
      >
        <div className="p-[1.5vw] border-b border-slate-800 flex items-center gap-[1.5vw] bg-[#0F172A]">
          <Search className="w-[1.5vw] h-[1.5vw] text-slate-500" />
          <div className="flex-1 text-[2vw] font-bold text-white font-mono tracking-tight">
            {query}
            <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-[0.3vw] h-[2vw] bg-[#1D8A77] ml-2 align-middle" />
          </div>
        </div>

        <AnimatePresence>
          {showResults && (
            <motion.div 
              className="p-4 space-y-3 bg-[#0F172A]/50"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{ duration: 0.5, ease: "circOut" }}
            >
              {[
                { icon: ImageIcon, title: 'Hero_Banner.jpg', type: 'Media', color: 'text-emerald-400' },
                { icon: FileText, title: 'Home Page', type: 'Page', color: 'text-blue-400' },
                { icon: User, title: 'Admin', type: 'User', color: 'text-purple-400' },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="flex items-center gap-[1vw] p-[1vw] rounded-2xl bg-slate-800/40 border border-transparent hover:border-slate-700 transition-all"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.15 }}
                >
                  <div className="w-[clamp(40px,4vw,60px)] h-[clamp(40px,4vw,60px)] rounded-xl bg-slate-900 flex items-center justify-center shadow-lg">
                    <item.icon className={`w-[clamp(20px,2vw,30px)] h-[clamp(20px,2vw,30px)] ${item.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[clamp(0.9rem,1.8vw,1.2rem)] font-bold text-white">{item.title}</div>
                    <div className="text-slate-500 text-[clamp(8px,1vw,12px)] font-black uppercase tracking-[0.2em]">{item.type}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div 
        className="absolute bottom-[5vh] text-center px-[2vw]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <h2 className="text-heading-md font-black text-slate-900 tracking-tight">
          Global Admin Search. <span className="text-[#1D8A77]">Find anything in milliseconds.</span>
        </h2>
      </motion.div>
    </motion.div>
  );
}
