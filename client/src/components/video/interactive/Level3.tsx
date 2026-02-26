import { motion, AnimatePresence } from 'framer-motion';
import { Target } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Level3({ onNext }: { onNext: () => void }) {
  const [targetAttached, setTargetAttached] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

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
              Now <span className="text-[#1D8A77]">hover over the elements</span> and click to select.
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
          <div className="flex-1 p-[2vw] relative">
            <h1 
              className={`text-[clamp(2rem,4vw,5rem)] font-black text-slate-900 tracking-tighter leading-tight transition-all rounded-xl w-fit ${targetAttached ? 'hover:bg-[#1D8A77]/10 hover:ring-2 hover:ring-[#1D8A77] cursor-pointer relative z-10' : ''}`}
              onClick={() => targetAttached && onNext()}
              onMouseEnter={() => setHoveredElement('h1')}
              onMouseLeave={() => setHoveredElement(null)}
            >
              Ultimate Workflow
              
              {/* Tooltip that appears when hovering with target */}
              <AnimatePresence>
                {targetAttached && hoveredElement === 'h1' && (
                  <motion.div 
                    className="absolute -top-16 left-1/2 -translate-x-1/2 bg-[#1E293B] text-white text-sm py-2 px-4 rounded-lg shadow-xl whitespace-nowrap font-mono border border-slate-700 pointer-events-none"
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.9 }}
                  >
                    <span className="text-teal-400 font-bold mr-2">&lt;h1&gt;</span>
                    <span className="text-blue-400">.hero-title</span>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1E293B]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </h1>
            <p 
              className={`text-[clamp(0.8rem,1.2vw,1.4rem)] text-slate-500 font-medium mt-4 transition-all rounded-lg w-fit ${targetAttached ? 'hover:bg-[#1D8A77]/10 hover:ring-2 hover:ring-[#1D8A77] cursor-pointer relative z-10 p-2 -ml-2' : ''}`}
              onMouseEnter={() => setHoveredElement('p')}
              onMouseLeave={() => setHoveredElement(null)}
            >
              Experience the future of development with DevSniper PRO.
              
              {/* Tooltip for paragraph */}
              <AnimatePresence>
                {targetAttached && hoveredElement === 'p' && (
                  <motion.div 
                    className="absolute -top-12 left-10 bg-[#1E293B] text-white text-sm py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap font-mono border border-slate-700 pointer-events-none"
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.9 }}
                  >
                    <span className="text-teal-400 font-bold mr-2">&lt;p&gt;</span>
                    <span className="text-slate-300">text-slate-500</span>
                    <div className="absolute -bottom-2 left-4 border-4 border-transparent border-t-[#1E293B]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </p>
            
            {/* Added button to hover over */}
            <div 
              className={`mt-8 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold w-fit transition-all ${targetAttached ? 'hover:bg-slate-800 hover:ring-2 hover:ring-[#1D8A77] hover:ring-offset-2 cursor-pointer relative z-10' : ''}`}
              onMouseEnter={() => setHoveredElement('button')}
              onMouseLeave={() => setHoveredElement(null)}
            >
              Get Started Now
              
              {/* Tooltip for button */}
              <AnimatePresence>
                {targetAttached && hoveredElement === 'button' && (
                  <motion.div 
                    className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#1E293B] text-white text-sm py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap font-mono border border-slate-700 pointer-events-none"
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.9 }}
                  >
                    <span className="text-teal-400 font-bold mr-2">&lt;button&gt;</span>
                    <span className="text-blue-400">.btn-primary</span>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1E293B]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Icon */}
          {!targetAttached && (
            <div className="absolute right-[5vw] top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#1D8A77] text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg relative animate-bounce"
              >
                Click me!
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#1D8A77]" />
              </motion.div>
              <motion.button
                onClick={() => setTargetAttached(true)}
                className="w-24 h-24 bg-white rounded-2xl shadow-[0_0_30px_rgba(29,138,119,0.3)] flex items-center justify-center border-4 border-[#1D8A77] hover:bg-[#1D8A77]/5 transition-all cursor-pointer group relative overflow-hidden"
                animate={{ 
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 30px rgba(29,138,119,0.3)",
                    "0 0 50px rgba(29,138,119,0.6)",
                    "0 0 30px rgba(29,138,119,0.3)"
                  ]
                }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <div className="absolute inset-0 bg-[#1D8A77]/10 animate-ping rounded-xl" />
                <Target className="w-12 h-12 text-[#1D8A77] group-hover:scale-110 transition-transform relative z-10" strokeWidth={2.5} />
              </motion.button>
            </div>
          )}
        </div>
      </div>

      {/* Floating Target Icon */}
      {targetAttached && (
        <motion.div 
          className="fixed z-[100] pointer-events-none transition-all duration-75 ease-out"
          style={{ 
            left: mousePos.x, 
            top: mousePos.y,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <Target className="w-12 h-12 text-[#1D8A77] drop-shadow-[0_0_15px_rgba(29,138,119,0.5)]" />
        </motion.div>
      )}
    </motion.div>
  );
}
