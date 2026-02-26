import { motion } from 'framer-motion';
import { Target, CheckCircle2, Rocket, Clock, Shield, RefreshCw } from 'lucide-react';

export function Scene5ValueCTA() {
  const values = [
    { title: "Zero Context Switching", icon: Rocket },
    { title: "Inspect Classes & Paths Instantly", icon: Target },
    { title: "Live Edit Text & CSS", icon: RefreshCw },
    { title: "Save Hours of Workflow", icon: Clock },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      className="absolute inset-0 bg-white flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
       <div className="absolute inset-0 bg-[radial-gradient(#f1f5f9_1px,transparent_1px)] [background-size:32px_32px] opacity-50" />
       
       <motion.div 
        className="z-10 w-full max-w-4xl"
        variants={container}
        initial="hidden"
        animate="show"
       >
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
           {values.map((v, i) => (
             <motion.div 
              key={i}
              variants={item}
              className="flex items-center gap-6 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm"
             >
               <div className="w-14 h-14 rounded-2xl bg-[#1D8A77]/10 flex items-center justify-center">
                 <v.icon className="w-7 h-7 text-[#1D8A77]" />
               </div>
               <span className="text-2xl font-bold text-slate-900 tracking-tight">{v.title}</span>
               <CheckCircle2 className="w-6 h-6 text-emerald-500 ml-auto" />
             </motion.div>
           ))}
         </div>

         <motion.div 
          className="text-center space-y-12"
          variants={item}
         >
           <h2 className="text-7xl font-black text-slate-900 tracking-tighter">
             Stop Searching. <span className="text-[#1D8A77]">Start Snipping.</span>
           </h2>

           <div className="flex gap-6 justify-center pointer-events-none">
             <div className="px-12 py-5 rounded-2xl font-black text-xl border-4 border-slate-200 text-slate-400">
               Get DevSniper Free
             </div>
             <div className="px-12 py-5 rounded-2xl font-black text-xl bg-[#1D8A77] text-white shadow-[0_20px_40px_-10px_rgba(29,138,119,0.4)]">
               Upgrade to PRO
             </div>
           </div>
         </motion.div>
       </motion.div>

       {/* Floating Logo background */}
       <motion.div 
        className="absolute -bottom-20 -right-20 opacity-[0.03] rotate-12"
        animate={{ scale: [1, 1.1, 1], rotate: [12, 15, 12] }}
        transition={{ duration: 10, repeat: Infinity }}
       >
         <Target className="w-[600px] h-[600px] text-[#1D8A77]" />
       </motion.div>
    </motion.div>
  );
}
