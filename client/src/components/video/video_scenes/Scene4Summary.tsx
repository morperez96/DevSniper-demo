import { motion } from 'framer-motion';
import { Target, Search, Code2, RefreshCw, Zap, Shield, Rocket } from 'lucide-react';

export function Scene4Summary() {
  const features = [
    { icon: Target, title: 'Frontend Inspector', color: 'text-[#1D8A77]' },
    { icon: Search, title: 'Admin Search', color: 'text-blue-400' },
    { icon: Code2, title: 'Live CSS Editor', color: 'text-purple-400' },
    { icon: RefreshCw, title: 'Elementor Sync', color: 'text-emerald-400' },
  ];

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A192F] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1D8A77]/10 via-[#0A192F] to-[#0A192F]" />
      
      <div className="grid grid-cols-2 gap-8 max-w-4xl w-full px-8 z-10">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="bg-[#112240] p-8 rounded-2xl border border-slate-700/50 flex items-center gap-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 + i * 0.1, type: 'spring' }}
          >
            <div className="w-16 h-16 rounded-2xl bg-slate-900/50 flex items-center justify-center shadow-inner">
              <f.icon className={`w-8 h-8 ${f.color}`} />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">{f.title}</h3>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-24 text-center z-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <h2 className="text-6xl font-black text-white mb-8">
          Stop Searching. <span className="text-[#1D8A77]">Start Snipping.</span>
        </h2>
        
        <div className="flex gap-6 justify-center pointer-events-none">
          <div className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold text-xl shadow-2xl">
            Get DevSniper Free
          </div>
          <div className="px-10 py-5 bg-[#92003B] text-white rounded-2xl font-bold text-xl shadow-[0_0_30px_rgba(146,0,59,0.4)] border border-[#92003B]">
            Go PRO
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
