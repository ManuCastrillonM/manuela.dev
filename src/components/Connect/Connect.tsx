import { socials } from "../../data/socials";
import { connect } from "../../data/connect";
import { SocialLink } from "./SocialLink";
import { Sparkle, Loop } from "../Doodles";
import "./Connect.css";

export function Connect() {
  return (
    <section id="connect" className="connect section">
      <div className="container">
        <div className="connect-panel surface">
          <div className="connect-intro">
            <h2 className="connect-heading">
              {connect.heading}
              <Sparkle className="doodle doodle--lavender connect-heading-sparkle" />
            </h2>
            <p className="connect-subtitle">{connect.subtitle}</p>
          </div>

          <ul className="connect-list">
            {socials.map((social) => (
              <li key={social.label}>
                <SocialLink social={social} />
              </li>
            ))}
          </ul>

          <Loop className="doodle doodle--green connect-doodle" />
        </div>
      </div>
    </section>
  );
}
