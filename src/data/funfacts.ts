export const funFactsContent = {
  heading: "A few things you might not guess",
  closingPlain: "One of these isn’t true.",
  closingExpressive: "Any guesses?",
};

export type FunFactAccent = "gaming" | "chess" | "plants" | "music";

export interface FunFact {
  id: string;
  accent: FunFactAccent;
  title: string;
  description: {
    before: string;
    highlight: string;
    after: string;
  };
}

export const funFacts: FunFact[] = [
  {
    id: "gaming",
    accent: "gaming",
    title: "Video game tournaments",
    description: {
      before: "Organized events with ",
      highlight: "100+",
      after: " competitors.",
    },
  },
  {
    id: "chess",
    accent: "chess",
    title: "Chess tournaments",
    description: {
      before: "Competed when I was ",
      highlight: "younger",
      after: ".",
    },
  },
  {
    id: "plants",
    accent: "plants",
    title: "Succulent obsession",
    description: {
      before: "Once collected ",
      highlight: "60+",
      after: " different species.",
    },
  },
  {
    id: "music",
    accent: "music",
    title: "Symphonic orchestra",
    description: {
      before: "Was part of a symphonic ",
      highlight: "orchestra",
      after: ".",
    },
  },
];
