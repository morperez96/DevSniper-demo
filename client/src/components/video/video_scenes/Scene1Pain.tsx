import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';

export function Scene1Pain() {
  const domLines = [
    { indent: 0, tag: 'div', class: 'elementor-section-wrap' },
    { indent: 2, tag: 'section', class: 'elementor-section elementor-top-section' },
    { indent: 4, tag: 'div', class: 'elementor-container elementor-column-gap-default' },
    { indent: 6, tag: 'div', class: 'elementor-column elementor-col-100' },
    { indent: 8, tag: 'div', class: 'elementor-widget-wrap elementor-element-populated' },
    { indent: 10, tag: 'div', class: 'elementor-widget elementor-widget-heading' },
    { indent: 12, tag: 'div', class: 'elementor-widget-container' },
    { indent: 14, tag: 'h2', class: 'elementor-heading-title' },
  ];

  return (
    <motion.div
      className="absolute inset-0 bg-[#F8FAFC] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-3xl bg-[#1E293B] rounded-2xl shadow-2xl overflow-hidden border border-slate-700 aspect-video relative">
        <div className="h-8 bg-[#0F172A] flex items-center px-4 gap-1.5 border-b border-slate-800">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
          <div className="ml-4 text-[10px] font-mono text-slate-500">Chrome DevTools - DOM Tree</div>
        </div>
        
        <div className="p-8 font-mono text-[11px] leading-relaxed">
          {domLines.map((line, i) => (
            <motion.div 
              key={i}
              className="whitespace-nowrap"
              style={{ paddingLeft: `${line.indent * 12}px` }}
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
          <div className="mt-8 pt-8 border-t border-slate-800">
            <div className="text-slate-500 italic">// CSS Styles</div>
            <div className="text-blue-400">.elementor-123 .elementor-element-abc {'{'}</div>
            <div className="pl-4 text-emerald-400">display: flex;</div>
            <div className="pl-4 text-emerald-400">margin-top: calc(var(--spacer-size) * -1);</div>
            <div className="text-blue-400">{'}'}</div>
          </div>
        </div>

        <motion.div
          className="absolute z-50 pointer-events-none"
          animate={{ 
            x: [100, 400, 200, 500, 150, 300], 
            y: [50, 150, 100, 200, 80, 120] 
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <MousePointer2 className="w-10 h-10 text-white fill-white drop-shadow-xl opacity-80" />
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-20 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <h2 className="text-5xl font-black text-slate-900 tracking-tight">
          Still wasting hours digging through the DOM?
        </h2>
      </motion.div>
    </motion.div>
  );
}
