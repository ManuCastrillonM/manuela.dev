import { Nav } from "../components/Nav/Nav";
import { Hero } from "../components/Hero/Hero";
import { TheseDays } from "../components/TheseDays/TheseDays";
import { FeaturedProject } from "../components/FeaturedProject/FeaturedProject";
import { LearnWithMe } from "../components/LearnWithMe/LearnWithMe";
import { Talks } from "../components/Talks/Talks";
import { About } from "../components/About/About";
import { Connect } from "../components/Connect/Connect";
import { Footer } from "../components/Footer/Footer";
import { ui } from "../data/ui";
import "./Home.css";

export function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        {ui.skipToContent}
      </a>
      <div className="header-band">
        <div
          className="header-band-shape header-band-shape-right-1"
          aria-hidden="true"
        />
        <div
          className="header-band-shape header-band-shape-right-2"
          aria-hidden="true"
        />
        <Nav />
        <div className="container">
          <Hero />
        </div>
      </div>
      <main id="main">
        <div className="container">
          <TheseDays />
        </div>
        <FeaturedProject />
        <LearnWithMe />
        <Talks />
        <About />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
