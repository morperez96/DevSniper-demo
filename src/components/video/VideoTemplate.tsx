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
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-[#F8FAFC] flex items-center justify-center m-0 p-0">
      <div className="w-full h-full max-w-[1920px] max-h-[1080px] aspect-video relative">
        <AnimatePresence mode="wait">
          {currentLevel === 1 && <Level1 key="level1" onNext={nextLevel} />}
          {currentLevel === 2 && <Level2 key="level2" onNext={nextLevel} />}
          {currentLevel === 3 && <Level3 key="level3" onNext={nextLevel} />}
          {currentLevel === 4 && <Level4 key="level4" onNext={nextLevel} />}
          {currentLevel === 5 && <Level5 key="level5" onRestart={() => setCurrentLevel(1)} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
