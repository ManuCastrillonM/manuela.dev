import { useState } from "react";
import type { Video } from "../../data/videos";
import { learnWithMe } from "../../data/learnwithme";
import { PlayIcon } from "../Icons/Icons";

// hq720 is a true 16:9 crop (no letterboxing); mqdefault is the reliable fallback
// for older videos that don't have a hq720 thumbnail generated.
const fallbackThumb = (id: string) => `https://img.youtube.com/vi/${id}/mqdefault.jpg`;

export function VideoCard({ video }: { video: Video }) {
  const [thumb, setThumb] = useState(`https://i.ytimg.com/vi/${video.youtubeId}/hq720.jpg`);

  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="learn-video-card"
      aria-label={`${learnWithMe.videoAriaLabel.prefix} "${video.title}" ${learnWithMe.videoAriaLabel.suffix}`}
    >
      <span className="learn-video-thumb-wrap">
        <img
          src={thumb}
          alt=""
          loading="lazy"
          className="learn-video-thumb"
          onError={() => setThumb(fallbackThumb(video.youtubeId))}
        />
        <span className="learn-video-play" aria-hidden="true">
          <PlayIcon />
        </span>
      </span>
      <span className="learn-video-title">{video.title}</span>
    </a>
  );
}
