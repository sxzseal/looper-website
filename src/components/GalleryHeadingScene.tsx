import { useEffect } from 'react';
import {
  GalleryHeading,
  GALLERY_HEADING_VARIANTS,
} from '../../node_modules/@designcodeio/threeui/lib-dist/shaders/neuform-isolated/NeuformIsolatedEffects.js';
import '@designcodeio/threeui/style.css';

Object.assign(GALLERY_HEADING_VARIANTS['falling-diagonal'], {
  title: 'LOOPER-把目标变成可执行的AI工作流',
  headline: ['LOOPER-把目标变成', '可执行的AI工作流'],
  headlineWidths: [1320, 1320],
});

export function GalleryHeadingScene() {
  useEffect(() => {
    const frame = document.querySelector<HTMLIFrameElement>('.shader-frame iframe');
    if (!frame) return;

    // The original scene pauses on pointer-leave; keep its native renderer
    // and visual UI, while asking only its animation clock to keep playing.
    const keepPlaying = () => {
      frame.contentWindow?.postMessage({ threeuiRuntime: { hover: 1 } }, '*');
    };

    frame.addEventListener('load', keepPlaying);
    const timer = window.setInterval(keepPlaying, 120);
    keepPlaying();

    return () => {
      frame.removeEventListener('load', keepPlaying);
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className="shader-frame">
      <GalleryHeading
        variant="falling-diagonal"
        mode="dark"
        font="sans"
        weight="700"
        headlineSize={1.2}
        hue={0}
        saturation={1}
        brightness={1}
      />
    </div>
  );
}
