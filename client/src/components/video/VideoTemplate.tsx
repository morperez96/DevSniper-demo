import { AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1Pain } from './video_scenes/Scene1Pain';
import { Scene2Discovery } from './video_scenes/Scene2Discovery';
import { Scene3LiveText } from './video_scenes/Scene3LiveText';
import { Scene4LiveCSS } from './video_scenes/Scene4LiveCSS';
import { Scene5ValueCTA } from './video_scenes/Scene5ValueCTA';

const SCENE_DURATIONS = {
  pain: 6000,
  discovery: 8000,
  liveText: 8000,
  liveCSS: 7000,
  cta: 6000,
};

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({
    durations: SCENE_DURATIONS,
    loop: true,
  });

  return (
    <div
      className="w-screen h-screen overflow-hidden relative bg-white"
    >
      <AnimatePresence mode="wait">
        {currentScene === 0 && <Scene1Pain key="pain" />}
        {currentScene === 1 && <Scene2Discovery key="discovery" />}
        {currentScene === 2 && <Scene3LiveText key="liveText" />}
        {currentScene === 3 && <Scene4LiveCSS key="liveCSS" />}
        {currentScene === 4 && <Scene5ValueCTA key="cta" />}
      </AnimatePresence>
    </div>
  );
}
