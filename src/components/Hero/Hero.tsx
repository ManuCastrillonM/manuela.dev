import { hero } from "../../data/hero";
import {
  StarburstTitle,
  HeroSparkle,
  PortraitLoop,
  TopRightSquiggle,
  TextLinkUnderline,
  TinyStarCluster,
} from "./doodles";
import { DoubleUnderline } from "../Doodles";
import { PortraitFrame } from "./PortraitFrame";
import { ui } from "../../data/ui";
import headshot from "../../assets/headshot.jpg";
import "./Hero.css";

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 className="hero-name">
            <span className="hero-name-first">
              {hero.firstName}
              <StarburstTitle className="doodle doodle--muted hero-name-burst" />
            </span>
            <br />
            <span className="hero-name-last">
              {hero.lastName}
              <DoubleUnderline className="doodle doodle--yellow hero-name-underline" />
            </span>
          </h1>

          <p className="hero-supporting">
            {hero.supporting.before}
            <em>{hero.supporting.emphasis}</em>
            {hero.supporting.after}
          </p>

          <div className="hero-ctas">
            <a href={hero.primaryCta.to} className="btn btn-lavender">
              {hero.primaryCta.label}
              <span className="arrow" aria-hidden="true">{ui.arrowRight}</span>
            </a>
            <a href={hero.secondaryCta.to} className="text-link hero-secondary-link">
              {hero.secondaryCta.label}
              <span className="arrow" aria-hidden="true">{ui.arrowRight}</span>
              <TextLinkUnderline className="doodle doodle--yellow hero-secondary-underline" />
            </a>
          </div>
        </div>

        <div className="hero-portrait">
          <div className="hero-portrait-frame">
            <img src={headshot} alt={hero.portraitAlt} />
          </div>
          <PortraitFrame />
          <TinyStarCluster className="hero-doodle hero-doodle-star" />
          <HeroSparkle className="doodle doodle--muted hero-doodle hero-doodle-sparkle-1" />
          <HeroSparkle className="doodle doodle--yellow hero-doodle hero-doodle-sparkle-2" />
          <PortraitLoop className="doodle doodle--yellow hero-doodle hero-doodle-loop" />
          <TopRightSquiggle className="doodle doodle--yellow hero-doodle hero-doodle-squiggle" />
        </div>
      </div>
    </section>
  );
}
