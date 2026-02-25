import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';
import { useState } from 'react';

export function Scene1CodePain() {
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);

  const domLines = [
    { indent: 0, tag: 'div', class: 'elementor-section-wrap' },
    { indent: 2, tag: 'section', class: 'element-top-section' },
    { indent: 4, tag: 'div', class: 'elementor-container' },
    { indent: 6, tag: 'div', class: 'elementor-column' },
    { indent: 8, tag: 'div', class: 'elementor-widget-wrap' },
    { indent: 10, tag: 'div', class: 'elementor-widget' },
    { indent: 12, tag: 'div', class: 'elementor-widget-container' },
    { indent: 14, tag: 'h2', class: 'elementor-heading-title' },
  ];

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden p-[5vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
    >
      <div className="w-full bg-[#1E293B] rounded-2xl shadow-2xl overflow-hidden border border-slate-700 aspect-video relative" style={{ maxWidth: 'min(90%, 50vw)' }}>
        <div className="h-8 bg-[#0F172A] flex items-center px-4 gap-2 border-b border-slate-800">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        
        <div className="p-8 font-mono text-xs leading-relaxed relative h-full">
          {domLines.map((line, i) => (
            <motion.div 
              key={i}
              className={`whitespace-nowrap px-2 rounded transition-colors duration-200 ${hoveredLine === i ? 'bg-slate-700/50' : ''}`}
              style={{ paddingLeft: `${line.indent * 12 + 8}px` }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <span className="text-slate-500">&lt;</span>
              <span className="text-teal-400">{line.tag}</span>
              <span className="text-slate-400"> class=</span>
              <span className="text-amber-200">"{line.class}"</span>
              <span className="text-slate-500">&gt;</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="absolute z-50 pointer-events-none"
          animate={{ 
            x: [100, 400, 200, 500, 150, 300], 
            y: [50, 150, 100, 200, 80, 120] 
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          onUpdate={(latest: any) => {
            const y = latest.y;
            const lineIndex = Math.floor((y - 30) / 18);
            if (lineIndex >= 0 && lineIndex < domLines.length) setHoveredLine(lineIndex);
            else setHoveredLine(null);
          }}
        >
          <MousePointer2 className="w-8 h-8 text-white fill-white drop-shadow-xl" />
        </motion.div>
      </div>

      <motion.div 
        className="absolute w-full text-center px-[4vw]"
        style={{ bottom: '8vh' }}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h2 className="text-heading-lg text-slate-900 tracking-tight leading-tight">
          Still wasting hours digging through the DOM?
        </h2>
      </motion.div>
    </motion.div>
  );
}
