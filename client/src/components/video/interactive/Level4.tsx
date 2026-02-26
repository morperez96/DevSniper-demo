import { motion, AnimatePresence } from 'framer-motion';
import { Target, Type, Code2, Save, Settings, ArrowRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function Level4({ onNext }: { onNext: () => void }) {
  const [headline, setHeadline] = useState('Ultimate Workflow');
  const [initialHeadline] = useState('Ultimate Workflow');
  const [activeTab, setActiveTab] = useState<'Text' | 'CSS'>('Text');
  const [cssCode, setCssCode] = useState('');
  const [progress, setProgress] = useState(0);
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const cssTextareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (activeTab === 'Text') {
      textareaRef.current?.focus();
    } else {
      cssTextareaRef.current?.focus();
    }
  }, [activeTab]);

  const hasTextChanged = headline !== initialHeadline && headline.trim().length > 0;
  const hasCssChanged = cssCode.trim().length > 0;
  const canSave = hasTextChanged && hasCssChanged;

  // Calculate overall progress
  useEffect(() => {
    let newProgress = 0;
    if (hasTextChanged) newProgress += 50;
    if (hasCssChanged) newProgress += 50;
    setProgress(newProgress);
  }, [hasTextChanged, hasCssChanged]);

  // Handle auto-switch to CSS tab when text is changed
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHeadline(e.target.value);
  };

  const handleCssChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let value = e.target.value;
    
    // Auto-complete logic for CSS
    if (value.toLowerCase().trim() === 'c' && cssCode === '') {
      value = 'color: #1D8A77;';
    } else if (value.includes('\n') && cssCode === 'color: #1D8A77;') {
      value = 'color: #1D8A77;\nbackground: #f0fdfa;\nborder-radius: 12px;';
    }

    setCssCode(value);
  };

  const applyStyles = () => {
    try {
      const styles = cssCode.split(';').reduce((acc, style) => {
        const [key, value] = style.split(':').map(s => s.trim());
        if (key && value) {
          // Convert kebab-case to camelCase
          const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
          acc[camelKey] = value;
        }
        return acc;
      }, {} as Record<string, string>);
      return styles;
    } catch (e) {
      return {};
    }
  };

  return (
    <motion.div
      className="absolute inset-0 bg-[#F8FAFC] flex flex-col items-center justify-center overflow-hidden p-[2vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="absolute top-[4vh] text-center px-[2vw] z-50 pointer-events-none flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-heading-lg font-black text-slate-900 tracking-tight">
          {activeTab === 'Text' && !hasTextChanged && (
            <>1. <span className="text-[#1D8A77]">Edit the text</span> in the panel below.</>
          )}
          {activeTab === 'Text' && hasTextChanged && !hasCssChanged && (
            <>Great! Now <span className="text-[#1D8A77]">click the CSS tab</span>.</>
          )}
          {activeTab === 'CSS' && !hasCssChanged && (
            <>2. Type <span className="font-mono bg-slate-200 px-3 py-1 rounded text-teal-600">c</span> and then press <span className="font-mono bg-slate-200 px-3 py-1 rounded text-teal-600">Enter</span></>
          )}
          {canSave && (
            <>3. Click <span className="text-[#1D8A77]">Save Changes</span> to continue.</>
          )}
        </h2>
      </motion.div>

      <div className="w-full max-w-[90vw] flex gap-[3vw] items-center h-full relative mt-[8vh]">
        {/* Live Preview Side */}
        <div className="flex-1 flex flex-col items-center justify-center min-h-[40vh] relative z-10 px-[1vw]">
           <motion.h1 
            className="text-heading-xl font-black text-center tracking-tighter leading-[1.1] transition-all duration-300 shadow-sm max-w-[55vw] w-full text-slate-900 rounded-2xl p-[2vw]"
            style={applyStyles()}
          >
            {headline || " "}
          </motion.h1>
          
          {/* Progress Bar moved under the text */}
          <div className="mt-[4vh] w-full max-w-[30vw] h-[0.6vh] bg-slate-200 rounded-full overflow-hidden">
             <motion.div 
               className="h-full bg-[#1D8A77]"
               animate={{ width: `${progress}%` }}
               transition={{ duration: 0.5, ease: "easeOut" }}
             />
          </div>
        </div>

        {/* PRO Dark Panel */}
        <motion.div 
          className="w-[clamp(280px,25vw,400px)] bg-[#1E293B] rounded-2xl shadow-xl border border-slate-700 overflow-hidden text-white flex flex-col h-[clamp(400px,55vh,600px)] relative z-20 shrink-0"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 25 }}
        >
          <div className="p-[1vw] bg-[#0F172A] border-b border-slate-800 flex justify-between items-center shadow-md">
            <div className="flex items-center gap-[0.5vw]">
              <div className="w-[clamp(24px,2vw,36px)] h-[clamp(24px,2vw,36px)] rounded-lg bg-[#1D8A77] flex items-center justify-center shadow-lg">
                <Target className="w-[clamp(16px,1.2vw,24px)] h-[clamp(16px,1.2vw,24px)] text-white" />
              </div>
              <span className="font-black text-[clamp(10px,1.2vw,16px)] tracking-tight">DevSniper <span className="text-[#1D8A77]">PRO</span></span>
            </div>
            <div className="w-[clamp(6px,0.6vw,10px)] h-[clamp(6px,0.6vw,10px)] rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse" />
          </div>

          <div className="flex bg-[#1E293B] border-b border-slate-800 relative">
             {['General', 'Text', 'CSS'].map((tab) => {
               const isText = tab === 'Text';
               const isCss = tab === 'CSS';
               const isActive = activeTab === tab;
               const showCssPulse = hasTextChanged && isCss && !hasCssChanged;

               return (
                 <div 
                  key={tab}
                  onClick={() => (isText || isCss) && setActiveTab(tab as any)}
                  className={`flex-1 py-[0.8vh] text-center text-[clamp(8px,0.9vw,12px)] font-black uppercase tracking-widest transition-all ${(isText || isCss) ? 'cursor-pointer' : 'cursor-default'} ${isActive ? 'text-white border-b-2 border-[#1D8A77] bg-[#0F172A]/40' : 'text-slate-500 hover:text-slate-300'} ${showCssPulse ? 'bg-[#1D8A77]/20 text-white animate-pulse border-b-2 border-[#1D8A77]' : ''}`}
                 >
                   <div className="flex flex-col items-center gap-[0.3vh]">
                     {tab === 'General' && <Settings className="w-[clamp(10px,1vw,14px)] h-[clamp(10px,1vw,14px)]" />}
                     {isText && <Type className="w-[clamp(10px,1vw,14px)] h-[clamp(10px,1vw,14px)]" />}
                     {isCss && <Code2 className="w-[clamp(10px,1vw,14px)] h-[clamp(10px,1vw,14px)]" />}
                     {tab}
                   </div>
                 </div>
               );
             })}
          </div>

          <div className="p-[1.2vw] space-y-[1vh] flex-1 flex flex-col bg-[#0F172A]/30">
            <div className="flex-1 bg-[#0F172A] rounded-xl p-[1vw] border border-slate-800 shadow-inner relative overflow-hidden flex flex-col">
               <div className="absolute top-0 left-0 w-[0.3vw] h-full bg-[#1D8A77]/20" />
               
               <AnimatePresence mode="wait">
                 {activeTab === 'Text' ? (
                   <motion.div 
                    key="text"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex flex-col h-full"
                   >
                     <label className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest flex justify-between">
                       Content
                       {hasTextChanged && !hasCssChanged && (
                         <span className="text-teal-400 normal-case flex items-center gap-1 animate-pulse">
                           Click CSS tab <ArrowRight className="w-3 h-3" />
                         </span>
                       )}
                     </label>
                     <textarea 
                        ref={textareaRef}
                        value={headline}
                        onChange={handleTextChange}
                        className="flex-1 w-full bg-transparent border-none outline-none text-white font-medium resize-none text-[clamp(14px,1.2vw,18px)] leading-relaxed"
                        placeholder="Type your headline here..."
                     />
                   </motion.div>
                 ) : (
                   <motion.div 
                    key="css"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col h-full font-mono text-[clamp(12px,1.1vw,16px)]"
                   >
                     <label className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Styles</label>
                     <div className="text-slate-500 mb-1">.hero-title {'{'}</div>
                     <textarea 
                        ref={cssTextareaRef}
                        value={cssCode}
                        onChange={handleCssChange}
                        className="flex-1 w-full bg-transparent border-none outline-none text-emerald-400 resize-none leading-relaxed pl-4"
                        placeholder="color: #1D8A77;"
                     />
                     <div className="text-slate-500 mt-1">{'}'}</div>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>

            <div className="flex justify-end items-center mt-4">
               <button 
                onClick={() => canSave && onNext()}
                className={`px-[1.5vw] py-[1vh] rounded-xl font-black text-[clamp(12px,1.2vw,16px)] flex items-center gap-[0.5vw] shadow-lg transition-all ${
                  canSave 
                    ? 'bg-[#1D8A77] text-white hover:bg-[#156e5e] hover:shadow-[0_0_20px_rgba(29,138,119,0.6)] cursor-pointer scale-105 animate-pulse' 
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
               >
                 <Save className="w-[clamp(14px,1.2vw,20px)] h-[clamp(14px,1.2vw,20px)]" />
                 Save Changes
               </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
