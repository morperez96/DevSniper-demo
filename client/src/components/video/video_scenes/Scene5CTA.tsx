import { motion } from 'framer-motion';
import { Clock, Users, Rocket, RefreshCw, Target, Download, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Scene5CTA() {
  const [showLogo, setShowLogo] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowLogo(true), 2500),
      setTimeout(() => setShowButtons(true), 4000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const features = [
    { icon: Clock, title: "Save hours", desc: "of debugging", color: "text-amber-400", bg: "bg-amber-400/10" },
    { icon: Users, title: "Perfect for", desc: "Agency workflows", color: "text-blue-400", bg: "bg-blue-400/10" },
    { icon: Rocket, title: "Zero Bloat", desc: "No frontend tracking", color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { icon: RefreshCw, title: "Smart Cache", desc: "Auto-clearing", color: "text-purple-400", bg: "bg-purple-400/10" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 300, damping: 24 }
    }
  };

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A192F] overflow-hidden p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1D8A77]/10 via-[#0A192F] to-[#0A192F]" />

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 z-20 items-center h-full">
        
        {/* Left Side: Value Props Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-[#112240] p-6 rounded-2xl border border-slate-700/50 hover:border-slate-500 transition-colors group"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h4 className="text-white font-bold text-lg">{feature.title}</h4>
              <p className="text-slate-400 text-sm mt-1">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Side: Final CTA */}
        <div className="flex flex-col items-center justify-center text-center relative h-full">
          
          {/* Main Logo Reveal */}
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -45 }}
            animate={{ 
              scale: showLogo ? 1 : 0, 
              opacity: showLogo ? 1 : 0,
              rotate: showLogo ? 0 : -45
            }}
            transition={{ type: 'spring', damping: 15, stiffness: 200 }}
            className="w-32 h-32 rounded-3xl bg-gradient-to-br from-[#1D8A77] to-teal-900 flex items-center justify-center shadow-[0_0_50px_rgba(29,138,119,0.4)] mb-8 relative z-30"
          >
            <Target className="w-16 h-16 text-white" strokeWidth={2.5} />
            
            {/* Ping effect behind logo */}
            <motion.div 
              className="absolute inset-0 rounded-3xl bg-[#1D8A77] z-[-1]"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: showLogo ? 0 : 20, 
              opacity: showLogo ? 1 : 0 
            }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="z-20"
          >
            <h1 className="text-5xl md:text-6xl font-display font-black text-white mb-4 tracking-tight">
              Stop searching.
              <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D8A77] to-emerald-400">
                Start snipping.
              </span>
            </h1>
            <p className="text-xl text-slate-400 font-medium mb-12">
              The ultimate Elementor workflow tool.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full justify-center z-20"
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: showButtons ? 0 : 20, 
              opacity: showButtons ? 1 : 0 
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <div className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-xl font-bold text-lg shadow-xl">
              <Download className="w-5 h-5" />
              Download Free
              <span className="text-xs font-normal text-slate-500 ml-1">on WP.org</span>
            </div>
            
            <div className="flex items-center justify-center gap-2 px-8 py-4 bg-[#92003B] text-white rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(146,0,59,0.3)] border border-[#92003B]">
              <Star className="w-5 h-5 fill-current" />
              Upgrade to PRO
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}