import { motion, AnimatePresence } from 'framer-motion';
import { Command, Search, Image as ImageIcon, FileText, User } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Scene2AdminSearch() {
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
      className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden p-[5vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div 
          className="bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 font-black text-lg text-slate-700"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 15 }}
        >
          <Command className="w-5 h-5" /> + K
        </motion.div>

        <motion.div 
          className="w-full bg-[#1E293B] rounded-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] border border-slate-700 overflow-hidden"
          style={{ maxWidth: 'min(90%, 35vw)' }}
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', damping: 20 }}
        >
          <div className="p-5 border-b border-slate-800 flex items-center gap-4 bg-[#0F172A]">
            <Search className="w-5 h-5 text-slate-500" />
            <div className="flex-1 text-2xl font-bold text-white font-mono tracking-tight">
              {query}
              <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-1 h-7 bg-[#1D8A77] ml-2 align-middle" />
            </div>
          </div>

          <AnimatePresence>
            {showResults && (
              <motion.div 
                className="p-3 space-y-2 bg-[#0F172A]/50"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
              >
                {[
                  { icon: ImageIcon, title: 'Hero_Banner.jpg', type: 'Media', color: 'text-emerald-400' },
                  { icon: FileText, title: 'Home Page', type: 'Page', color: 'text-blue-400' },
                  { icon: User, title: 'Admin', type: 'User', color: 'text-purple-400' },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/40 border border-transparent"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold">{item.title}</div>
                      <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest">{item.type}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
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
          Global Admin Search. <span className="text-[#1D8A77]">Find anything in milliseconds.</span>
        </h2>
      </motion.div>
    </motion.div>
  );
}
