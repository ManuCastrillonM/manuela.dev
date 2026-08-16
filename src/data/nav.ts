export interface NavLink {
  label: string;
  to: string;
  activePaths?: string[];
}

export const navLinks: NavLink[] = [
  { label: "About", to: "/#about" },
  { label: "Learn", to: "/#learn", activePaths: ["/courses"] },
  { label: "Talks", to: "/talks", activePaths: ["/talks"] },
  { label: "Videos", to: "/#videos" },
  { label: "Projects", to: "/#project" },
  { label: "Contact", to: "/#connect" },
];

export const nav = {
  logoAriaLabel: "Manuela Castrillón, back to top",
  primaryAriaLabel: "Primary",
  mobileAriaLabel: "Mobile",
  openMenuLabel: "Open menu",
  closeMenuLabel: "Close menu",
  ctaLabel: "Let's connect",
};
