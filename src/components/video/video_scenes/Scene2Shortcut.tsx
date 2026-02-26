import { motion, AnimatePresence } from 'framer-motion';
import { Command, Search, Image as ImageIcon, FileText, User, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Scene2Shortcut() {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
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
    }, 1000);
    return () => clearTimeout(timer1);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 bg-white flex flex-col items-center justify-center overflow-hidden"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 bg-[#F1F5F9] blur-xl opacity-50 bg-[url('https://s.w.org/style/images/about/WordPress-logotype-wmark.png')] bg-no-repeat bg-center bg-[length:600px]" />
      
      <motion.div 
        className="z-50 mb-12 flex items-center gap-4 bg-white/80 backdrop-blur px-6 py-3 rounded-2xl border border-slate-200 shadow-sm"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5 }}
      >
        <div className="flex items-center gap-1 font-black text-2xl text-slate-800">
           <Command className="w-6 h-6" /> <span>+ K</span>
        </div>
      </motion.div>

      <motion.div 
        className="w-full max-w-xl bg-[#1E293B] rounded-2xl shadow-2xl border border-slate-700 overflow-hidden z-20"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="p-5 border-b border-slate-800 flex items-center gap-4">
          <Search className="w-5 h-5 text-slate-500" />
          <div className="flex-1 text-2xl font-bold text-white font-mono">
            {query}
            <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8 }} className="inline-block w-0.5 h-7 bg-[#1D8A77] ml-1 align-middle" />
          </div>
        </div>

        <AnimatePresence>
          {showResults && (
            <motion.div 
              className="p-3 space-y-2 bg-[#0F172A]"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
            >
              {[
                { icon: ImageIcon, title: 'Hero Banner', type: 'Media', color: 'text-emerald-400' },
                { icon: FileText, title: 'Hero Section', type: 'Page', color: 'text-blue-400' },
                { icon: User, title: 'Hero Admin', type: 'User', color: 'text-purple-400' },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-800 transition-colors"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-bold">{item.title}</div>
                    <div className="text-slate-500 text-xs uppercase tracking-widest">{item.type}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="absolute top-12 left-0 right-0 text-center px-8">
        <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Find anything. Instantly.</h2>
      </div>
    </motion.div>
  );
}
