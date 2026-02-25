import { motion, AnimatePresence } from 'framer-motion';
import { Target, ExternalLink, Star, Copy, MousePointer2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Scene3Inspection() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [cssCode, setCssCode] = useState('');

  const targetCss = `color: #e100ff;
text-decoration: underline;`;

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowTooltip(true), 1500),
      setTimeout(() => {
        setShowTooltip(false);
        setShowPanel(true);
      }, 3500),
      setTimeout(() => setIsEditing(true), 5000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (isEditing) {
      let i = 0;
      const interval = setInterval(() => {
        setCssCode(targetCss.slice(0, i));
        i++;
        if (i > targetCss.length) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isEditing]);

  const hasColor = cssCode.includes('#e100ff');
  const hasUnderline = cssCode.includes('underline');

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Website Content */}
      <div className="w-full max-w-4xl p-12 relative">
        <motion.div 
          className={`relative p-4 rounded transition-colors duration-300 ${showTooltip ? 'ring-4 ring-[#1D8A77] ring-opacity-50' : ''}`}
        >
          {showTooltip && (
             <div className="absolute -top-6 left-0 bg-[#0F172A] text-[10px] text-white px-2 py-0.5 font-mono">
               h2.elementor-heading-title.elementor-size-default 528x128
             </div>
          )}
          <motion.h2 
            className="text-7xl font-bold text-slate-800 tracking-tight text-center"
            animate={{
              color: hasColor ? '#e100ff' : '#1e293b',
              textDecoration: hasUnderline ? 'underline' : 'none',
            }}
          >
            הזמינו את החוויה שתשדרג את האירוע שלכם!
          </motion.h2>
        </motion.div>
      </div>

      {/* Cursor */}
      {!showPanel && (
        <motion.div 
          className="absolute z-[100] pointer-events-none"
          initial={{ x: '80vw', y: '80vh' }}
          animate={{ x: '50vw', y: '45vh' }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Target className="w-10 h-10 text-[#1D8A77] drop-shadow-lg" strokeWidth={3} />
        </motion.div>
      )}

      {/* PRO Inspector Tooltip (Initial) */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            className="absolute z-50 top-[55%] left-[60%] bg-[#111827] rounded-lg shadow-2xl border border-slate-700 w-80 overflow-hidden text-white font-sans"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.1, opacity: 0 }}
          >
            <div className="bg-[#1F2937] px-4 py-2 flex justify-between items-center border-b border-slate-700">
              <span className="font-bold text-sm">DevSniper Inspector</span>
              <div className="w-2 h-2 rounded-full bg-red-500" />
            </div>
            <div className="p-4 space-y-3">
              <div className="flex gap-2 pointer-events-none">
                <div className="flex-1 bg-[#38bdf8] text-[#0F172A] py-2 rounded font-bold text-center text-xs">Open editor</div>
                <div className="flex-1 bg-[#1D8A77] text-white py-2 rounded font-bold text-center text-xs">Favorite</div>
              </div>
              <div className="space-y-1 font-mono text-[10px]">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-500">TAG</span>
                  <span>h2</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-500">CLASSES</span>
                  <span className="truncate w-32">.elementor-heading-title...</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full PRO Panel */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            className="absolute right-8 top-1/2 -translate-y-1/2 w-[400px] bg-[#111827] rounded-xl shadow-2xl border border-slate-700 overflow-hidden text-white flex flex-col h-[80vh]"
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', damping: 25 }}
          >
             <div className="p-4 bg-[#1F2937] border-b border-slate-700 flex justify-between items-center">
               <div className="flex items-center gap-2">
                 <Target className="w-5 h-5 text-[#1D8A77]" />
                 <span className="font-bold">DevSniper Inspector</span>
                 <div className="bg-[#92003B] px-1.5 py-0.5 rounded text-[8px] font-bold">PRO</div>
               </div>
               <div className="w-4 h-4 text-slate-500">✕</div>
             </div>

             <div className="flex gap-2 p-4 pointer-events-none">
                <div className="flex-1 bg-[#38bdf8] text-[#0F172A] py-2.5 rounded-lg font-bold text-center text-sm shadow-lg">Open editor</div>
                <div className="flex-1 bg-[#1D8A77] text-white py-2.5 rounded-lg font-bold text-center text-sm shadow-lg">Favorite</div>
             </div>

             <div className="flex border-b border-slate-800">
               <div className={`flex-1 py-3 text-center text-xs font-bold border-b-2 transition-colors ${!isEditing ? 'border-[#1D8A77] text-white' : 'border-transparent text-slate-500'}`}>INFO</div>
               <div className={`flex-1 py-3 text-center text-xs font-bold border-b-2 transition-colors ${isEditing ? 'border-[#1D8A77] text-white' : 'border-transparent text-slate-500'}`}>EDIT CSS</div>
             </div>

             <div className="flex-1 p-4 font-mono text-[11px] overflow-hidden">
               {!isEditing ? (
                 <div className="space-y-3">
                   {[
                     { label: 'TAG', value: 'h2' },
                     { label: 'CLASSES', value: '.elementor-heading-title.ele...', copy: true },
                     { label: 'SIZE', value: 'W 528px ✕ H 128px | 3572px - 874px' },
                     { label: 'SELECTOR', value: 'h2.elementor-heading-title.el...', copy: true },
                     { label: 'PATH', value: 'div.nth-child(1) > div:nth-chil...', copy: true },
                   ].map((row, i) => (
                     <div key={i} className="flex flex-col gap-1 border-b border-slate-800 pb-2">
                       <span className="text-slate-500 uppercase">{row.label}</span>
                       <div className="flex justify-between items-center">
                         <span className="text-slate-200">{row.value}</span>
                         {row.copy && <Copy className="w-3 h-3 text-slate-600" />}
                       </div>
                     </div>
                   ))}
                 </div>
               ) : (
                 <div className="h-full bg-[#0F172A] rounded p-4 border border-slate-800 relative">
                   <div className="text-[#38bdf8]">selector {'{'}</div>
                   <div className="pl-4 text-white">
                     {cssCode.split('\n').map((line, i) => (
                       <div key={i}>{line}</div>
                     ))}
                     <motion.span 
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6 }}
                        className="inline-block w-2 h-4 bg-[#1D8A77] ml-1"
                     />
                   </div>
                   <div className="text-[#38bdf8]">{'}'}</div>
                   
                   <motion.div 
                    className="absolute bottom-4 left-4 right-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: cssCode.length === targetCss.length ? 1 : 0 }}
                   >
                     <div className="bg-[#1D8A77] text-white py-3 rounded-lg font-bold text-center shadow-xl cursor-pointer">
                       Auto-Sync to Elementor
                     </div>
                   </motion.div>
                 </div>
               )}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
