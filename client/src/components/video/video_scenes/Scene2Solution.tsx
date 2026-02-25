import { motion, AnimatePresence } from 'framer-motion';
import { Target, Search, ExternalLink, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Scene2Solution() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowTooltip(true), 2000),
      setTimeout(() => setShowSuccess(true), 4000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-[#0F172A] overflow-hidden p-8"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1D8A77]/20 via-[#0F172A] to-[#0F172A] opacity-50" />

      {/* Main Text */}
      <motion.div 
        className="absolute top-16 left-0 right-0 text-center z-50"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
          Meet DevSniper
        </h1>
        <p className="text-xl md:text-2xl text-[#1D8A77] font-medium">
          Bring the Inspector into your website.
        </p>
      </motion.div>

      {/* Browser Window Mockup */}
      <motion.div 
        className="w-full max-w-5xl h-[70vh] bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-700 relative z-20 mt-16"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="h-8 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        
        <div className="p-12 relative h-full bg-slate-50">
          <div className="max-w-2xl mx-auto">
            {/* Element being inspected */}
            <motion.div 
              className={`p-4 rounded-lg transition-all duration-300 ${showTooltip ? 'ring-2 ring-[#1D8A77] bg-[#1D8A77]/5' : ''}`}
            >
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Mickey Mouse Event</h2>
              <p className="text-slate-600 leading-relaxed">
                Join us for the most spectacular event of the year. Experience the magic like never before with exclusive access and VIP treatment.
              </p>
            </motion.div>
          </div>

          {/* Sniper Cursor & Tooltip */}
          <motion.div 
            className="absolute z-50"
            initial={{ x: '80vw', y: '50vh' }}
            animate={{ 
              x: showTooltip ? '25vw' : '40vw', 
              y: showTooltip ? '25vh' : '40vh' 
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className="relative">
              {/* Sniper Cursor Icon */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="text-[#1D8A77]"
              >
                <Target className="w-8 h-8 drop-shadow-md" strokeWidth={2.5} />
              </motion.div>

              {/* Inspector Tooltip */}
              <AnimatePresence>
                {showTooltip && !showSuccess && (
                  <motion.div 
                    className="absolute top-10 left-6 bg-[#0F172A] rounded-lg shadow-xl border border-slate-700 w-72 overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 400 }}
                  >
                    <div className="bg-[#1D8A77] text-white px-3 py-2 text-xs font-bold flex justify-between items-center">
                      <span>DevSniper Inspector</span>
                      <Search className="w-3 h-3" />
                    </div>
                    <div className="p-3 text-sm font-mono space-y-2 text-slate-300">
                      <div className="flex justify-between border-b border-slate-800 pb-1">
                        <span className="text-slate-500">Tag</span>
                        <span className="text-[#1D8A77]">h2</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800 pb-1">
                        <span className="text-slate-500">Classes</span>
                        <span className="text-blue-400">.elementor-heading-title</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800 pb-1">
                        <span className="text-slate-500">Size</span>
                        <span className="text-purple-400">40px</span>
                      </div>
                      <div className="pt-2">
                        <div className="w-full bg-[#92003B] text-white rounded py-2 flex items-center justify-center gap-2 font-sans font-medium">
                          <ExternalLink className="w-4 h-4" /> Open Editor
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Success Pop-up */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div 
                    className="absolute top-10 left-6 bg-[#0F172A] rounded-lg shadow-xl border border-slate-700 p-6 w-72 flex flex-col items-center text-center"
                    initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-[#92003B]/20 rounded-full flex items-center justify-center mb-4 text-[#92003B]"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                    >
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </motion.div>
                    <h3 className="text-white font-bold text-lg mb-2">Widget Found!</h3>
                    <p className="text-slate-400 text-sm">Finds the exact widget in seconds.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}