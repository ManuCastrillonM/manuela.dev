import { Link } from "react-router-dom";
import { Nav } from "../components/Nav/Nav";
import { Footer } from "../components/Footer/Footer";
import { AboutPortrait } from "../components/About/AboutPortrait";
import { FeaturedCourseCard } from "../components/FeaturedCourseCard/FeaturedCourseCard";
import { DoubleUnderline, Sparkle, Star } from "../components/Doodles";
import { courses, coursesChannelUrl } from "../data/courses";
import { coursesPage } from "../data/coursesPage";
import { ui } from "../data/ui";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import "./CoursesPage.css";

export function CoursesPage() {
  useDocumentMeta(coursesPage.metaTitle, coursesPage.metaDescription);

  return (
    <>
      <a href="#main" className="skip-link">
        {ui.skipToContent}
      </a>
      <Nav />
      <main id="main">
        <div className="container">
          <p className="courses-breadcrumb">
            <Link to="/">{ui.breadcrumbHome}</Link> / <a href="/#learn">{coursesPage.breadcrumbLearn}</a> /{" "}
            <span>{coursesPage.breadcrumbCurrent}</span>
          </p>

          <div className="courses-hero">
            <div className="courses-hero-copy">
              <h1 className="courses-hero-heading">
                {coursesPage.heroHeading}
                <Star className="doodle doodle--lavender courses-hero-sparkle" />
                <DoubleUnderline className="doodle doodle--yellow courses-hero-underline" />
              </h1>
              <p className="courses-hero-intro">{coursesPage.heroIntro}</p>
            </div>

            <div className="courses-hero-portrait">
              <AboutPortrait />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="courses-section-head">
            <h2 className="courses-section-heading">
              {coursesPage.featuredSectionHeading}
              <Sparkle className="doodle doodle--yellow courses-section-sparkle" />
            </h2>
          </div>

          <div className="featured-courses-grid">
            {courses.map((course) => (
              <FeaturedCourseCard key={course.title} course={course} />
            ))}
          </div>
        </div>

        <div className="container">
          <div className="courses-cta">
            <Star className="doodle doodle--lavender courses-cta-star" />
            <Sparkle className="doodle doodle--yellow courses-cta-sparkle" />
            <Sparkle className="doodle doodle--yellow courses-cta-sparkle-2" />

            <h2 className="courses-cta-heading">
              {coursesPage.ctaHeadingLines[0]}
              <br />
              {coursesPage.ctaHeadingLines[1]}
              <br />
              {coursesPage.ctaHeadingLines[2]}
            </h2>

            <div className="courses-cta-content">
              <p className="courses-cta-text">{coursesPage.ctaText}</p>
              <a
                href={coursesChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link courses-cta-link"
              >
                {coursesPage.ctaLinkLabel}
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
