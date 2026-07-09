import { useEffect, useRef } from "react";

interface AmbientVideoBackgroundProps {
  /** Video source URL. Should be a seamless loop, muted-friendly (no important audio). */
  src?: string;
  /** Optional poster image shown before the video loads. */
  poster?: string;
  /** Overlay darkness from 0 (none) to 1 (black). Defaults to 0.65 for readable text. */
  overlayOpacity?: number;
  /** Extra classes for the wrapper. */
  className?: string;
  /** Additional gradient/tint layer on top of the dark overlay. */
  tintClassName?: string;
}

/**
 * Ambient looping background video with dark overlay for text readability.
 * Muted, autoplay, playsInline, loops infinitely. Falls back gracefully when
 * the video can't load (poster + overlay remain visible).
 */
export default function AmbientVideoBackground({
  src = "https://videos.pexels.com/video-files/3141210/3141210-uhd_2560_1440_25fps.mp4",
  poster,
  overlayOpacity = 0.65,
  className = "",
  tintClassName = "",
}: AmbientVideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // Ensure autoplay after mount (some browsers block until muted is confirmed).
    v.muted = true;
    const play = () => v.play().catch(() => {});
    if (v.readyState >= 2) play();
    else v.addEventListener("loadeddata", play, { once: true });
  }, [src]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
      />
      {/* Dark obsidian overlay for text contrast */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `hsl(var(--background) / ${overlayOpacity})` }}
      />
      {/* Optional copper/ambient tint */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-background/40 via-transparent to-primary/10 ${tintClassName}`}
      />
    </div>
  );
}
