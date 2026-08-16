import type { Talk } from "../../data/talks";
import { talksSection } from "../../data/talks";
import { ui } from "../../data/ui";
import { formatTalkDate } from "../../utils/formatTalkDate";
import "./TalkRow.css";

export function TalkRow({ talk }: { talk: Talk }) {
  return (
    <li className="talk-row">
      <h3 className="talk-row-title">{talk.title}</h3>

      <div className="talk-row-meta">
        <p className="talk-row-event">{talk.event}</p>
        <p className="talk-row-date">{formatTalkDate(talk.date)}</p>
      </div>

      {talk.resources && talk.resources.length > 0 && (
        <div className="talk-row-resources">
          {talk.resources.map((resource) => (
            <a
              key={resource.url}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="talk-row-resource"
              aria-label={`${resource.name} ${talksSection.resourceAriaJoiner} ${talk.title}`}
            >
              {resource.name}
              <span className="arrow" aria-hidden="true">{ui.arrowExternal}</span>
            </a>
          ))}
        </div>
      )}
    </li>
  );
}
