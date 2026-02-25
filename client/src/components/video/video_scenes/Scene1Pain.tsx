import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';
import { useState } from 'react';

export function Scene1Pain() {
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);

  const domLines = [
    { indent: 0, tag: 'div', class: 'elementor-section-wrap' },
    { indent: 1, tag: 'section', class: 'element-top-section' },
    { indent: 2, tag: 'div', class: 'elementor-container' },
    { indent: 3, tag: 'div', class: 'elementor-row' },
    { indent: 4, tag: 'div', class: 'elementor-column' },
    { indent: 5, tag: 'div', class: 'elementor-widget-wrap' },
    { indent: 6, tag: 'div', class: 'elementor-element' },
    { indent: 7, tag: 'div', class: 'elementor-widget-container' },
    { indent: 8, tag: 'div', class: 'elementor-main-content' },
    { indent: 9, tag: 'div', class: 'elementor-inner-section' },
    { indent: 10, tag: 'div', class: 'elementor-column-wrap' },
    { indent: 11, tag: 'h2', class: 'elementor-heading-title' },
    { indent: 12, tag: 'div', class: 'elementor-text-editor' },
    { indent: 13, tag: 'p', class: 'description' },
    { indent: 11, tag: 'div', class: 'elementor-spacer' },
    { indent: 12, tag: 'div', class: 'elementor-spacer-inner' },
    { indent: 10, tag: 'div', class: 'elementor-image' },
    { indent: 11, tag: 'figure', class: 'wp-caption' },
    { indent: 12, tag: 'img', class: 'attachment-large' },
    { indent: 9, tag: 'div', class: 'elementor-button-wrapper' },
    { indent: 10, tag: 'a', class: 'elementor-button' },
    { indent: 11, tag: 'span', class: 'elementor-button-content-wrapper' },
    { indent: 12, tag: 'span', class: 'elementor-button-text' },
    { indent: 8, tag: 'div', class: 'elementor-divider' },
    { indent: 9, tag: 'span', class: 'elementor-divider-separator' },
    { indent: 7, tag: 'div', class: 'elementor-social-icons-wrapper' },
    { indent: 8, tag: 'div', class: 'elementor-social-icon' },
    { indent: 9, tag: 'i', class: 'fab fa-facebook' },
    { indent: 10, tag: 'span', class: 'elementor-screen-only' },
    { indent: 6, tag: 'div', class: 'elementor-icon-list-items' },
    { indent: 7, tag: 'li', class: 'elementor-icon-list-item' },
    { indent: 8, tag: 'span', class: 'elementor-icon-list-text' },
    { indent: 5, tag: 'div', class: 'elementor-posts-container' },
    { indent: 6, tag: 'article', class: 'elementor-post' },
    { indent: 7, tag: 'div', class: 'elementor-post__card' },
    { indent: 8, tag: 'div', class: 'elementor-post__thumbnail' },
    { indent: 9, tag: 'img', class: 'attachment-medium' },
    { indent: 8, tag: 'div', class: 'elementor-post__text' },
    { indent: 9, tag: 'h3', class: 'elementor-post__title' },
    { indent: 10, tag: 'a', class: 'elementor-post__link' },
    { indent: 9, tag: 'div', class: 'elementor-post__excerpt' },
    { indent: 10, tag: 'p', class: 'excerpt-content' },
    { indent: 4, tag: 'div', class: 'elementor-widget-wrap' },
    { indent: 5, tag: 'div', class: 'elementor-widget' },
    { indent: 6, tag: 'div', class: 'elementor-widget-container' },
    { indent: 7, tag: 'form', class: 'elementor-form' },
    { indent: 8, tag: 'div', class: 'elementor-form-fields-wrapper' },
    { indent: 9, tag: 'div', class: 'elementor-field-group' },
    { indent: 10, tag: 'label', class: 'elementor-field-label' },
    { indent: 11, tag: 'input', class: 'elementor-field-text' },
    { indent: 9, tag: 'div', class: 'elementor-field-group' },
    { indent: 10, tag: 'button', class: 'elementor-button' },
    { indent: 3, tag: 'div', class: 'elementor-column elementor-col-50' },
    { indent: 4, tag: 'div', class: 'elementor-widget-wrap' },
    { indent: 5, tag: 'div', class: 'elementor-widget-image' },
    { indent: 6, tag: 'div', class: 'elementor-widget-container' },
    { indent: 7, tag: 'img', class: 'wp-post-image' },
    { indent: 5, tag: 'div', class: 'elementor-widget-heading' },
    { indent: 6, tag: 'h2', class: 'elementor-heading-title' },
    { indent: 4, tag: 'div', class: 'elementor-widget-wrap' },
    { indent: 5, tag: 'div', class: 'elementor-widget-text' },
    { indent: 6, tag: 'div', class: 'elementor-widget-container' },
    { indent: 7, tag: 'p', class: 'footer-text' },
    { indent: 3, tag: 'div', class: 'elementor-column elementor-col-33' },
    { indent: 4, tag: 'div', class: 'elementor-widget-icon' },
    { indent: 5, tag: 'div', class: 'elementor-widget-container' },
    { indent: 6, tag: 'i', class: 'fa fa-envelope' },
    { indent: 7, tag: 'span', class: 'elementor-icon-text' },
    { indent: 0, tag: 'footer', class: 'site-footer' },
    { indent: 1, tag: 'div', class: 'footer-widgets' },
    { indent: 2, tag: 'section', class: 'widget-area' },
    { indent: 3, tag: 'aside', class: 'widget' },
    { indent: 4, tag: 'h3', class: 'widget-title' },
    { indent: 5, tag: 'div', class: 'elementor-widget-container' },
    { indent: 6, tag: 'ul', class: 'elementor-icon-list-items' },
    { indent: 7, tag: 'li', class: 'elementor-icon-list-item' },
    { indent: 8, tag: 'a', class: 'elementor-icon-list-link' },
    { indent: 9, tag: 'span', class: 'elementor-icon-list-text' },
    { indent: 5, tag: 'div', class: 'elementor-widget-divider' },
    { indent: 6, tag: 'div', class: 'elementor-divider' },
    { indent: 7, tag: 'span', class: 'elementor-divider-separator' },
    { indent: 3, tag: 'div', class: 'elementor-column elementor-col-25' },
    { indent: 4, tag: 'div', class: 'elementor-widget-wrap' },
    { indent: 5, tag: 'div', class: 'elementor-widget-image-box' },
    { indent: 6, tag: 'div', class: 'elementor-image-box-wrapper' },
    { indent: 7, tag: 'figure', class: 'elementor-image-box-img' },
    { indent: 8, tag: 'img', class: 'attachment-thumbnail' },
    { indent: 7, tag: 'div', class: 'elementor-image-box-content' },
    { indent: 8, tag: 'h3', class: 'elementor-image-box-title' },
    { indent: 9, tag: 'p', class: 'elementor-image-box-description' },
    { indent: 0, tag: 'section', class: 'elementor-section-footer' },
    { indent: 1, tag: 'div', class: 'elementor-container' },
    { indent: 2, tag: 'div', class: 'elementor-row' },
    { indent: 3, tag: 'div', class: 'elementor-column' },
    { indent: 4, tag: 'div', class: 'elementor-widget-wrap' },
    { indent: 5, tag: 'div', class: 'elementor-widget-text-editor' },
    { indent: 6, tag: 'div', class: 'elementor-widget-container' },
    { indent: 7, tag: 'p', class: 'copyright-notice' },
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
        
        <div className="p-[1vw] font-mono text-[clamp(5px,0.55vw,8px)] leading-tight relative h-full">
          {domLines.map((line, i) => (
            <motion.div 
              key={i}
              className={`whitespace-nowrap transition-colors duration-200 px-[0.5vw] rounded ${hoveredLine === i ? 'bg-slate-700/50' : ''}`}
              style={{ paddingLeft: `calc(${line.indent * 1.2}vw + 0.5vw)` }}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.04 }}
            >
              <span className="text-slate-500">&lt;</span>
              <span className="text-teal-400">{line.tag}</span>
              <span className="text-slate-400"> class=</span>
              <span className="text-amber-200">"{line.class}"</span>
              <span className="text-slate-500">&gt;</span>
            </motion.div>
          ))}
          <div className="mt-4 pt-4 border-t border-slate-800 px-2 opacity-60">
            <div className="text-slate-500 italic text-[8px] mb-1">// CSS Styles</div>
            <div className="text-blue-400">.elementor-123 .elementor-element {'{'}</div>
            <div className="pl-3 text-emerald-400">display: flex;</div>
            <div className="text-blue-400">{'}'}</div>
          </div>
        </div>

        <motion.div
          className="absolute z-50 pointer-events-none"
          animate={{ 
            x: [20, 150, 40, 200, 60, 250, 80, 280, 100, 300, 120, 320, 140, 340, 160, 360, 180, 380, 200, 400], 
            y: [10, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760] 
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear"
          }}
          onUpdate={(latest: any) => {
            const y = latest.y;
            // Precise detection for the dense DOM tree
            const lineIndex = Math.floor((y - 10) / 6.5);
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
