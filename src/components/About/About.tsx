import { about, credentials } from "../../data/about";
import { ui } from "../../data/ui";
import { CodeIcon, PeopleIcon, GithubIcon, AwardIcon } from "../Icons/Icons";
import { Underline } from "../Doodles";
import { AboutPortrait } from "./AboutPortrait";
import "./About.css";

const iconMap = {
  google: CodeIcon,
  wtm: PeopleIcon,
  github: GithubIcon,
  medal: AwardIcon,
};

export function About() {
  return (
    <section id="about" className="about section">
      <div className="container about-grid">
        <div className="about-portrait">
          <AboutPortrait />
        </div>

        <div className="about-copy">
          <h2 className="section-heading about-heading">
            {about.heading}
            <Underline className="doodle doodle--yellow about-heading-underline" />
          </h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="about-paragraph">
              {paragraph}
            </p>
          ))}
          <a href={about.moreUrl} className="text-link about-cta">
            {about.ctaLabel}
            <span className="arrow" aria-hidden="true">{ui.arrowRight}</span>
          </a>
        </div>

        <ul className="about-credentials">
          {credentials.map((credential) => {
            const Icon = iconMap[credential.icon];
            return (
              <li key={credential.title} className="about-credential">
                <Icon className="about-credential-icon" />
                <span>
                  <span className="about-credential-title">{credential.title}</span>
                  <span className="about-credential-subtitle">{credential.subtitle}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
