import { motion, AnimatePresence } from 'framer-motion';
import { Target, Type, Code2, Save, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Scene3Magic() {
  const [step, setStep] = useState(0);
  const [headline, setHeadline] = useState('Build Faster Workflow');
  const [cssCode, setCssCode] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1500), // Hover button
      setTimeout(() => setStep(2), 3000), // Hover headline & click
      setTimeout(() => setStep(3), 4500), // Type text
      setTimeout(() => setStep(4), 6500), // Type CSS
      setTimeout(() => setShowSuccess(true), 7500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (step === 3) {
      const text = 'Ultimate Dev Workflow';
      let i = 0;
      const interval = setInterval(() => {
        setHeadline(text.slice(0, i));
        i++;
        if (i > text.length) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }
    if (step === 4) {
      const code = `color: #1D8A77;
border-radius: 8px;`;
      let i = 0;
      const interval = setInterval(() => {
        setCssCode(code.slice(0, i));
        i++;
        if (i > code.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }
  }, [step]);

  const hasColor = cssCode.includes('#1D8A77');
  const hasRadius = cssCode.includes('8px');

  return (
    <motion.div
      className="absolute inset-0 bg-[#F1F5F9] flex flex-col items-center justify-center overflow-hidden p-8"
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* macOS Browser Frame */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border border-slate-200 overflow-hidden relative flex flex-col h-[70vh]">
        <div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>
          <div className="mx-auto bg-slate-200 h-5 w-64 rounded-md" />
        </div>

        <div className="flex-1 p-20 flex flex-col items-center justify-center text-center gap-10 bg-white relative">
          <motion.h1 
            className="text-7xl font-black text-slate-900 tracking-tight transition-all duration-300"
            animate={{
              color: hasColor ? '#1D8A77' : '#0F172A',
              borderRadius: hasRadius ? '8px' : '0px',
              backgroundColor: hasRadius ? '#f0fdfa' : 'transparent',
              padding: hasRadius ? '10px 20px' : '0px'
            }}
          >
            {headline}
          </motion.h1>

          <div className="flex gap-6">
            <motion.div 
              className={`px-10 py-4 bg-[#1D8A77] text-white rounded-xl font-bold text-xl shadow-lg transition-all ${step === 1 ? 'ring-4 ring-emerald-400' : ''}`}
            >
              Get Started
            </motion.div>
            <div className="px-10 py-4 bg-slate-100 text-slate-900 rounded-xl font-bold text-xl border border-slate-200">
              Learn More
            </div>
          </div>

          {/* Target Cursor */}
          <motion.div 
            className="absolute z-[100] pointer-events-none"
            animate={{
              x: step === 0 ? '40vw' : step === 1 ? '-10vw' : '0vw',
              y: step === 0 ? '30vh' : step === 1 ? '10vh' : '-10vh'
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Target className="w-14 h-14 text-[#1D8A77] drop-shadow-xl" strokeWidth={3} />
          </motion.div>

          {/* Tooltip & Panel */}
          <AnimatePresence>
            {step >= 1 && step < 3 && (
               <motion.div 
                className="absolute top-[60%] left-[55%] bg-[#1E293B] p-4 rounded-xl border border-slate-700 shadow-2xl text-white text-xs font-mono w-64"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
               >
                 <div className="flex justify-between text-slate-500 mb-2 border-b border-slate-800 pb-1">
                   <span>TAG</span>
                   <span className="text-emerald-400">{step === 1 ? 'button' : 'h1'}</span>
                 </div>
                 <div className="flex justify-between text-slate-500">
                   <span>CLASS</span>
                   <span className="text-blue-400">.hero-{step === 1 ? 'cta' : 'title'}</span>
                 </div>
               </motion.div>
            )}
            
            {step >= 3 && (
              <motion.div 
                className="absolute right-6 top-1/2 -translate-y-1/2 w-96 bg-[#1E293B] rounded-2xl shadow-2xl border border-slate-700 overflow-hidden text-white flex flex-col"
                initial={{ x: 400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
              >
                <div className="bg-[#0F172A] p-4 border-b border-slate-800 flex justify-between items-center">
                  <span className="font-black tracking-tight text-[#1D8A77]">DevSniper PRO</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10B981]" />
                </div>
                <div className="flex bg-[#1E293B] border-b border-slate-800">
                  <div className={`flex-1 py-3 text-center text-[10px] font-black uppercase tracking-widest ${step === 3 ? 'text-white border-b-2 border-[#1D8A77]' : 'text-slate-500'}`}>Text</div>
                  <div className={`flex-1 py-3 text-center text-[10px] font-black uppercase tracking-widest ${step === 4 ? 'text-white border-b-2 border-[#1D8A77]' : 'text-slate-500'}`}>CSS</div>
                </div>
                <div className="p-6 h-48 font-mono text-sm overflow-hidden bg-[#0F172A]">
                  {step === 3 ? (
                    <div className="text-emerald-400">{headline}</div>
                  ) : (
                    <div className="text-blue-400 whitespace-pre-wrap">{cssCode}</div>
                  )}
                </div>
                <div className="p-4 bg-[#1E293B] flex justify-between items-center">
                   {showSuccess && (
                     <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                       <CheckCircle2 className="w-4 h-4" /> Saved!
                     </motion.div>
                   )}
                   <div className="ml-auto bg-[#1D8A77] px-6 py-2 rounded-xl font-bold flex items-center gap-2 text-sm shadow-lg">
                     <Save className="w-4 h-4" /> Save
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute top-12 left-0 right-0 text-center px-8">
        <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Hover. Target. Live Edit. Save.</h2>
      </div>
    </motion.div>
  );
}
