import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Scene1Pain() {
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);

  const domLines = [
    { indent: 0, tag: 'div', class: 'elementor-section-wrap' },
    { indent: 2, tag: 'section', class: 'element-top-section' },
    { indent: 4, tag: 'div', class: 'elementor-container' },
    { indent: 6, tag: 'div', class: 'elementor-column' },
    { indent: 8, tag: 'div', class: 'elementor-widget-wrap' },
    { indent: 10, tag: 'div', class: 'elementor-widget-heading' },
    { indent: 12, tag: 'div', class: 'elementor-widget-container' },
    { indent: 14, tag: 'h2', class: 'elementor-heading-title' },
  ];

  return (
    <motion.div
      className="absolute inset-0 bg-[#F8FAFC] flex flex-col items-center pt-8 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="mb-6 text-center z-50 px-4"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h2 className="text-2xl font-black text-slate-900 tracking-tight max-w-xl mx-auto leading-tight">
          Still wasting hours digging through the DOM?
        </h2>
      </motion.div>

      <div className="w-[85%] max-w-2xl bg-[#1E293B] rounded-xl shadow-xl overflow-hidden border border-slate-700 aspect-video relative">
        <div className="h-6 bg-[#0F172A] flex items-center px-3 gap-1.5 border-b border-slate-800">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
          <div className="ml-2 text-[8px] font-mono text-slate-500 uppercase tracking-widest">Chrome DevTools</div>
        </div>
        
        <div className="p-4 font-mono text-[9px] leading-loose relative h-full">
          {domLines.map((line, i) => (
            <motion.div 
              key={i}
              className={`whitespace-nowrap transition-colors duration-150 px-2 rounded ${hoveredLine === i ? 'bg-[#1D8A77]/20 text-white' : 'text-slate-400'}`}
              style={{ paddingLeft: `${line.indent * 8 + 8}px` }}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
            >
              <span className="opacity-50">&lt;</span>
              <span className="text-teal-400 font-bold">{line.tag}</span>
              <span className="opacity-50"> class=</span>
              <span className="text-amber-200">"{line.class}"</span>
              <span className="opacity-50">&gt;</span>
            </motion.div>
          ))}
          <div className="mt-4 pt-4 border-t border-slate-800/50 px-2 opacity-40">
            <div className="text-slate-500 italic text-[8px] mb-1">// CSS struggle...</div>
            <div className="text-blue-400">.elementor-element-wrap {'{'}</div>
            <div className="pl-3 text-emerald-400">display: flex;</div>
            <div className="text-blue-400">{'}'}</div>
          </div>
        </div>

        <motion.div
          className="absolute z-50 pointer-events-none"
          animate={{ 
            x: [40, 300, 100, 400, 80, 200], 
            y: [30, 100, 60, 140, 50, 80] 
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          onUpdate={(latest: any) => {
            const y = latest.y;
            const lineIndex = Math.floor((y - 15) / 15);
            if (lineIndex >= 0 && lineIndex < domLines.length) {
              setHoveredLine(lineIndex);
            } else {
              setHoveredLine(null);
            }
          }}
        >
          <MousePointer2 className="w-6 h-6 text-white fill-white drop-shadow-lg" />
        </motion.div>
      </div>
    </motion.div>
  );
}
