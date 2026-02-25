import { AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1Pain } from './video_scenes/Scene1Pain';
import { Scene2Search } from './video_scenes/Scene2Search';
import { Scene3Inspector } from './video_scenes/Scene3Inspector';
import { Scene4LiveEdit } from './video_scenes/Scene4LiveEdit';
import { Scene5ValueGrid } from './video_scenes/Scene5ValueGrid';
import { Scene6ClosingCTA } from './video_scenes/Scene6ClosingCTA';

const SCENE_DURATIONS = {
  pain: 7000,
  search: 7000,
  inspector: 8000,
  liveEdit: 12000,
  valueGrid: 6000,
  closingCTA: 5000,
};

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({
    durations: SCENE_DURATIONS,
    loop: true,
  });

  return (
    <div className="w-screen h-screen overflow-hidden relative bg-white">
      <AnimatePresence mode="wait">
        {currentScene === 0 && <Scene1Pain key="pain" />}
        {currentScene === 1 && <Scene2Search key="search" />}
        {currentScene === 2 && <Scene3Inspector key="inspector" />}
        {currentScene === 3 && <Scene4LiveEdit key="liveEdit" />}
        {currentScene === 4 && <Scene5ValueGrid key="valueGrid" />}
        {currentScene === 5 && <Scene6ClosingCTA key="closingCTA" />}
      </AnimatePresence>
    </div>
  );
}
