import { motion, AnimatePresence } from 'framer-motion';
import { Target } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Scene3Inspector() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 2000), // Move to button
      setTimeout(() => setStep(2), 5000), // Move to title
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 bg-[#F1F5F9] flex flex-col items-center justify-center overflow-hidden p-[4vw]"
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="w-[90%] max-w-responsive bg-white rounded-[2rem] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.2)] border border-slate-200 overflow-hidden relative flex flex-col h-[70vh]">
        <div className="h-[3vh] bg-slate-50 border-b border-slate-200 flex items-center px-[1.5vw] gap-[0.5vw]">
          <div className="flex gap-[0.5vw]">
            <div className="w-[0.8vw] h-[0.8vw] rounded-full bg-[#FF5F56] shadow-sm" />
            <div className="w-[0.8vw] h-[0.8vw] rounded-full bg-[#FFBD2E] shadow-sm" />
            <div className="w-[0.8vw] h-[0.8vw] rounded-full bg-[#27C93F] shadow-sm" />
          </div>
          <div className="mx-auto bg-slate-200 h-[1.5vh] w-[15vw] rounded-lg shadow-inner" />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center gap-[5vh] bg-white relative p-[3vw]">
          <div className="max-w-[80vw] space-y-[2vh]">
            <motion.h1 
              className={`text-heading-xl font-black text-slate-900 tracking-tighter transition-all duration-500 rounded-2xl ${step === 2 ? 'ring-4 ring-[#1D8A77] bg-[#1D8A77]/5 p-4' : ''}`}
            >
              Ultimate Workflow
            </motion.h1>
            <p className="text-body-lg text-slate-500 font-medium max-w-[60vw] mx-auto leading-relaxed">
              Experience the future of development with DevSniper PRO. Direct frontend editing without complexity.
            </p>
          </div>

          <div className="flex gap-[2vw] pointer-events-none">
            <motion.div 
              className={`px-[3vw] py-[1.2vh] bg-[#1D8A77] text-white rounded-2xl font-black text-[1.5vw] shadow-2xl transition-all duration-500 ${step === 1 ? 'ring-4 ring-[#1D8A77] ring-offset-4' : ''}`}
            >
              Get Started
            </motion.div>
            <div className="px-[3vw] py-[1.2vh] bg-slate-50 text-slate-900 rounded-2xl font-black text-[1.5vw] border border-slate-200">
              Live Demo
            </div>
          </div>

          {/* Target Cursor with Spring Physics */}
          <motion.div 
            className="absolute z-[100] pointer-events-none"
            animate={{
              x: step === 0 ? '45vw' : step === 1 ? '-10vw' : '0vw',
              y: step === 0 ? '30vh' : step === 1 ? '15vh' : '-10vh'
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 80 }}
          >
            <Target className="w-16 h-16 text-[#1D8A77] drop-shadow-[0_0_20px_rgba(29,138,119,0.5)]" strokeWidth={3} />
            
            <AnimatePresence>
              {step > 0 && (
                <motion.div 
                  className="absolute top-14 left-8 bg-[#1E293B] p-5 rounded-2xl border border-slate-700 shadow-2xl text-white w-72 backdrop-blur-md"
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  key={step}
                >
                  <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Inspector</span>
                    <span className="text-[10px] bg-[#1D8A77] px-2 py-0.5 rounded font-bold">PRO</span>
                  </div>
                  <div className="space-y-2 font-mono text-[11px]">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">TAG</span>
                      <span className="text-teal-400 font-bold">{step === 1 ? 'div' : 'h1'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">CLASSES</span>
                      <span className="text-blue-400">{step === 1 ? '.btn-primary' : '.hero-title'}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute top-[3vh] text-center px-[2vw]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-heading-lg font-black text-slate-900 tracking-tight">
          Bring the Inspector into your <span className="text-[#1D8A77]">frontend.</span>
        </h2>
      </motion.div>
    </motion.div>
  );
}
