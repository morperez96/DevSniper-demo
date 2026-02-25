import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';
import { useState } from 'react';

export function Scene1Pain() {
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);

  const domLines = [
    { indent: 0, tag: 'div', class: 'elementor-section-wrap' },
    { indent: 2, tag: 'section', class: 'element-top-section' },
    { indent: 4, tag: 'div', class: 'elementor-container elementor-column-gap-default' },
    { indent: 6, tag: 'div', class: 'elementor-column elementor-col-100' },
    { indent: 8, tag: 'div', class: 'elementor-widget-wrap elementor-element-populated' },
    { indent: 10, tag: 'div', class: 'elementor-widget elementor-widget-heading' },
    { indent: 12, tag: 'div', class: 'elementor-widget-container' },
    { indent: 14, tag: 'h2', class: 'elementor-heading-title' },
  ];

  return (
    <motion.div
      className="absolute inset-0 bg-[#F8FAFC] flex flex-col items-center justify-center overflow-hidden p-[2vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="mb-[3vh] text-center z-50 px-[2vw]"
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h2 className="text-heading-lg font-black text-slate-900 tracking-tight max-w-[80vw] mx-auto leading-tight">
          Still hunting for selectors in the DOM?<br/>
          <span className="text-[#1D8A77]">Edit your site instantly.</span>
        </h2>
      </motion.div>

      <div className="w-[60%] max-w-[50vw] bg-[#1E293B] rounded-xl shadow-xl overflow-hidden border border-slate-700 aspect-video relative">
        <div className="h-[2vh] bg-[#0F172A] flex items-center px-[0.8vw] gap-[0.3vw] border-b border-slate-800">
          <div className="w-[0.4vw] h-[0.4vw] rounded-full bg-red-500/50" />
          <div className="w-[0.4vw] h-[0.4vw] rounded-full bg-amber-500/50" />
          <div className="w-[0.4vw] h-[0.4vw] rounded-full bg-emerald-500/50" />
          <div className="ml-[0.5vw] text-[clamp(6px,0.6vw,10px)] font-mono text-slate-500">Chrome DevTools</div>
        </div>
        
        <div className="p-[1vw] font-mono text-[clamp(6px,0.7vw,10px)] leading-tight relative h-full">
          {domLines.map((line, i) => (
            <motion.div 
              key={i}
              className={`whitespace-nowrap transition-colors duration-200 px-[0.5vw] rounded ${hoveredLine === i ? 'bg-slate-700/50' : ''}`}
              style={{ paddingLeft: `calc(${line.indent * 1.2}vw + 0.5vw)` }}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
            >
              <span className="text-slate-500">&lt;</span>
              <span className="text-teal-400">{line.tag}</span>
              <span className="text-slate-400"> class=</span>
              <span className="text-amber-200">"{line.class}"</span>
              <span className="text-slate-500">&gt;</span>
            </motion.div>
          ))}
          <div className="mt-4 pt-4 border-t border-slate-800 px-2 opacity-60">
            <div className="text-slate-500 italic text-[9px] mb-1">// CSS Styles</div>
            <div className="text-blue-400">.elementor-123 .elementor-element {'{'}</div>
            <div className="pl-3 text-emerald-400">display: flex;</div>
            <div className="text-blue-400">{'}'}</div>
          </div>
        </div>

        <motion.div
          className="absolute z-50 pointer-events-none"
          animate={{ 
            x: [20, 60, 30, 80, 40, 100, 50, 120], 
            y: [25, 45, 65, 85, 105, 125, 145, 165] 
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "linear"
          }}
          onUpdate={(latest: any) => {
            const y = latest.y;
            // Adjust detection range to match visual lines better
            const lineIndex = Math.floor((y - 20) / 20);
            if (lineIndex >= 0 && lineIndex < domLines.length) {
              setHoveredLine(lineIndex);
            } else {
              setHoveredLine(null);
            }
          }}
        >
          <MousePointer2 className="w-6 h-6 text-white fill-[#1D8A77] drop-shadow-[0_0_10px_rgba(29,138,119,0.5)] opacity-90" />
        </motion.div>
      </div>
    </motion.div>
  );
}
