import { Link } from "react-router-dom";
import { Nav } from "../components/Nav/Nav";
import { Footer } from "../components/Footer/Footer";
import { AboutPortrait } from "../components/About/AboutPortrait";
import { TalkRow } from "../components/TalkRow/TalkRow";
import { DoubleUnderline, Sparkle, Squiggle, Star } from "../components/Doodles";
import { sortedTalks } from "../data/talks";
import { talksPage } from "../data/talksPage";
import { ui } from "../data/ui";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import "./TalksPage.css";

export function TalksPage() {
  useDocumentMeta(talksPage.metaTitle, talksPage.metaDescription);

  return (
    <>
      <a href="#main" className="skip-link">
        {ui.skipToContent}
      </a>
      <Nav />
      <main id="main">
        <div className="container">
          <p className="talks-breadcrumb">
            <Link to="/">{ui.breadcrumbHome}</Link> / <span>{talksPage.breadcrumbCurrent}</span>
          </p>

          <div className="talks-hero">
            <div className="talks-hero-copy">
              <h1 className="talks-hero-heading">
                {talksPage.heroHeading}
                <DoubleUnderline className="doodle doodle--yellow talks-hero-underline" />
              </h1>
              <p className="talks-hero-intro">
                {talksPage.heroIntro}
                <Star className="doodle doodle--lavender talks-hero-doodle" />
              </p>
            </div>

            <div className="talks-hero-portrait">
              <AboutPortrait />
            </div>
          </div>
        </div>

        <div className="container">
          <ol className="talks-page-list">
            {sortedTalks.map((talk) => (
              <TalkRow key={talk.title} talk={talk} />
            ))}
          </ol>
        </div>

        <div className="container">
          <div className="talks-cta">
            <Sparkle className="doodle doodle--yellow talks-cta-sparkle" />
            <Squiggle className="doodle doodle--lavender talks-cta-squiggle" />
            <Star className="doodle doodle--lavender talks-cta-star" />

            <h2 className="talks-cta-heading">
              {talksPage.ctaHeadingLines[0]}
              <br />
              {talksPage.ctaHeadingLines[1]}
            </h2>

            <div className="talks-cta-content">
              <p className="talks-cta-text">{talksPage.ctaText}</p>
              <a href="/#connect" className="btn talks-cta-button">
                {talksPage.ctaButtonLabel}
                <span className="arrow" aria-hidden="true">{ui.arrowRight}</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
