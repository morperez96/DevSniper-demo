import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function Scene1Pain() {
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
    { indent: 3, tag: 'div', class: 'footer-widgets' },
    { indent: 1, tag: 'script', class: 'wp-embed' },
  ];

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
          Still hunting for selectors in the DOM?<br/>
          <span className="text-[#1D8A77]">Edit your site instantly.</span>
        </h2>
      </motion.div>

      <div className="w-[55%] max-w-[45vw] bg-[#1E293B] rounded-2xl shadow-2xl overflow-hidden border border-slate-700 aspect-video relative" ref={containerRef}>
        <div className="h-[2.5vh] bg-[#0F172A] flex items-center px-[1vw] gap-[0.4vw] border-b border-slate-800">
          <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-red-500/40" />
          <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-amber-500/40" />
          <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-emerald-500/40" />
          <div className="ml-[0.5vw] text-[clamp(7px,0.7vw,11px)] font-mono text-slate-400 font-bold">Elements</div>
          <div className="ml-[1vw] text-[clamp(7px,0.7vw,11px)] font-mono text-slate-600">Console</div>
          <div className="ml-[1vw] text-[clamp(7px,0.7vw,11px)] font-mono text-slate-600">Sources</div>
        </div>
        
        <div className="p-[1.5vw] font-mono text-[clamp(8px,0.9vw,13px)] leading-relaxed relative h-full">
          {domLines.map((line, i) => (
            <motion.div 
              key={i}
              className={`whitespace-nowrap px-[0.6vw] rounded transition-all duration-150 ${hoveredLine === i ? 'bg-blue-500/30 ring-1 ring-blue-400/30 translate-x-1' : 'opacity-80'}`}
              style={{ paddingLeft: `calc(${line.indent * 1.8}vw + 0.5vw)` }}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.04 }}
            >
              <span className="text-slate-500">&lt;</span>
              <span className="text-pink-400">{line.tag}</span>
              {line.class && (
                <span className="inline-flex">
                  <span className="text-slate-400">&nbsp;class=</span>
                  <span className="text-amber-200">"{line.class}"</span>
                </span>
              )}
              <span className="text-slate-500">&gt;</span>
            </motion.div>
          ))}
          
          <div className="mt-8 pt-6 border-t border-slate-800/50 px-2 opacity-90">
            <div className="text-[clamp(7px,0.7vw,10px)] text-slate-500 font-bold mb-2 uppercase tracking-widest">Styles</div>
            <div className="flex gap-4">
              <div className="text-blue-400">.elementor-heading {'{'}</div>
              <div className="text-emerald-400">color: #1D8A77;</div>
              <div className="text-blue-400">{'}'}</div>
            </div>
          </div>
        </div>

        {/* Improved Mouse Cursor Logic */}
        <motion.div
          className="absolute z-50 pointer-events-none"
          initial={{ x: 50, y: 40 }}
          animate={{ 
            x: [50, 220, 100, 260, 120], 
            y: [60, 140, 220, 180, 80] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "linear"
          }}
          onUpdate={(latest: any) => {
            // Precise line detection logic
            const containerHeight = containerRef.current?.offsetHeight || 1;
            const contentPadding = containerHeight * 0.1; // roughly 2.5vh header + padding
            const lineSpacing = 24; // matches leading-relaxed roughly
            
            const relativeY = latest.y - contentPadding;
            const lineIndex = Math.floor(relativeY / lineSpacing);
            
            if (lineIndex >= 0 && lineIndex < domLines.length) {
              setHoveredLine(lineIndex);
            } else {
              setHoveredLine(null);
            }
          }}
        >
          <MousePointer2 className="w-5 h-5 text-white fill-[#1D8A77] drop-shadow-[0_0_8px_rgba(29,138,119,0.5)]" />
        </motion.div>
      </div>
    </motion.div>
  );
}
