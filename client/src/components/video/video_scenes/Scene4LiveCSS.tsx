import { motion, AnimatePresence } from 'framer-motion';
import { Target, Code2, CheckCircle2, Save } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Scene4LiveCSS() {
  const [cssCode, setCssCode] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const targetCss = `color: #1D8A77;
background: #f0fdfa;
padding: 15px 30px;
border-radius: 12px;`;

  useEffect(() => {
    const timers = [
      setTimeout(() => setIsTyping(true), 1500),
      setTimeout(() => setShowSuccess(true), 5500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (isTyping && !showSuccess) {
      let i = 0;
      const interval = setInterval(() => {
        setCssCode(targetCss.slice(0, i));
        i++;
        if (i > targetCss.length) clearInterval(interval);
      }, 40);
      return () => clearInterval(interval);
    }
  }, [isTyping, showSuccess]);

  const hasColor = cssCode.includes('color: #1D8A77');
  const hasBg = cssCode.includes('background: #f0fdfa');
  const hasPadding = cssCode.includes('padding: 15px 30px');
  const hasRadius = cssCode.includes('border-radius: 12px');

  return (
    <motion.div
      className="absolute inset-0 bg-white flex flex-col items-center justify-center overflow-hidden"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-6xl flex gap-12 items-center p-12">
        {/* Mock Website View */}
        <div className="flex-1 flex flex-col items-center justify-center min-h-[400px]">
           <motion.div 
            className="text-5xl font-black transition-all duration-300 ease-out"
            animate={{
              color: hasColor ? '#1D8A77' : '#0F172A',
              backgroundColor: hasBg ? '#f0fdfa' : 'transparent',
              padding: hasPadding ? '15px 30px' : '0px',
              borderRadius: hasRadius ? '12px' : '0px',
            }}
          >
            Join the Biggest Developer Event of 2024!
          </motion.div>
        </div>

        {/* PRO Panel */}
        <div className="w-full max-w-[450px] bg-[#1E293B] rounded-2xl shadow-2xl border border-slate-700 overflow-hidden text-white flex flex-col">
          <div className="p-5 border-b border-slate-700 flex justify-between items-center bg-[#0F172A]">
            <div className="flex items-center gap-3">
              <Target className="w-6 h-6 text-[#1D8A77]" />
              <span className="font-bold">DevSniper PRO</span>
            </div>
            <div className="flex gap-1.5 items-center">
               <div className="text-[10px] font-bold text-slate-500 mr-2">CSS EDITOR</div>
               <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            </div>
          </div>

          <div className="flex bg-[#1E293B]">
             <div className="flex-1 py-4 text-center text-xs font-bold border-b-2 border-transparent text-slate-500">General</div>
             <div className="flex-1 py-4 text-center text-xs font-bold border-b-2 border-transparent text-slate-500">Text</div>
             <div className="flex-1 py-4 text-center text-xs font-bold border-b-2 border-[#1D8A77] text-white bg-[#0F172A]/50">
               <Code2 className="w-4 h-4 mx-auto mb-1" />
               CSS
             </div>
          </div>

          <div className="p-8 space-y-6 flex-1 flex flex-col">
            <div className="flex-1 bg-[#0F172A] rounded-xl p-6 font-mono text-sm leading-relaxed border border-slate-800 shadow-inner min-h-[200px] relative">
               <div className="text-slate-500 mb-2">selector {'{'}</div>
               <div className="pl-4 text-emerald-400 whitespace-pre-wrap">
                 {cssCode}
                 <motion.span 
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6 }}
                    className="inline-block w-2 h-4 bg-[#1D8A77] ml-1 align-middle"
                 />
               </div>
               <div className="text-slate-500 mt-2">{'}'}</div>
            </div>

            <div className="flex justify-end items-center gap-4">
               <AnimatePresence>
                 {showSuccess && (
                   <motion.div 
                    className="flex items-center gap-2 text-emerald-400 font-bold"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                   >
                     <CheckCircle2 className="w-5 h-5" />
                     Saved to WordPress!
                   </motion.div>
                 )}
               </AnimatePresence>
               <motion.div 
                className={`px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg transition-colors ${showSuccess ? 'bg-emerald-500' : 'bg-[#1D8A77]'}`}
               >
                 <Save className="w-5 h-5" />
                 Save Changes
               </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-12 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">PRO: Write CSS and Save directly to WordPress.</h2>
      </motion.div>
    </motion.div>
  );
}
