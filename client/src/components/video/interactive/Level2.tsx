import { motion, AnimatePresence } from 'framer-motion';
import { Command, Search, Image as ImageIcon, FileText, User } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function Level2({ onNext }: { onNext: () => void }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const isMatch = query.toLowerCase().includes('hero');
  const showResults = isMatch;

  return (
    <motion.div
      className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-[url('https://s.w.org/style/images/about/WordPress-logotype-wmark.png')] bg-no-repeat bg-center bg-[length:800px] opacity-10 mix-blend-multiply" />
      
      <motion.div 
        className="z-50 mb-[3vh] flex flex-col items-center text-center gap-[1vh]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h2 className="text-heading-lg font-black text-slate-900 tracking-tight">
          <motion.span 
            animate={{ opacity: [0.5, 1, 0.5] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-[#1D8A77]"
          >
            Type 'hero'
          </motion.span> to search.
        </h2>
      </motion.div>

      <motion.div 
        className="w-[60%] max-w-[45vw] bg-[#1E293B] rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] border border-slate-700 overflow-hidden z-20"
        initial={{ y: 50, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
      >
        <div className="p-[1vw] border-b border-slate-800 flex items-center gap-[1vw] bg-[#0F172A]">
          <Search className="w-[1.2vw] h-[1.2vw] text-slate-500" />
          <input 
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search anything..."
            className="flex-1 bg-transparent border-none outline-none text-[1.4vw] font-bold text-white font-mono placeholder:text-slate-600"
          />
        </div>

        <AnimatePresence>
          {showResults && (
            <motion.div 
              className="p-[0.8vw] space-y-[0.5vw] bg-[#0F172A]/50"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {[
                { icon: ImageIcon, title: 'Hero_Banner.jpg', type: 'Media', color: 'text-emerald-400', clickable: false },
                { icon: FileText, title: 'Hero Section Page', type: 'Page', color: 'text-blue-400', clickable: true },
                { icon: User, title: 'Hero Admin User', type: 'User', color: 'text-purple-400', clickable: false },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  onClick={item.clickable ? onNext : undefined}
                  className={`flex items-center gap-[0.8vw] p-[0.8vw] rounded-xl transition-all relative ${
                    item.clickable 
                      ? 'bg-slate-800 border-[#1D8A77] border cursor-pointer hover:bg-slate-700' 
                      : 'bg-slate-800/40 border-transparent opacity-60'
                  }`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="w-[clamp(30px,3vw,45px)] h-[clamp(30px,3vw,45px)] rounded-lg bg-slate-900 flex items-center justify-center shadow-lg">
                    <item.icon className={`w-[clamp(15px,1.5vw,22px)] h-[clamp(15px,1.5vw,22px)] ${item.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[clamp(0.8rem,1.3vw,1.1rem)] font-bold text-white">
                      {item.title}
                    </div>
                    <div className="text-slate-500 text-[clamp(7px,0.8vw,10px)] font-black uppercase tracking-[0.2em]">{item.type}</div>
                  </div>
                  {item.clickable && (
                    <motion.div 
                      className="absolute right-4 text-[#1D8A77] font-bold text-sm"
                      animate={{ opacity: [0.3, 1, 0.3], x: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      ← Click to Edit
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
