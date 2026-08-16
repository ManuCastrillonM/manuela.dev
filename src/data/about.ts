export const about = {
  heading: "About Manuela",
  paragraphs: [
    "I'm a software engineer based in Amsterdam, originally from Medellín, Colombia.",
    "I care about building useful, inclusive and delightful experiences on the web. I also love teaching, speaking at events and helping more people feel at home in tech.",
  ],
  moreUrl: "#about",
  ctaLabel: "More about me",
  portraitAlt: "Manuela Castrillón sitting and smiling",
};

export interface Credential {
  title: string;
  subtitle: string;
  icon: "google" | "wtm" | "github" | "medal";
}

export const credentials: Credential[] = [
  { title: "Google Developer Expert", subtitle: "Web Technologies", icon: "google" },
  { title: "Women Techmakers", subtitle: "Ambassador", icon: "wtm" },
  { title: "GitHub Campus Expert", subtitle: "Alumni", icon: "github" },
  { title: "Role Model 2026", subtitle: "Equals NL", icon: "medal" },
];
