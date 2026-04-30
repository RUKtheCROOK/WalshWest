import { introduction } from "./2026-04-introduction";
import { weekOfApril19 } from "./2026-04-26-weekly-note";

export type NewsletterBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | {
      type: "table";
      caption?: string;
      headers: string[];
      rows: string[][];
    }
  | { type: "signoff"; lines: string[] };

export type NewsletterSection = {
  heading?: string;
  blocks: NewsletterBlock[];
};

export type Newsletter = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  byline?: { preparedBy: string; phone?: string };
  sections: NewsletterSection[];
};

const all: Newsletter[] = [introduction, weekOfApril19];

export function getAllNewsletters(): Newsletter[] {
  return [...all].sort((a, b) => b.date.localeCompare(a.date));
}

export function getNewsletterBySlug(slug: string): Newsletter | undefined {
  return all.find((n) => n.slug === slug);
}

export function getNewsletterSlugs(): string[] {
  return all.map((n) => n.slug);
}
