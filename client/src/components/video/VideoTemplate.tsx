import { AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1Pain } from './video_scenes/Scene1Pain';
import { Scene2Search } from './video_scenes/Scene2Search';
import { Scene3Inspector } from './video_scenes/Scene3Inspector';
import { Scene4LiveEdit } from './video_scenes/Scene4LiveEdit';
import { Scene5Value } from './video_scenes/Scene5Value';

const SCENE_DURATIONS = {
  pain: 10000,
  search: 8000,
  inspector: 10000,
  liveEdit: 17000,
  value: 15000,
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
        {currentScene === 4 && <Scene5Value key="value" />}
      </AnimatePresence>
    </div>
  );
}
