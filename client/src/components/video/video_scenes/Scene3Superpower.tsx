import { motion } from 'framer-motion';
import { Type, Code2, Paintbrush, Play, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Scene3Superpower() {
  const [cssCode, setCssCode] = useState('');
  
  const targetCss = `color: #ef4444;
border-radius: 10px;
padding: 10px;
background: #fee2e2;`;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= targetCss.length) {
        setCssCode(targetCss.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  // Determine if styles should be applied based on typing progress
  const hasColor = cssCode.includes('#ef4444');
  const hasRadius = cssCode.includes('border-radius: 10px');
  const hasPadding = cssCode.includes('padding: 10px');
  const hasBg = cssCode.includes('background: #fee2e2');

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-[#0F172A] overflow-hidden p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: "circOut" }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#92003B]/20 via-[#0F172A] to-[#0F172A]" />

      {/* Floating Title */}
      <motion.div 
        className="absolute top-12 left-12 z-50 max-w-md"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="inline-block bg-[#1D8A77]/20 border border-[#1D8A77]/50 text-[#1D8A77] px-4 py-1 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
          PRO Feature
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
          Live Edit text & CSS directly on the frontend.
        </h1>
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 z-20 h-[60vh] mt-16">
        
        {/* Left Side: Live Preview */}
        <motion.div 
          className="bg-white rounded-xl shadow-2xl p-12 flex flex-col justify-center border border-slate-200 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="absolute top-4 left-4 flex items-center gap-2 text-slate-400 font-mono text-xs">
            <Play className="w-3 h-3" /> Live Preview
          </div>
          
          <div className="space-y-6 max-w-md">
            <motion.h2 
              className="text-5xl font-bold font-display transition-all duration-300 ease-out"
              animate={{
                color: hasColor ? '#ef4444' : '#1e293b',
                borderRadius: hasRadius ? '10px' : '0px',
                padding: hasPadding ? '10px' : '0px',
                backgroundColor: hasBg ? '#fee2e2' : 'transparent',
              }}
            >
              Mickey Mouse Event
            </motion.h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Watch as your CSS changes are applied instantly to the frontend. No need to switch tabs or wait for Elementor to reload.
            </p>
          </div>
        </motion.div>

        {/* Right Side: DevSniper PRO Panel */}
        <motion.div 
          className="bg-[#111827] rounded-xl shadow-2xl border border-slate-700 flex flex-col relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {/* Panel Header */}
          <div className="bg-[#1F2937] border-b border-slate-700 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1D8A77] to-teal-600 flex items-center justify-center shadow-lg">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold font-display leading-tight">DevSniper <span className="text-[#1D8A77]">PRO</span></h3>
                <p className="text-slate-400 text-xs font-mono">Editing: .elementor-heading-title</p>
              </div>
            </div>
          </div>

          {/* Panel Tabs */}
          <div className="flex border-b border-slate-800 bg-[#111827]">
            <div className="flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 text-slate-500">
              <Type className="w-4 h-4" /> Text
            </div>
            <div className="flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 text-white border-b-2 border-[#1D8A77] bg-slate-800/50">
              <Code2 className="w-4 h-4" /> Custom CSS
            </div>
            <div className="flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 text-slate-500">
              <Paintbrush className="w-4 h-4" /> Style
            </div>
          </div>

          {/* Panel Body */}
          <div className="flex-1 p-6 relative bg-[#0F172A] font-mono text-sm">
            {/* Line numbers */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-[#111827] border-r border-slate-800 py-6 flex flex-col items-center text-slate-600">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
            
            {/* Code Input Area */}
            <div className="pl-8 relative h-full">
              <div className="text-slate-400 mb-2">selector {'{'}</div>
              <motion.div className="pl-4 text-[#e2e8f0] whitespace-pre-wrap">
                {cssCode.split('\n').map((line, i) => (
                  <div key={i}>
                    <span className="text-[#38bdf8]">{line.split(':')[0]}</span>
                    {line.includes(':') && <span className="text-slate-400">:</span>}
                    <span className="text-[#a78bfa]">{line.split(':')[1]}</span>
                  </div>
                ))}
                <motion.span 
                  className="inline-block w-2 h-4 bg-[#1D8A77] ml-1 align-middle pointer-events-none"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </motion.div>
              <div className="text-slate-400 mt-2">{'}'}</div>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}