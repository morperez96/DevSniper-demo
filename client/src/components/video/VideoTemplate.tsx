import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Level1 } from './interactive/Level1';
import { Level2 } from './interactive/Level2';
import { Level3 } from './interactive/Level3';
import { Level4 } from './interactive/Level4';
import { Level5 } from './interactive/Level5';

export default function VideoTemplate() {
  const [currentLevel, setCurrentLevel] = useState(1);

  const nextLevel = () => {
    setCurrentLevel(prev => Math.min(prev + 1, 5));
  };

  return (
    <div className="w-screen h-screen overflow-hidden relative bg-[#F8FAFC]">
      <AnimatePresence mode="wait">
        {currentLevel === 1 && <Level1 key="level1" onNext={nextLevel} />}
        {currentLevel === 2 && <Level2 key="level2" onNext={nextLevel} />}
        {currentLevel === 3 && <Level3 key="level3" onNext={nextLevel} />}
        {currentLevel === 4 && <Level4 key="level4" onNext={nextLevel} />}
        {currentLevel === 5 && <Level5 key="level5" />}
      </AnimatePresence>
    </div>
  );
}
