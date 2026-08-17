import { featuredProject } from "../../data/project";
import { ui } from "../../data/ui";
import { StarIcon, CodeIcon, UsersIcon } from "../Icons/Icons";
import { Sparkle } from "../Doodles";
import apiNetworkArt from "../../assets/api-network-illustration.png";
import "./FeaturedProject.css";

const metricIcons = [StarIcon, CodeIcon, UsersIcon];

export function FeaturedProject() {
  return (
    <section id="project" className="featured-project section">
      <div className="container">
        <div className="featured-project-panel">
          <div className="featured-project-shape" aria-hidden="true" />

          <div className="featured-project-copy">
            <p className="eyebrow">
              <Sparkle className="doodle doodle--yellow eyebrow-icon" />
              {featuredProject.eyebrow}
            </p>
            <h2 className="featured-project-title">
              {featuredProject.name}
              <Sparkle className="doodle doodle--yellow featured-project-title-sparkle" />
            </h2>
            <p className="featured-project-desc">{featuredProject.description}</p>

            <dl className="featured-project-metrics">
              {featuredProject.metrics.map((metric, i) => {
                const Icon = metricIcons[i];
                return (
                  <div key={metric.label} className="featured-project-metric">
                    <Icon
                      className={`featured-project-metric-icon${i === 0 ? " featured-project-metric-icon--star" : ""}`}
                    />
                    <dt className="visually-hidden">{metric.label}</dt>
                    <dd className="featured-project-metric-value">{metric.value}</dd>
                    <p className="featured-project-metric-label" aria-hidden="true">
                      {metric.label}
                    </p>
                  </div>
                );
              })}
            </dl>

            <div className="featured-project-ctas">
              <a
                href={featuredProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn featured-project-cta-primary"
              >
                {featuredProject.liveLabel}
                <span className="arrow" aria-hidden="true">{ui.arrowRight}</span>
              </a>
              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link featured-project-cta-secondary"
              >
                {featuredProject.githubLabel}
                <span className="arrow" aria-hidden="true">{ui.arrowExternal}</span>
              </a>
            </div>
          </div>

          <img src={apiNetworkArt} alt="" className="featured-project-art" />
        </div>
      </div>
    </section>
  );
}
