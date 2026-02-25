import { AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1Nightmare } from './video_scenes/Scene1Nightmare';
import { Scene2Shortcut } from './video_scenes/Scene2Shortcut';
import { Scene3Magic } from './video_scenes/Scene3Magic';
import { Scene4Drop } from './video_scenes/Scene4Drop';

const SCENE_DURATIONS = {
  nightmare: 3000,
  shortcut: 4000,
  magic: 8000,
  drop: 5000,
};

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({
    durations: SCENE_DURATIONS,
    loop: true,
  });

  return (
    <div className="w-screen h-screen overflow-hidden relative bg-white">
      <AnimatePresence mode="wait">
        {currentScene === 0 && <Scene1Nightmare key="nightmare" />}
        {currentScene === 1 && <Scene2Shortcut key="shortcut" />}
        {currentScene === 2 && <Scene3Magic key="magic" />}
        {currentScene === 3 && <Scene4Drop key="drop" />}
      </AnimatePresence>
    </div>
  );
}
