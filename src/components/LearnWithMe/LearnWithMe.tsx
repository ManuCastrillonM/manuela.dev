import { Link } from "react-router-dom";
import { videos, youtubeChannelUrl } from "../../data/videos";
import { learnWithMe } from "../../data/learnwithme";
import { ui } from "../../data/ui";
import { VideoCard } from "./VideoCard";
import { LeafIcon, VideoFrameIcon } from "../Icons/Icons";
import { Underline } from "../Doodles";
import "./LearnWithMe.css";

export function LearnWithMe() {
  return (
    <section id="learn" className="learn section">
      <div className="container">
        <div className="learn-layout">
          <div className="learn-left">
            <h2 className="section-heading learn-heading">
              {learnWithMe.heading}
              <Underline className="doodle doodle--lavender learn-heading-underline" />
            </h2>

            <div className="learn-cards">
              <div className="learn-card learn-card--lavender">
                <LeafIcon className="learn-card-icon" />
                <div>
                  <p className="learn-card-title">{learnWithMe.courses.title}</p>
                  <p className="learn-card-desc">{learnWithMe.courses.description}</p>
                  <Link to="/courses" className="learn-card-link">
                    {learnWithMe.courses.linkLabel}
                    <span className="arrow" aria-hidden="true">{ui.arrowRight}</span>
                  </Link>
                </div>
              </div>

              <div className="learn-card learn-card--green">
                <VideoFrameIcon className="learn-card-icon" />
                <div>
                  <p className="learn-card-title">{learnWithMe.youtube.title}</p>
                  <p className="learn-card-desc">{learnWithMe.youtube.description}</p>
                  <a
                    href={youtubeChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="learn-card-link"
                  >
                    {learnWithMe.youtube.linkLabel}
                    <span className="arrow" aria-hidden="true">{ui.arrowRight}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="learn-right" id="videos">
            <div className="learn-videos-head">
              <h3 className="learn-videos-heading">{learnWithMe.videosHeading}</h3>
              <a
                href={youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link learn-videos-viewall"
              >
                {learnWithMe.viewAllLabel}
                <span className="arrow" aria-hidden="true">{ui.arrowRight}</span>
              </a>
            </div>

            <div className="learn-videos-grid">
              {videos.map((video) => (
                <VideoCard key={video.youtubeId} video={video} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
