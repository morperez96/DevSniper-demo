import { AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1Problem } from './video_scenes/Scene1Problem';
import { Scene2Solution } from './video_scenes/Scene2Solution';
import { Scene3Superpower } from './video_scenes/Scene3Superpower';
import { Scene4Sync } from './video_scenes/Scene4Sync';
import { Scene5CTA } from './video_scenes/Scene5CTA';

const SCENE_DURATIONS = {
  problem: 4000,
  solution: 6000,
  superpower: 8000,
  sync: 6000,
  cta: 6000,
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
        {currentScene === 0 && <Scene1Problem key="scene1" />}
        {currentScene === 1 && <Scene2Solution key="scene2" />}
        {currentScene === 2 && <Scene3Superpower key="scene3" />}
        {currentScene === 3 && <Scene4Sync key="scene4" />}
        {currentScene === 4 && <Scene5CTA key="scene5" />}
      </AnimatePresence>
    </div>
  );
}
