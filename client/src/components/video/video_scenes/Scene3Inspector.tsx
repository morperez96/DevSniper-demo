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
      <div className="w-[70%] max-w-[55vw] bg-white rounded-[1.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border border-slate-200 overflow-hidden relative flex flex-col h-[60vh]">
        <div className="h-[2.5vh] bg-slate-50 border-b border-slate-200 flex items-center px-[1.2vw] gap-[0.4vw]">
          <div className="flex gap-[0.4vw]">
            <div className="w-[0.6vw] h-[0.6vw] rounded-full bg-[#FF5F56] shadow-sm" />
            <div className="w-[0.6vw] h-[0.6vw] rounded-full bg-[#FFBD2E] shadow-sm" />
            <div className="w-[0.6vw] h-[0.6vw] rounded-full bg-[#27C93F] shadow-sm" />
          </div>
          <div className="mx-auto bg-slate-200 h-[1.2vh] w-[12vw] rounded-md shadow-inner" />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center gap-[4vh] bg-white relative p-[2vw]">
          <div className="max-w-[70vw] space-y-[1.5vh]">
            <motion.h1 
              className={`text-[clamp(1.5rem,3.5vw,4.5rem)] font-black text-slate-900 tracking-tighter transition-all duration-500 rounded-xl ${step === 2 ? 'ring-2 ring-[#1D8A77] bg-[#1D8A77]/5 p-3' : ''}`}
            >
              Ultimate Workflow
            </motion.h1>
            <p className="text-[clamp(0.8rem,1.2vw,1.4rem)] text-slate-500 font-medium max-w-[50vw] mx-auto leading-relaxed">
              Experience the future of development with DevSniper PRO. Direct frontend editing without complexity.
            </p>
          </div>

          <div className="flex gap-[1.5vw] pointer-events-none">
            <motion.div 
              className={`px-[2.5vw] py-[1vh] bg-[#1D8A77] text-white rounded-xl font-black text-[1.2vw] shadow-xl transition-all duration-500 ${step === 1 ? 'ring-2 ring-[#1D8A77] ring-offset-2' : ''}`}
            >
              Get Started
            </motion.div>
            <div className="px-[2.5vw] py-[1vh] bg-slate-50 text-slate-900 rounded-xl font-black text-[1.2vw] border border-slate-200">
              Live Demo
            </div>
          </div>

          {/* Target Cursor with Spring Physics */}
          <motion.div 
            className="absolute z-[100] pointer-events-none"
            animate={{
              x: step === 0 ? '35vw' : step === 1 ? '-8vw' : '0vw',
              y: step === 0 ? '25vh' : step === 1 ? '12vh' : '-8vh'
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 80 }}
          >
            <Target className="w-[clamp(32px,5vw,56px)] h-[clamp(32px,5vw,56px)] text-[#1D8A77] drop-shadow-[0_0_15px_rgba(29,138,119,0.4)]" strokeWidth={3} />
            
            <AnimatePresence>
              {step > 0 && (
                <motion.div 
                  className="absolute top-[clamp(30px,4vh,60px)] left-[clamp(15px,1.5vw,30px)] bg-[#1E293B] p-[1vw] rounded-xl border border-slate-700 shadow-xl text-white w-[clamp(180px,15vw,260px)] backdrop-blur-md"
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  key={step}
                >
                  <div className="flex justify-between items-center mb-[0.8vh] pb-[0.4vh] border-b border-slate-800">
                    <span className="text-[clamp(7px,0.8vw,10px)] font-black uppercase tracking-widest text-slate-500">Inspector</span>
                    <span className="text-[clamp(7px,0.8vw,10px)] bg-[#1D8A77] px-[0.4vw] py-[0.1vh] rounded font-bold">PRO</span>
                  </div>
                  <div className="space-y-[0.4vh] font-mono text-[clamp(8px,1vw,12px)]">
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
