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
        className="z-50 mb-[3vh] flex items-center gap-[0.8vw] bg-white/90 backdrop-blur-md px-[1.5vw] py-[1vh] rounded-2xl border border-slate-200 shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
        transition={{ duration: 0.8, times: [0, 0.6, 1] }}
      >
        <div className="flex items-center gap-[0.4vw] font-black text-slate-800">
           <Command className="w-[1.2vw] h-[1.2vw]" /> <span className="text-slate-400 text-[1vw] font-bold">+</span> <span className="text-[1.8vw]">K</span>
        </div>
      </motion.div>

      <motion.div 
        className="w-[60%] max-w-[45vw] bg-[#1E293B] rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] border border-slate-700 overflow-hidden z-20"
        initial={{ y: 100, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.2 }}
      >
        <div className="p-[1vw] border-b border-slate-800 flex items-center gap-[1vw] bg-[#0F172A]">
          <Search className="w-[1.2vw] h-[1.2vw] text-slate-500" />
          <div className="flex-1 text-[1.4vw] font-bold text-white font-mono tracking-tight">
            {query}
            <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-[0.2vw] h-[1.4vw] bg-[#1D8A77] ml-1.5 align-middle" />
          </div>
        </div>

        <AnimatePresence>
          {showResults && (
            <motion.div 
              className="p-[0.8vw] space-y-[0.5vw] bg-[#0F172A]/50"
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
                  className="flex items-center gap-[0.8vw] p-[0.8vw] rounded-xl bg-slate-800/40 border border-transparent hover:border-slate-700 transition-all"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.15 }}
                >
                  <div className="w-[clamp(30px,3vw,45px)] h-[clamp(30px,3vw,45px)] rounded-lg bg-slate-900 flex items-center justify-center shadow-lg">
                    <item.icon className={`w-[clamp(15px,1.5vw,22px)] h-[clamp(15px,1.5vw,22px)] ${item.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[clamp(0.8rem,1.3vw,1.1rem)] font-bold text-white">{item.title}</div>
                    <div className="text-slate-500 text-[clamp(7px,0.8vw,10px)] font-black uppercase tracking-[0.2em]">{item.type}</div>
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
