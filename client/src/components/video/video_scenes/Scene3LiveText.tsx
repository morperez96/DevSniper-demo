import { motion, AnimatePresence } from 'framer-motion';
import { Target, Type, Code2, Layout, MousePointer2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Scene3LiveText() {
  const [displayText, setDisplayText] = useState('Welcome to our awesome website');
  const [showPanel, setShowPanel] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const targetText = 'Join the Biggest Developer Event of 2024!';

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowPanel(true), 1000),
      setTimeout(() => setIsTyping(true), 2500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (isTyping) {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(targetText.slice(0, i));
        i++;
        if (i > targetText.length) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isTyping]);

  return (
    <motion.div
      className="absolute inset-0 bg-white flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full max-w-6xl flex gap-12 items-center p-12">
        {/* Mock Website View */}
        <div className="flex-1 flex flex-col items-center text-center gap-8">
           <motion.h1 
            className="text-6xl font-black text-slate-900 leading-tight min-h-[144px]"
          >
            {displayText}
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.6 }}
              className="inline-block w-1 h-12 bg-[#1D8A77] ml-2 align-middle"
            />
          </motion.h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-md">
            The background updates instantly as you type in the panel.
          </p>
        </div>

        {/* PRO Panel */}
        <AnimatePresence>
          {showPanel && (
            <motion.div
              className="w-full max-w-[450px] bg-[#1E293B] rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-slate-700 overflow-hidden text-white flex flex-col"
              initial={{ x: 100, opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <div className="p-5 border-b border-slate-700 flex justify-between items-center bg-[#0F172A]">
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-[#1D8A77]" />
                  <span className="font-bold">DevSniper PRO</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                </div>
              </div>

              <div className="flex bg-[#1E293B]">
                {['General', 'Text', 'CSS'].map((tab) => (
                  <div 
                    key={tab}
                    className={`flex-1 py-4 text-center text-xs font-bold border-b-2 transition-colors ${tab === 'Text' ? 'border-[#1D8A77] text-white bg-[#0F172A]/50' : 'border-transparent text-slate-500'}`}
                  >
                    {tab === 'Text' && <Type className="w-4 h-4 mx-auto mb-1" />}
                    {tab === 'CSS' && <Code2 className="w-4 h-4 mx-auto mb-1" />}
                    {tab === 'General' && <Layout className="w-4 h-4 mx-auto mb-1" />}
                    {tab}
                  </div>
                ))}
              </div>

              <div className="p-8 space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Live Content Editor</label>
                <div className="relative">
                  <div className="w-full bg-[#0F172A] rounded-xl p-6 min-h-[160px] border border-slate-800 text-lg font-medium leading-relaxed shadow-inner">
                    {displayText}
                  </div>
                  <motion.div 
                    className="absolute top-0 right-0 p-3"
                    animate={{ opacity: isTyping ? 1 : 0 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-[#1D8A77] animate-pulse" />
                  </motion.div>
                </div>
                <div className="flex justify-end pt-4">
                  <div className="px-8 py-3 bg-[#1D8A77] text-white rounded-xl font-bold shadow-lg shadow-[#1D8A77]/20">
                    Save Changes
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div 
        className="absolute bottom-12 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">PRO: Live Text Editing directly on the frontend.</h2>
      </motion.div>
    </motion.div>
  );
}
