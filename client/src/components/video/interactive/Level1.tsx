import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export function Level1({ onNext }: { onNext: () => void }) {
  const [hoveredLines, setHoveredLines] = useState<Set<number>>(new Set());

  const domLines = [
    { indent: 0, tag: 'html', class: 'no-js' },
    { indent: 1, tag: 'body', class: 'home elementor-page' },
    { indent: 2, tag: 'header', class: 'site-header sticky' },
    { indent: 3, tag: 'div', class: 'container flex' },
    { indent: 4, tag: 'nav', class: 'navbar' },
    { indent: 2, tag: 'main', class: 'content-area' },
    { indent: 3, tag: 'section', class: 'elementor-section' },
    { indent: 4, tag: 'div', class: 'elementor-container' },
    { indent: 5, tag: 'h2', class: 'elementor-heading' },
    { indent: 5, tag: 'div', class: 'elementor-widget-text' },
    { indent: 2, tag: 'footer', class: 'site-footer' },
  ];

  const handleMouseEnter = (index: number) => {
    setHoveredLines(prev => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  };

  const hasEnoughHovers = hoveredLines.size >= 3;

  return (
    <motion.div
      className="absolute inset-0 bg-[#F8FAFC] flex flex-col items-center justify-center overflow-hidden p-[2vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div 
        className="mb-[4vh] text-center z-50 px-[2vw]"
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-heading-lg font-black text-slate-900 tracking-tight max-w-[80vw] mx-auto leading-tight">
          <motion.span 
            animate={{ opacity: [0.5, 1, 0.5] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-[#1D8A77]"
          >
            Hover over the code
          </motion.span> to find the element.
        </h2>
      </motion.div>

      <div className="w-[55%] max-w-[45vw] bg-[#1E293B] rounded-2xl shadow-2xl overflow-hidden border border-slate-700 aspect-video relative">
        <div className="h-[2.5vh] bg-[#0F172A] flex items-center px-[1vw] gap-[0.4vw] border-b border-slate-800">
          <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-red-500/40" />
          <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-amber-500/40" />
          <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-emerald-500/40" />
          <div className="ml-[0.5vw] text-[clamp(7px,0.7vw,11px)] font-mono text-slate-400 font-bold">Elements</div>
        </div>
        
        <div className="p-[1.5vw] font-mono text-[clamp(8px,0.9vw,13px)] leading-relaxed relative h-full">
          {domLines.map((line, i) => (
            <motion.div 
              key={i}
              onMouseEnter={() => handleMouseEnter(i)}
              className="cursor-pointer whitespace-nowrap px-[0.6vw] rounded transition-all duration-150 hover:bg-blue-500/30 hover:ring-1 hover:ring-blue-400/30 hover:translate-x-1"
              style={{ paddingLeft: `calc(${line.indent * 1.8}vw + 0.5vw)` }}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.04 }}
            >
              <span className="text-slate-500">&lt;</span>
              <span className="text-pink-400">{line.tag}</span>
              {line.class && (
                <>
                  <span className="text-slate-400"> class=</span>
                  <span className="text-amber-200">"{line.class}"</span>
                </>
              )}
              <span className="text-slate-500">&gt;</span>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {hasEnoughHovers && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-[10vh] flex flex-col items-center gap-4"
          >
            <p className="text-slate-500 font-medium">Tired of this?</p>
            <button 
              onClick={onNext}
              className="px-8 py-4 bg-[#1D8A77] hover:bg-[#156e5e] text-white rounded-xl font-bold shadow-xl shadow-[#1D8A77]/30 transition-all active:scale-95 animate-pulse"
            >
              Click to use the Command Palette
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
