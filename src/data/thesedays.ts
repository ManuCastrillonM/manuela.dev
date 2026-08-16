export const thesedaysContent = {
  heading: "Now",
  subtitle: "A few things I'm focused on right now.",
};

export type ThesedaysIcon = "award" | "building" | "mic" | "cap" | "disney";

export interface ThesedaysItem {
  icon: ThesedaysIcon;
  accent: "lavender" | "yellow" | "green";
  title: string;
  description: string;
}

export const thesedaysItems: ThesedaysItem[] = [
  {
    icon: "award",
    accent: "lavender",
    title: "Role Model 2026 by Equals NL",
    description: "Honored to be recognized.",
  },
  {
    icon: "building",
    accent: "yellow",
    title: "Building at Uber in Amsterdam",
    description: "Building web experiences.",
  },
  {
    icon: "mic",
    accent: "green",
    title: "Speaking",
    description: "Sharing ideas on stage and in communities.",
  },
  {
    icon: "cap",
    accent: "lavender",
    title: "Teaching",
    description: "Helping others learn and grow on the web.",
  },
  {
    icon: "disney",
    accent: "yellow",
    title: "Disney API",
    description: "Building and maintaining my open-source side project.",
  },
];
