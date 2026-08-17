import { funFacts, funFactsContent, type FunFactAccent } from "../../data/funfacts";
import { Burst, Underline } from "../Doodles";
import { GameControllerIcon, ChessKnightIcon, CactusIcon, ViolinIcon } from "./icons";
import "./FunFacts.css";

const iconMap: Record<FunFactAccent, typeof GameControllerIcon> = {
  gaming: GameControllerIcon,
  chess: ChessKnightIcon,
  plants: CactusIcon,
  music: ViolinIcon,
};

export function FunFacts() {
  return (
    <section
      id="fun-facts"
      className="funfacts"
      aria-labelledby="funfacts-heading"
    >
      <div className="container">
        <div className="funfacts-head">
          <h2 id="funfacts-heading" className="funfacts-heading">
            {funFactsContent.heading}
            <Burst className="funfacts-heading-doodle" />
          </h2>
        </div>

        <ul className="funfacts-grid">
          {funFacts.map((fact) => {
            const Icon = iconMap[fact.accent];
            return (
              <li key={fact.id} className={`fun-fact fun-fact--${fact.accent}`}>
                <Icon />
                <div className="fun-fact-body">
                  <h3 className="fun-fact-title">{fact.title}</h3>
                  <p className="fun-fact-desc">
                    {fact.description.before}
                    <strong className="fun-fact-highlight">
                      {fact.description.highlight}
                    </strong>
                    {fact.description.after}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="funfacts-closing">
          {funFactsContent.closingPlain}{" "}
          <span className="funfacts-closing-expressive">
            {funFactsContent.closingExpressive}
            <Underline className="funfacts-closing-underline" />
          </span>
        </p>
      </div>
    </section>
  );
}
