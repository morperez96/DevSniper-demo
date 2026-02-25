import { motion, AnimatePresence } from 'framer-motion';
import { Target, Type, Code2, Save, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Scene4LiveEdit() {
  const [activeTab, setActiveTab] = useState('text');
  const [headline, setHeadline] = useState('Ultimate Workflow');
  const [cssCode, setCssCode] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [typingText, setTypingText] = useState(false);
  const [typingCSS, setTypingCSS] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setTypingText(true), 1500),
      setTimeout(() => {
        setTypingText(false);
        setActiveTab('css');
      }, 7000),
      setTimeout(() => setTypingCSS(true), 8500),
      setTimeout(() => setShowSuccess(true), 15000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (typingText) {
      const text = 'The Ultimate Developer Workflow';
      let i = 0;
      const interval = setInterval(() => {
        setHeadline(text.slice(0, i));
        i++;
        if (i > text.length) clearInterval(interval);
      }, 60);
      return () => clearInterval(interval);
    }
    if (typingCSS) {
      const code = `color: #1D8A77;
background: #f0fdfa;
padding: 20px 40px;
border-radius: 16px;`;
      let i = 0;
      const interval = setInterval(() => {
        setCssCode(code.slice(0, i));
        i++;
        if (i > code.length) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [typingText, typingCSS]);

  const hasColor = cssCode.includes('#1D8A77');
  const hasBg = cssCode.includes('#f0fdfa');
  const hasPadding = cssCode.includes('20px 40px');
  const hasRadius = cssCode.includes('16px');

  return (
    <motion.div
      className="absolute inset-0 bg-white flex items-center justify-center overflow-hidden p-[2vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full max-w-responsive flex gap-[3vw] items-center h-full relative">
        {/* Live Preview Side */}
        <div className="flex-1 flex flex-col items-center justify-center min-h-[50vh] relative z-10 px-[2vw]">
           <motion.h1 
            className="text-heading-xl font-black text-center tracking-tighter leading-none transition-all duration-300"
            animate={{
              color: hasColor ? '#1D8A77' : '#0F172A',
              backgroundColor: hasBg ? '#f0fdfa' : 'transparent',
              padding: hasPadding ? 'clamp(1rem, 2vw, 2.5rem) clamp(2rem, 3vw, 2.5rem)' : '0px',
              borderRadius: hasRadius ? '16px' : '0px',
            }}
          >
            {headline}
            <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="inline-block w-[0.5vw] h-[4vh] bg-[#1D8A77] ml-[1vw] align-middle" />
          </motion.h1>
          <div className="mt-[3vh] w-[80%] max-w-[60vw] h-[0.5vh] bg-slate-100 rounded-full overflow-hidden">
             <motion.div 
               className="h-full bg-[#1D8A77]"
               initial={{ width: 0 }}
               animate={{ width: '100%' }}
               transition={{ duration: 15, ease: "linear" }}
             />
          </div>
        </div>

        {/* PRO Dark Panel with Layout Morph */}
        <motion.div 
          layoutId="inspector-panel"
          className="w-[30vw] max-w-[45vw] bg-[#1E293B] rounded-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] border border-slate-700 overflow-hidden text-white flex flex-col h-auto max-h-[85vh] relative z-20 mb-8"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 25 }}
        >
          <div className="p-[1.5vw] bg-[#0F172A] border-b border-slate-800 flex justify-between items-center shadow-lg relative z-10">
            <div className="flex items-center gap-[1vw]">
              <div className="w-[2.5vw] h-[2.5vw] rounded-xl bg-[#1D8A77] flex items-center justify-center shadow-lg">
                <Target className="w-[1.5vw] h-[1.5vw] text-white" />
              </div>
              <span className="font-black text-[1.2vw] tracking-tight">DevSniper <span className="text-[#1D8A77]">PRO</span></span>
            </div>
            <div className="flex gap-[0.5vw] items-center">
               <div className="text-[0.6vw] font-black text-slate-500 mr-[0.5vw] tracking-widest uppercase">Live Inspector</div>
               <div className="w-[0.7vw] h-[0.7vw] rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)] animate-pulse" />
            </div>
          </div>

          <div className="flex bg-[#1E293B] border-b border-slate-800">
             {['General', 'Text', 'CSS'].map((tab) => (
               <div 
                key={tab}
                className={`flex-1 py-5 text-center text-xs font-black uppercase tracking-widest transition-all cursor-default ${activeTab === tab.toLowerCase() ? 'text-white border-b-4 border-[#1D8A77] bg-[#0F172A]/40' : 'text-slate-500'}`}
               >
                 <div className="flex flex-col items-center gap-2">
                   {tab === 'Text' && <Type className="w-4 h-4" />}
                   {tab === 'CSS' && <Code2 className="w-4 h-4" />}
                   {tab}
                 </div>
               </div>
             ))}
          </div>

          <div className="p-[1.5vw] space-y-[1.5vw] flex-1 flex flex-col bg-[#0F172A]/30">
            <div className="flex-1 bg-[#0F172A] rounded-2xl p-[1.5vw] font-mono text-[0.9vw] leading-relaxed border border-slate-800 shadow-inner relative overflow-hidden">
               <div className="absolute top-0 left-0 w-[0.3vw] h-full bg-[#1D8A77]/20" />
               {activeTab === 'text' ? (
                 <div className="text-white font-medium">{headline}</div>
               ) : (
                 <div className="space-y-[0.5vw]">
                   <div className="text-slate-500">selector {'{'}</div>
                   <div className="pl-[1vw] text-emerald-400 whitespace-pre-wrap min-h-[6vh]">
                     {cssCode}
                     <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="inline-block w-[0.6vw] h-[1.2vh] bg-[#1D8A77] ml-[0.5vw] align-middle" />
                   </div>
                   <div className="text-slate-500">{'}'}</div>
                 </div>
               )}
            </div>

            <div className="flex justify-end items-center gap-[1.5vw] pb-[0.5vw] pointer-events-none">
               <AnimatePresence>
                 {showSuccess && (
                   <motion.div 
                    className="flex items-center gap-[0.5vw] text-emerald-400 font-black text-[0.8vw] px-[1vw] py-[0.5vh] bg-emerald-500/10 rounded-full border border-emerald-500/20"
                    initial={{ scale: 0.5, opacity: 0, x: 20 }}
                    animate={{ scale: 1, opacity: 1, x: 0 }}
                   >
                     <CheckCircle2 className="w-[1vw] h-[1vw]" />
                     Saved to WordPress
                   </motion.div>
                 )}
               </AnimatePresence>
               <motion.div 
                className={`px-[3vw] py-[1vh] rounded-2xl font-black text-[1.1vw] flex items-center gap-[0.5vw] shadow-2xl transition-all ${showSuccess ? 'bg-emerald-500 scale-105' : 'bg-[#1D8A77]'}`}
               >
                 <Save className="w-[1.3vw] h-[1.3vw]" />
                 Save Changes
               </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-[3vh] left-0 right-0 text-center px-[2vw]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <h2 className="text-heading-md font-black text-slate-900 tracking-tight">
          PRO: Live Edit Text & CSS. <span className="text-[#1D8A77]">Zero Context Switching.</span>
        </h2>
      </motion.div>
    </motion.div>
  );
}
