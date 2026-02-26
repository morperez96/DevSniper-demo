import { motion } from 'framer-motion';
import { Search, Star, Image as ImageIcon, FileText, Layout } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Scene2AdminSearch() {
  const [query, setQuery] = useState('');
  
  const results = [
    { id: 42, title: 'Group 42', type: 'Media', icon: ImageIcon },
    { id: 41, title: 'Group 41', type: 'Media', icon: ImageIcon },
    { id: 39, title: 'Group 39', type: 'Media', icon: ImageIcon, favorite: true },
    { id: 32, title: 'Group 32', type: 'Media', icon: ImageIcon },
  ];

  useEffect(() => {
    const text = 'gro';
    let i = 0;
    const interval = setInterval(() => {
      setQuery(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-[#0F172A] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.8 }}
    >
      {/* Blurred WP Admin Background */}
      <div className="absolute inset-0 opacity-20 grayscale scale-110 blur-md bg-[url('https://s.w.org/style/images/about/WordPress-logotype-wmark.png')] bg-no-repeat bg-center bg-[length:400px]" />
      
      <div className="absolute top-12 left-0 right-0 text-center">
        <h2 className="text-4xl font-bold text-white mb-2">Lost in the WordPress Admin?</h2>
        <p className="text-[#1D8A77] font-mono">Admin Search: Find anything, fast.</p>
      </div>

      <motion.div 
        className="w-full max-w-2xl bg-white rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden z-20"
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
      >
        <div className="p-4 border-b border-slate-100 flex items-center gap-4">
          <Search className="w-5 h-5 text-slate-400" />
          <div className="flex-1 text-xl font-medium text-slate-700">
            {query}
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-0.5 h-6 bg-blue-500 ml-1 align-middle"
            />
          </div>
          <Star className="w-5 h-5 text-slate-300" />
        </div>

        <div className="bg-slate-50 p-2">
          <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold px-3 py-2">Media</p>
          <div className="space-y-1">
            {results.map((item, idx) => (
              <motion.div
                key={item.id}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg ${idx === 2 ? 'bg-blue-50' : ''}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + idx * 0.1 }}
              >
                <div className={`w-10 h-10 rounded bg-white border border-slate-200 flex items-center justify-center shadow-sm`}>
                  <item.icon className="w-5 h-5 text-slate-400" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-700">{item.title}</p>
                  <p className="text-xs text-slate-400">{item.type}</p>
                </div>
                {item.favorite && <Star className="w-4 h-4 text-amber-400 fill-amber-400" />}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
