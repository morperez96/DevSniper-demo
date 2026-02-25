import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';
import { useState } from 'react';

export function Scene1Pain() {
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);

  const domLines = [
    { indent: 0, tag: 'html', class: 'no-js' },
    { indent: 1, tag: 'head', class: '' },
    { indent: 1, tag: 'body', class: 'home page-template-elementor_canvas' },
    { indent: 2, tag: 'header', class: 'site-header' },
    { indent: 3, tag: 'div', class: 'header-inner flex items-center' },
    { indent: 4, tag: 'a', class: 'logo' },
    { indent: 4, tag: 'nav', class: 'main-navigation' },
    { indent: 5, tag: 'ul', class: 'menu' },
    { indent: 6, tag: 'li', class: 'menu-item-55' },
    { indent: 2, tag: 'main', class: 'site-main' },
    { indent: 3, tag: 'section', class: 'elementor-section-123' },
    { indent: 4, tag: 'div', class: 'elementor-container' },
    { indent: 5, tag: 'div', class: 'elementor-column-50' },
    { indent: 6, tag: 'div', class: 'elementor-widget-heading' },
    { indent: 7, tag: 'h2', class: 'elementor-heading-title' },
    { indent: 6, tag: 'div', class: 'elementor-widget-text' },
    { indent: 7, tag: 'p', class: 'hero-desc' },
    { indent: 5, tag: 'div', class: 'elementor-column-50' },
    { indent: 6, tag: 'div', class: 'elementor-widget-image' },
    { indent: 7, tag: 'img', class: 'attachment-large' },
    { indent: 3, tag: 'section', class: 'elementor-section-456' },
    { indent: 4, tag: 'div', class: 'elementor-container flex-wrap' },
    { indent: 5, tag: 'div', class: 'elementor-widget-icon-box' },
    { indent: 2, tag: 'footer', class: 'site-footer' },
    { indent: 3, tag: 'div', class: 'footer-content' },
    { indent: 4, tag: 'div', class: 'copyright' },
    { indent: 4, tag: 'div', class: 'social-links' },
    { indent: 1, tag: 'script', class: 'jquery-core' },
    { indent: 1, tag: 'style', class: 'elementor-inline-css' },
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
        
        <div className="p-[1.5vw] font-mono text-[clamp(7px,0.8vw,11px)] leading-relaxed relative h-full">
          {domLines.map((line, i) => (
            <motion.div 
              key={i}
              className={`whitespace-nowrap transition-colors duration-200 px-[0.5vw] rounded ${hoveredLine === i ? 'bg-blue-500/20' : ''}`}
              style={{ paddingLeft: `calc(${line.indent * 1.5}vw + 0.5vw)` }}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
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
          <div className="mt-6 pt-6 border-t border-slate-800 px-2 opacity-80">
            <div className="text-blue-400 font-bold mb-1">Styles</div>
            <div className="text-blue-400">.site-header {'{'}</div>
            <div className="pl-4 text-emerald-400">position: fixed;</div>
            <div className="pl-4 text-emerald-400">z-index: 999;</div>
            <div className="text-blue-400">{'}'}</div>
          </div>
        </div>

        <motion.div
          className="absolute z-50 pointer-events-none"
          animate={{ 
            x: [40, 180, 60, 220, 80, 260, 100, 300], 
            y: [30, 80, 130, 180, 230, 280, 330, 380] 
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
          onUpdate={(latest: any) => {
            const y = latest.y;
            // Precise detection for the refined DOM tree
            const lineIndex = Math.floor((y - 30) / 14);
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
