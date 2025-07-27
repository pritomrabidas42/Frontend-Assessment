"use client";

import YouTube from "react-youtube";

interface YouTubePlayerProps {
  videoId: string;
}

export default function YouTubePlayer({ videoId }: YouTubePlayerProps) {
  return (
    <div className="w-full mb-6">
      <YouTube videoId={videoId} opts={{ width: "100%", height: "390" }} />
    </div>
  );
}
