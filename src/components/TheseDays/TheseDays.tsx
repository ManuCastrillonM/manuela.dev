import { thesedaysItems, thesedaysContent } from "../../data/thesedays";
import {
  AwardIcon,
  UberIcon,
  MicIcon,
  CapIcon,
  DisneyIcon,
} from "../Icons/Icons";
import { Burst } from "../Doodles";
import "./TheseDays.css";

const iconMap = {
  award: AwardIcon,
  uber: UberIcon,
  mic: MicIcon,
  cap: CapIcon,
  disney: DisneyIcon,
};

export function TheseDays() {
  return (
    <section
      id="thesedays"
      className="thesedays section"
      aria-labelledby="thesedays-heading"
    >
      <div className="thesedays-panel">
        <div className="thesedays-head">
          <h2 id="thesedays-heading" className="thesedays-heading">
            {thesedaysContent.heading}
            <Burst className="doodle doodle--yellow thesedays-heading-burst" />
          </h2>
          <p className="thesedays-subtitle">
            {thesedaysContent.subtitle}
          </p>
        </div>

        <ol className="thesedays-timeline">
          {thesedaysItems.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <li key={item.title} className="thesedays-item">
                <span className="thesedays-node" aria-hidden="true" />
                <span
                  className={`thesedays-icon thesedays-icon--${item.accent}`}
                >
                  <Icon
                    className={`thesedays-icon-glyph${item.icon === "uber" ? " thesedays-icon-glyph--wide" : ""}`}
                  />
                </span>
                <p className="thesedays-item-title">{item.title}</p>
                <p className="thesedays-item-desc">{item.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
