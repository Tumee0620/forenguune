import { Music } from "lucide-react";
import { useEffect, useRef } from "react";

export const Song = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // The iframe will auto-play the music
  }, []);

  return (
    <div className="relative top-20 right-130 z-50">
      <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-3 border border-border/50 shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <Music className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-xs text-muted-foreground">Now Playing</span>
        </div>
        <iframe
          ref={iframeRef}
          width="250"
          height="50"
          src="https://www.youtube.com/embed/M7TXYPnKEyY?rel=0&autoplay=1&loop=1&playlist=M7TXYPnKEyY"
          title="Background Music"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        />
      </div>
    </div>
  );
};
