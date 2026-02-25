import { motion, AnimatePresence } from 'framer-motion';
import { Database, Zap, RefreshCw, Layers } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Scene4Sync() {
  const [showSave, setShowSave] = useState(false);
  const [showSync, setShowSync] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowSave(true), 500),
      setTimeout(() => setShowSync(true), 1500),
      setTimeout(() => setShowDetails(true), 3000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-[#0F172A] overflow-hidden p-8"
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      animate={{ clipPath: 'inset(0 0% 0 0)' }}
      exit={{ opacity: 0, filter: 'blur(20px)' }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      {/* Header */}
      <motion.div 
        className="absolute top-16 text-center z-50"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
          The Magic? Auto-Sync to Elementor.
        </h2>
      </motion.div>

      <div className="flex items-center justify-center w-full max-w-4xl mt-12 relative z-20">
        
        {/* DevSniper Panel */}
        <motion.div 
          className="w-64 h-80 bg-[#111827] rounded-xl border border-slate-700 shadow-2xl flex flex-col items-center justify-center relative"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', damping: 20 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1D8A77] to-teal-700 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(29,138,119,0.3)]">
            <Layers className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-white font-bold text-xl mb-8">DevSniper</h3>
          
          <motion.button
            className={`px-8 py-3 rounded-lg font-bold transition-all shadow-lg text-white ${showSave ? 'bg-[#1D8A77] shadow-[0_0_20px_rgba(29,138,119,0.6)]' : 'bg-slate-700'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {showSave ? 'Saving...' : 'Save Changes'}
          </motion.button>
        </motion.div>

        {/* Sync Animation Area */}
        <div className="flex-1 h-32 mx-8 relative flex items-center justify-center">
          {/* Base Line */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-1 bg-slate-800 rounded-full" />
          </div>
          
          {/* Glowing Data Flow */}
          {showSync && (
            <motion.div 
              className="absolute h-1 rounded-full bg-gradient-to-r from-[#1D8A77] via-emerald-400 to-[#92003B] w-full"
              initial={{ scaleX: 0, transformOrigin: 'left' }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          )}

          {/* Moving Particles */}
          {showSync && (
            <>
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                  initial={{ left: '0%' }}
                  animate={{ left: '100%' }}
                  transition={{ 
                    duration: 1, 
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "linear" 
                  }}
                />
              ))}
            </>
          )}

          {/* Sync Icon */}
          <motion.div 
            className="absolute bg-[#0F172A] p-3 rounded-full border border-slate-700 z-10"
            animate={{ rotate: showSync ? 360 : 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <RefreshCw className={`w-8 h-8 ${showSync ? 'text-emerald-400' : 'text-slate-600'}`} />
          </motion.div>
        </div>

        {/* Elementor Database */}
        <motion.div 
          className="w-64 h-80 bg-[#111827] rounded-xl border border-slate-700 shadow-2xl flex flex-col items-center justify-center relative"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: 'spring', damping: 20 }}
        >
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${showSync ? 'bg-[#92003B] shadow-[0_0_30px_rgba(146,0,59,0.4)]' : 'bg-slate-800'}`}>
            <Database className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-white font-bold text-xl mb-2">Elementor DB</h3>
          <p className="text-slate-400 text-sm font-mono">_elementor_data</p>
          
          {showSync && (
            <motion.div 
              className="absolute -bottom-4 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Updated!
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Details List */}
      <div className="absolute bottom-16 w-full max-w-3xl flex justify-between px-8 z-30">
        <AnimatePresence>
          {showDetails && (
            <>
              <motion.div 
                className="flex items-center gap-3 bg-[#111827]/80 backdrop-blur border border-slate-700 px-4 py-3 rounded-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0, type: 'spring' }}
              >
                <Database className="w-5 h-5 text-[#1D8A77]" />
                <span className="text-slate-200 text-sm font-medium">Saves directly to widget</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3 bg-[#111827]/80 backdrop-blur border border-slate-700 px-4 py-3 rounded-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                <Zap className="w-5 h-5 text-amber-400" />
                <span className="text-slate-200 text-sm font-medium">No copy-pasting required</span>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3 bg-[#111827]/80 backdrop-blur border border-slate-700 px-4 py-3 rounded-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, type: 'spring' }}
              >
                <RefreshCw className="w-5 h-5 text-[#92003B]" />
                <span className="text-slate-200 text-sm font-medium">Instant cache clearing</span>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}