import { Link } from "react-router-dom";
import { sortedTalks, talksSection } from "../../data/talks";
import { ui } from "../../data/ui";
import { TalkItem } from "./TalkItem";
import { Sparkle, Underline, Loop } from "../Doodles";
import "./Talks.css";

const homepageTalks = sortedTalks.slice(0, 4);

export function Talks() {
  return (
    <section id="talks" className="talks section">
      <div className="container">
        <div className="section-head talks-head">
          <h2 className="section-heading talks-heading">
            {talksSection.heading}
            <Sparkle className="doodle doodle--yellow talks-heading-sparkle" />
            <Underline className="doodle doodle--lavender talks-heading-underline" />
          </h2>
          <Link to="/talks" className="text-link talks-viewall">
            {talksSection.viewAllLabel}
            <span className="arrow" aria-hidden="true">{ui.arrowRight}</span>
          </Link>
        </div>

        <div className="talks-grid-wrap">
          <ul className="talks-list">
            {homepageTalks.map((talk) => (
              <TalkItem key={talk.title} talk={talk} />
            ))}
          </ul>
          <Loop className="doodle doodle--lavender talks-doodle" />
        </div>
      </div>
    </section>
  );
}
