import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();  // 渲染期间不能调用 `play()`。 
    } else {
      ref.current.pause(); // 同样，调用 `pause()` 也不行。
    }
  })

  return <video ref={ref} src={src} loop playsInline />;
}

export default VideoPlayer