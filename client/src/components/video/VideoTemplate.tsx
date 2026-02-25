import { AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1CodePain } from './video_scenes/Scene1CodePain';
import { Scene2AdminSearch } from './video_scenes/Scene2AdminSearch';
import { Scene3LiveEdit } from './video_scenes/Scene3LiveEdit';
import { Scene4ValueGrid } from './video_scenes/Scene4ValueGrid';
import { Scene5ClosingCTA } from './video_scenes/Scene5ClosingCTA';

const SCENE_DURATIONS = {
  codePain: 7000,
  adminSearch: 7000,
  liveEdit: 12000,
  valueGrid: 8000,
  closingCTA: 6000,
};

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({
    durations: SCENE_DURATIONS,
    loop: true,
  });

  return (
    <div className="w-full h-screen aspect-video overflow-hidden relative bg-[#f8f9fa]" style={{ aspectRatio: '16 / 9' }}>
      <AnimatePresence mode="wait">
        {currentScene === 0 && <Scene1CodePain key="codePain" />}
        {currentScene === 1 && <Scene2AdminSearch key="adminSearch" />}
        {currentScene === 2 && <Scene3LiveEdit key="liveEdit" />}
        {currentScene === 3 && <Scene4ValueGrid key="valueGrid" />}
        {currentScene === 4 && <Scene5ClosingCTA key="closingCTA" />}
      </AnimatePresence>
    </div>
  );
}
