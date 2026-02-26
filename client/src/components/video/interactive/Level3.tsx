import { motion, AnimatePresence } from 'framer-motion';
import { Target } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Level3({ onNext }: { onNext: () => void }) {
  const [targetAttached, setTargetAttached] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    if (targetAttached) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [targetAttached]);

  return (
    <motion.div
      className={`absolute inset-0 bg-[#F1F5F9] flex flex-col items-center justify-center overflow-hidden p-[4vw] ${targetAttached ? 'cursor-none' : ''}`}
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="absolute top-[6vh] text-center px-[2vw] z-50 pointer-events-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-heading-md font-black text-slate-900 tracking-tight">
          {!targetAttached ? (
            <>
              Click the <span className="text-[#1D8A77]">Target icon</span> to activate the Inspector.
            </>
          ) : (
            <>
              Now <span className="text-[#1D8A77]">click the massive text</span> on the left.
            </>
          )}
        </h2>
      </motion.div>

      <div className="w-[70%] max-w-[55vw] bg-white rounded-[1.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border border-slate-200 overflow-hidden relative flex flex-col h-[60vh]">
        <div className="h-[2.5vh] bg-slate-50 border-b border-slate-200 flex items-center px-[1.2vw] gap-[0.4vw]">
          <div className="flex gap-[0.4vw]">
            <div className="w-[0.6vw] h-[0.6vw] rounded-full bg-[#FF5F56]" />
            <div className="w-[0.6vw] h-[0.6vw] rounded-full bg-[#FFBD2E]" />
            <div className="w-[0.6vw] h-[0.6vw] rounded-full bg-[#27C93F]" />
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-[2vw] relative">
          {/* Left Text */}
          <div 
            className={`flex-1 p-[2vw] rounded-xl transition-all ${targetAttached ? 'hover:bg-[#1D8A77]/10 hover:ring-2 hover:ring-[#1D8A77] cursor-pointer' : ''}`}
            onClick={() => targetAttached && onNext()}
          >
            <h1 className="text-[clamp(2rem,4vw,5rem)] font-black text-slate-900 tracking-tighter leading-tight pointer-events-none">
              Ultimate Workflow
            </h1>
            <p className="text-[clamp(0.8rem,1.2vw,1.4rem)] text-slate-500 font-medium mt-4 pointer-events-none">
              Experience the future of development with DevSniper PRO.
            </p>
          </div>

          {/* Right Icon */}
          {!targetAttached && (
            <div className="absolute right-[5vw] top-1/2 -translate-y-1/2">
              <motion.button
                onClick={() => setTargetAttached(true)}
                className="w-20 h-20 bg-white rounded-2xl shadow-2xl flex items-center justify-center border-2 border-[#1D8A77]/30 hover:border-[#1D8A77] transition-all cursor-pointer group"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Target className="w-10 h-10 text-[#1D8A77] group-hover:scale-110 transition-transform" />
              </motion.button>
            </div>
          )}
        </div>
      </div>

      {/* Floating Target Icon */}
      {targetAttached && (
        <motion.div 
          className="fixed z-[100] pointer-events-none"
          style={{ x: mousePos.x - 24, y: mousePos.y - 24 }}
        >
          <Target className="w-12 h-12 text-[#1D8A77] drop-shadow-[0_0_15px_rgba(29,138,119,0.5)]" />
        </motion.div>
      )}
    </motion.div>
  );
}
