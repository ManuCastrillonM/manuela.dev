import type { Talk } from "../../data/talks";
import { talksSection } from "../../data/talks";
import { ui } from "../../data/ui";
import { formatTalkDate } from "../../utils/formatTalkDate";

export function TalkItem({ talk }: { talk: Talk }) {
  return (
    <li className="talk-item">
      <h3 className="talk-item-title">{talk.title}</h3>
      <p className="talk-item-meta">
        {talk.event} · {formatTalkDate(talk.date)}
      </p>
      {talk.resources && talk.resources.length > 0 && (
        <div className="talk-item-resources">
          {talk.resources.map((resource) => (
            <a
              key={resource.url}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link talk-item-link"
              aria-label={`${resource.name} ${talksSection.resourceAriaJoiner} ${talk.title}`}
            >
              {resource.name}
              <span className="arrow" aria-hidden="true">{ui.arrowRight}</span>
            </a>
          ))}
        </div>
      )}
    </li>
  );
}
