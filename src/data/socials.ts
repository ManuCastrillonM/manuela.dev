export interface Social {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "youtube" | "instagram" | "x" | "email";
}

export const socials: Social[] = [
  { label: "GitHub", url: "https://github.com/ManuCastrillonM", icon: "github" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/manuelacastrillon", icon: "linkedin" },
  { label: "YouTube", url: "https://www.youtube.com/@manucastrillon", icon: "youtube" },
  { label: "Instagram", url: "https://www.instagram.com/manucastrillonm", icon: "instagram" },
  { label: "X", url: "https://twitter.com/manucastrillonm", icon: "x" },
];
