export const coursesSection = {
  ariaJoiner: "on",
};

export interface Course {
  title: string;
  platform: "YouTube" | "Código Facilito";
  language: "ES";
  url: string;
  image: string;
}

export const courses: Course[] = [
  {
    title: "Git para todos",
    platform: "YouTube",
    language: "ES",
    url: "https://www.youtube.com/playlist?list=PLiHY2yQB-BxwmrTQ3_ACzfgrIPZZOqMfQ",
    image: "git-para-todos.jpg",
  },
  {
    title: "GitHub a fondo",
    platform: "Código Facilito",
    language: "ES",
    url: "https://codigofacilito.com/cursos/github",
    image: "github-a-fondo.jpeg",
  },
  {
    title: "Git profesional",
    platform: "Código Facilito",
    language: "ES",
    url: "https://codigofacilito.com/cursos/git-profesional",
    image: "git-profesional.png",
  },
];

export const coursesChannelUrl = "https://www.youtube.com/@manucastrillon";
