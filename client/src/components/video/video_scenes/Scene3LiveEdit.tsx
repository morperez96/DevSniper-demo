import { motion, AnimatePresence } from 'framer-motion';
import { Target, Type, Code2, Save, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Scene3LiveEdit() {
  const [activeTab, setActiveTab] = useState('text');
  const [headline, setHeadline] = useState('Ultimate Workflow');
  const [cssCode, setCssCode] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isTypingText, setIsTypingText] = useState(false);
  const [isTypingCSS, setIsTypingCSS] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setIsTypingText(true), 1500),
      setTimeout(() => {
        setIsTypingText(false);
        setActiveTab('css');
      }, 6000),
      setTimeout(() => setIsTypingCSS(true), 7500),
      setTimeout(() => {
        setIsTypingCSS(false);
        setShowSuccess(true);
      }, 10500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (isTypingText) {
      const text = 'The Ultimate Developer Workflow';
      let i = 0;
      const interval = setInterval(() => {
        setHeadline(text.slice(0, i));
        i++;
        if (i > text.length) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }
    if (isTypingCSS) {
      const code = `color: #1D8A77;`;
      let i = 0;
      const interval = setInterval(() => {
        setCssCode(code.slice(0, i));
        i++;
        if (i > code.length) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isTypingText, isTypingCSS]);

  const hasColor = cssCode.includes('#1D8A77');

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center overflow-hidden p-[4vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full flex gap-[3vw] items-center relative" style={{ maxWidth: 'min(90%, 80vw)' }}>
        <div className="flex-1 text-left relative">
           <motion.h1 
            className="text-heading-xl font-black tracking-tighter leading-none transition-colors duration-300"
            animate={{ color: hasColor ? '#1D8A77' : '#0F172A' }}
          >
            {headline}
            {isTypingText && <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="inline-block w-1.5 bg-[#1D8A77] ml-2 align-middle" style={{ height: 'clamp(3rem, 10vw, 16rem)' }} />}
          </motion.h1>
          {isTypingText && <motion.div className="h-1 bg-[#1D8A77] absolute bottom-0 left-0" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 4.5 }} />}
        </div>

        <motion.div 
          className="bg-[#1E293B] rounded-2xl shadow-2xl border border-slate-700 overflow-hidden text-white flex flex-col"
          style={{ width: 'clamp(280px, 25vw, 450px)', height: 'clamp(400px, 60vh, 600px)' }}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 25 }}
        >
          <div className="p-5 bg-[#0F172A] border-b border-slate-800 flex justify-between items-center shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#1D8A77] flex items-center justify-center">
                <Target className="w-4 h-4 text-white" />
              </div>
              <span className="font-black text-sm tracking-tight">DevSniper <span className="text-[#1D8A77]">PRO</span></span>
            </div>
          </div>

          <div className="flex bg-[#1E293B] border-b border-slate-800">
             {['GENERAL', 'TEXT', 'CSS'].map((tab) => (
               <div 
                key={tab}
                className={`flex-1 py-4 text-center text-[10px] font-black uppercase tracking-widest ${activeTab === tab.toLowerCase() ? 'text-white border-b-2 border-[#1D8A77] bg-[#0F172A]/40' : 'text-slate-500'}`}
               >
                 {tab}
               </div>
             ))}
          </div>

          <div className="p-6 space-y-6 flex-1 flex flex-col bg-[#0F172A]/30">
            <div className="flex-1 bg-[#0F172A] rounded-xl p-5 font-mono text-xs leading-relaxed border border-slate-800 shadow-inner overflow-hidden">
               {activeTab === 'text' ? (
                 <div className="text-white font-medium">{headline}</div>
               ) : (
                 <div className="space-y-1">
                   <div className="text-slate-500">selector {'{'}</div>
                   <div className="pl-4 text-emerald-400 min-h-[100px] whitespace-pre-wrap">
                     {cssCode}
                     {isTypingCSS && <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="inline-block w-1.5 h-3.5 bg-[#1D8A77] ml-1 align-middle" />}
                   </div>
                   <div className="text-slate-500">{'}'}</div>
                 </div>
               )}
            </div>

            <div className="flex flex-col gap-4">
               <AnimatePresence>
                 {showSuccess && (
                   <motion.div 
                    className="flex items-center gap-2 text-emerald-400 font-black text-xs px-3 py-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                   >
                     <CheckCircle2 className="w-4 h-4" />
                     Saved to WordPress
                   </motion.div>
                 )}
               </AnimatePresence>
               <motion.div 
                className={`w-full py-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-lg ${showSuccess ? 'bg-emerald-500' : 'bg-[#1D8A77]'}`}
                animate={{ scale: showSuccess ? [1, 1.05, 1] : 1 }}
               >
                 <Save className="w-5 h-5" />
                 Save Changes
               </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute w-full text-center px-[4vw]"
        style={{ bottom: '8vh' }}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-heading-lg text-slate-900 tracking-tight leading-tight">
          PRO: Live Edit Text & CSS. <span className="text-[#1D8A77]">Zero Context Switching.</span>
        </h2>
      </motion.div>
    </motion.div>
  );
}
