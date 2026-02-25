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
      }, 5500),
      setTimeout(() => setTypingCSS(true), 6500),
      setTimeout(() => setShowSuccess(true), 11000),
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
      }, 50);
      return () => clearInterval(interval);
    }
    if (typingCSS) {
      const code = `color: #1D8A77;
background: #f0fdfa;
border-radius: 12px;`;
      let i = 0;
      const interval = setInterval(() => {
        setCssCode(code.slice(0, i));
        i++;
        if (i > code.length) clearInterval(interval);
      }, 40);
      return () => clearInterval(interval);
    }
  }, [typingText, typingCSS]);

  const hasColor = cssCode.includes('#1D8A77');
  const hasBg = cssCode.includes('#f0fdfa');
  const hasRadius = cssCode.includes('12px');

  return (
    <motion.div
      className="absolute inset-0 bg-[#F8FAFC] flex items-center justify-center overflow-hidden p-[2vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Enhanced Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#1D8A77]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      </div>

      <div className="w-full max-w-[90vw] flex gap-[3vw] items-center h-full relative">
        {/* Live Preview Side */}
        <div className="flex-1 flex flex-col items-center justify-center min-h-[40vh] relative z-10 px-[2vw]">
           <motion.h1 
            className="text-heading-xl font-black text-center tracking-tighter leading-tight transition-all duration-300 shadow-sm"
            animate={{
              color: hasColor ? '#1D8A77' : '#0F172A',
              backgroundColor: hasBg ? '#f0fdfa' : 'transparent',
              padding: hasRadius ? 'clamp(12px, 1.5vw, 32px) clamp(24px, 3vw, 64px)' : '0px',
              borderRadius: hasRadius ? 'clamp(12px, 1.5vw, 24px)' : '0px',
              boxShadow: hasBg ? '0 20px 50px -12px rgba(29, 138, 119, 0.15)' : 'none',
              border: hasBg ? '1px solid rgba(29, 138, 119, 0.1)' : '1px solid transparent'
            }}
          >
            {headline}
            <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="inline-block w-[0.5vw] h-[3vh] bg-[#1D8A77] ml-[1vw] align-middle" />
          </motion.h1>
          <div className="mt-[3vh] w-full max-w-[30vw] h-[0.4vh] bg-slate-100 rounded-full overflow-hidden">
             <motion.div 
               className="h-full bg-[#1D8A77]"
               initial={{ width: 0 }}
               animate={{ width: '100%' }}
               transition={{ duration: 12, ease: "linear" }}
             />
          </div>
        </div>

        {/* PRO Dark Panel - Compact Fixed Size */}
        <motion.div 
          layoutId="inspector-panel"
          className="w-[clamp(280px,25vw,400px)] bg-[#1E293B] rounded-2xl shadow-xl border border-slate-700 overflow-hidden text-white flex flex-col h-[clamp(400px,55vh,600px)] relative z-20 shrink-0"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 25 }}
        >
          <div className="p-[1vw] bg-[#0F172A] border-b border-slate-800 flex justify-between items-center shadow-md">
            <div className="flex items-center gap-[0.5vw]">
              <div className="w-[clamp(24px,2vw,36px)] h-[clamp(24px,2vw,36px)] rounded-lg bg-[#1D8A77] flex items-center justify-center shadow-lg">
                <Target className="w-[clamp(16px,1.2vw,24px)] h-[clamp(16px,1.2vw,24px)] text-white" />
              </div>
              <span className="font-black text-[clamp(10px,1.2vw,16px)] tracking-tight">DevSniper <span className="text-[#1D8A77]">PRO</span></span>
            </div>
            <div className="w-[clamp(6px,0.6vw,10px)] h-[clamp(6px,0.6vw,10px)] rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse" />
          </div>

          <div className="flex bg-[#1E293B] border-b border-slate-800">
             {['General', 'Text', 'CSS'].map((tab) => (
               <div 
                key={tab}
                className={`flex-1 py-[0.8vh] text-center text-[clamp(8px,0.9vw,12px)] font-black uppercase tracking-widest transition-all cursor-default ${activeTab === tab.toLowerCase() ? 'text-white border-b-2 border-[#1D8A77] bg-[#0F172A]/40' : 'text-slate-500'}`}
               >
                 <div className="flex flex-col items-center gap-[0.3vh]">
                   {tab === 'Text' && <Type className="w-[clamp(10px,1vw,14px)] h-[clamp(10px,1vw,14px)]" />}
                   {tab === 'CSS' && <Code2 className="w-[clamp(10px,1vw,14px)] h-[clamp(10px,1vw,14px)]" />}
                   {tab}
                 </div>
               </div>
             ))}
          </div>

          <div className="p-[1.2vw] space-y-[1vh] flex-1 flex flex-col bg-[#0F172A]/30">
            <div className="flex-1 bg-[#0F172A] rounded-xl p-[1vw] font-mono text-[clamp(9px,1vw,14px)] leading-relaxed border border-slate-800 shadow-inner relative overflow-hidden">
               <div className="absolute top-0 left-0 w-[0.3vw] h-full bg-[#1D8A77]/20" />
               {activeTab === 'text' ? (
                 <div className="text-white font-medium break-words">{headline}</div>
               ) : (
                 <div className="space-y-[0.3vh]">
                   <div className="text-slate-500">selector {'{'}</div>
                   <div className="pl-[1vw] text-emerald-400 whitespace-pre-wrap min-h-[clamp(60px,10vh,120px)]">
                     {cssCode}
                     <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="inline-block w-[0.4vw] h-[1.5vh] bg-[#1D8A77] ml-[0.3vw] align-middle" />
                   </div>
                   <div className="text-slate-500">{'}'}</div>
                 </div>
               )}
            </div>

            <div className="flex justify-end items-center gap-[1vw] pointer-events-none">
               <AnimatePresence>
                 {showSuccess && (
                   <motion.div 
                    className="flex items-center gap-[0.5vw] text-emerald-400 font-black text-[clamp(8px,0.9vw,12px)] px-[0.8vw] py-[0.4vh] bg-emerald-500/10 rounded-full border border-emerald-500/20 pointer-events-none"
                    initial={{ scale: 0.8, opacity: 0, x: 10 }}
                    animate={{ scale: 1, opacity: 1, x: 0 }}
                   >
                     <CheckCircle2 className="w-[clamp(12px,1.2vw,18px)] h-[clamp(12px,1.2vw,18px)]" />
                     Saved
                   </motion.div>
                 )}
               </AnimatePresence>
               <motion.div 
                className={`px-[1.2vw] py-[0.6vh] rounded-xl font-black text-[clamp(10px,1vw,14px)] flex items-center gap-[0.5vw] shadow-lg transition-all pointer-events-none ${showSuccess ? 'bg-emerald-500' : 'bg-[#1D8A77]'}`}
               >
                 <Save className="w-[clamp(14px,1.2vw,20px)] h-[clamp(14px,1.2vw,20px)]" />
                 Save Changes
               </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
