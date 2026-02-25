import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';

export function Scene1Nightmare() {
  const domLines = Array.from({ length: 40 }).map((_, i) => (
    <div key={i} className="font-mono text-[10px] whitespace-nowrap opacity-40">
      {`  <div class="wp-block-group container-inner-wrapper-v2_${i} flex-layout-row-nowrap-justify-center">`}
      <div className="pl-4 text-blue-300">{`    <section id="element-id-${i * 123}" class="section-v4 section-id-wrapper">`}</div>
      <div className="pl-8 text-emerald-400">{`      <h2 class="elementor-heading-title elementor-size-default">...</h2>`}</div>
    </div>
  ));

  return (
    <motion.div
      className="absolute inset-0 bg-[#0F172A] flex flex-col items-center justify-center overflow-hidden p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
    >
      <div className="absolute inset-0 overflow-hidden flex flex-col gap-1 select-none pointer-events-none text-slate-500">
        {domLines}
      </div>

      <motion.div 
        className="z-10 bg-black/60 backdrop-blur-md p-12 rounded-3xl border border-white/10 shadow-2xl text-center max-w-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 15 }}
      >
        <h1 className="text-5xl font-black text-white leading-tight tracking-tight">
          Still wasting hours<br/>hunting for elements?
        </h1>
      </motion.div>

      <motion.div
        className="absolute z-50"
        animate={{ 
          x: [0, 400, -300, 200, -100, 0], 
          y: [0, -200, 300, -100, 200, 0] 
        }}
        transition={{ duration: 2 }}
      >
        <MousePointer2 className="w-12 h-12 text-white fill-white drop-shadow-lg" />
      </motion.div>
    </motion.div>
  );
}
