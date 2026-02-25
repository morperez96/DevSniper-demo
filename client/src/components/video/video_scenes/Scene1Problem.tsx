import { motion } from 'framer-motion';
import { MousePointer2, Loader2, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Scene1Problem() {
  const [textStage, setTextStage] = useState(0);
  const [timeWasted, setTimeWasted] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setTextStage(1), 1500),
    ];
    
    const interval = setInterval(() => {
      setTimeWasted(prev => prev + 14);
    }, 100);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col md:flex-row items-center justify-center bg-[#0F172A] text-white overflow-hidden p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] opacity-80" />
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-[#92003B] rounded-full blur-[120px] opacity-10"
        animate={{ 
          x: [0, 50, 0], 
          y: [0, -50, 0],
          scale: [1, 1.1, 1] 
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Time wasted counter */}
      <motion.div 
        className="absolute top-8 right-8 flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full border border-red-500/30 backdrop-blur-sm z-50 font-mono text-lg"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
      >
        <Clock className="w-5 h-5" />
        Time Wasted: {timeWasted}s
      </motion.div>

      {/* Main Text */}
      <div className="absolute top-24 left-0 right-0 text-center z-40">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {textStage === 0 ? "Tired of endless context switching?" : "Inspecting... Finding the widget... Waiting for Elementor to load..."}
        </motion.h1>
      </div>

      {/* Left side: WP Frontend */}
      <motion.div 
        className="w-full md:w-1/2 h-[60%] md:h-full relative flex items-center justify-center p-4 md:p-12 z-20"
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-full h-full bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col border border-slate-700">
          <div className="h-8 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <div className="flex-1 ml-4 bg-white h-5 rounded text-[10px] text-slate-400 flex items-center px-2 shadow-sm">mysite.com/page</div>
          </div>
          <div className="flex-1 p-8 overflow-hidden relative bg-slate-50">
            <div className="space-y-6">
              <div className="w-2/3 h-12 bg-slate-200 rounded animate-pulse" />
              <div className="w-full h-4 bg-slate-200 rounded animate-pulse" />
              <div className="w-full h-4 bg-slate-200 rounded animate-pulse delay-75" />
              <div className="w-4/5 h-4 bg-slate-200 rounded animate-pulse delay-150" />
              
              <div className="mt-12 grid grid-cols-2 gap-4">
                <div className="h-32 bg-slate-200 rounded animate-pulse" />
                <div className="h-32 bg-slate-200 rounded animate-pulse delay-75" />
              </div>
            </div>
            
            <motion.div 
              className="absolute pointer-events-none drop-shadow-md"
              initial={{ x: 50, y: 100 }}
              animate={{ 
                x: [50, 250, 100, 300, 150], 
                y: [100, 50, 200, 100, 250] 
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <MousePointer2 className="w-8 h-8 text-slate-800 fill-white" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Center Divider */}
      <motion.div 
        className="absolute left-1/2 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-slate-500 to-transparent hidden md:block z-30"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />

      {/* Right side: Elementor Loading */}
      <motion.div 
        className="w-full md:w-1/2 h-[40%] md:h-full relative flex items-center justify-center p-4 md:p-12 z-20"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-full h-full bg-[#1F2937] rounded-xl shadow-2xl overflow-hidden flex flex-col border border-slate-700">
          <div className="h-8 bg-slate-800 border-b border-slate-700 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <div className="flex-1 ml-4 bg-slate-700 h-5 rounded text-[10px] text-slate-400 flex items-center px-2">Elementor Editor</div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center bg-[#111827]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-16 h-16 border-4 border-[#92003B]/30 border-t-[#92003B] rounded-full" />
            </motion.div>
            <motion.p 
              className="mt-6 text-slate-400 font-mono text-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Loading Elementor...
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}