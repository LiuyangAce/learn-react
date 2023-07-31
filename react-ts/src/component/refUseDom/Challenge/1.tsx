import { useState, useRef } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef =  useRef(null)

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    handleplaying(nextIsPlaying)
  }

  function handleplaying(statu: boolean) {
    setIsPlaying(statu);
    statu? videoRef.current.play() : videoRef.current.pause()
  }


  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? '暂停' : '播放'}
      </button>
      <video width="250" ref={videoRef}>
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}
