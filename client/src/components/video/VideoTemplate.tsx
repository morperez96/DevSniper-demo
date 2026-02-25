import { AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1Branding } from './video_scenes/Scene1Branding';
import { Scene2AdminSearch } from './video_scenes/Scene2AdminSearch';
import { Scene3Inspection } from './video_scenes/Scene3Inspection';
import { Scene4Summary } from './video_scenes/Scene4Summary';

const SCENE_DURATIONS = {
  branding: 4000,
  admin: 7000,
  inspection: 12000,
  summary: 7000,
};

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({
    durations: SCENE_DURATIONS,
    loop: true,
  });

  return (
    <div
      className="w-full h-screen overflow-hidden relative"
      style={{ backgroundColor: 'var(--color-bg-dark)' }}
    >
      <AnimatePresence mode="wait">
        {currentScene === 0 && <Scene1Branding key="scene1" />}
        {currentScene === 1 && <Scene2AdminSearch key="scene2" />}
        {currentScene === 2 && <Scene3Inspection key="scene3" />}
        {currentScene === 3 && <Scene4Summary key="scene4" />}
      </AnimatePresence>
    </div>
  );
}
