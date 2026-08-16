import type { Course } from "../../data/courses";
import { coursesSection } from "../../data/courses";
import { PlayIcon } from "../Icons/Icons";
import "./FeaturedCourseCard.css";

const images = import.meta.glob("../../assets/courses/*", { eager: true, import: "default" }) as Record<
  string,
  string
>;

function resolveImage(name: string) {
  const match = Object.entries(images).find(([path]) => path.endsWith(`/${name}`));
  return match?.[1] ?? "";
}

export function FeaturedCourseCard({ course }: { course: Course }) {
  const isVideo = course.platform === "YouTube";

  return (
    <a
      href={course.url}
      target="_blank"
      rel="noopener noreferrer"
      className="featured-course-card"
      aria-label={`${course.title} ${coursesSection.ariaJoiner} ${course.platform}`}
    >
      <span className="featured-course-thumb-wrap">
        <img src={resolveImage(course.image)} alt="" loading="lazy" className="featured-course-thumb" />
        {isVideo && (
          <span className="featured-course-play" aria-hidden="true">
            <PlayIcon />
          </span>
        )}
      </span>
      <span className="featured-course-title">{course.title}</span>
      <span className="featured-course-platform">{course.platform}</span>
    </a>
  );
}
