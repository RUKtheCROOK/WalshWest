import type { Newsletter } from "./index";

export const introduction: Newsletter = {
  slug: "2026-04-introduction",
  title: "Welcome to the Weekly Market Notes",
  date: "2026-04-29",
  excerpt:
    "An introduction to the weekly market notes the Walsh West branch publishes — what they cover and how they track the calendar.",
  sections: [
    {
      blocks: [
        {
          type: "paragraph",
          text: "Walsh West publishes a short weekly note covering the public reports and meetings on the upcoming calendar. This is the first issue and serves as an introduction to the format. Future notes will cover the kinds of subjects described below, with the current week's market context attached.",
        },
      ],
    },
    {
      heading: "What you can expect to read",
      blocks: [
        {
          type: "paragraph",
          text: "A brief walk-through of the data points scheduled for the week ahead — USDA reports, FOMC meetings, EIA inventory releases, BLS economic data, and the relevant exchange and policy calendar. The intent is to summarize what is scheduled and what each release covers, not to predict what comes next.",
        },
        {
          type: "paragraph",
          text: "Notes on basis movement and cash-market conditions where they are relevant to producers in the region we serve. Plain-language explanations of any rule or contract changes from the exchanges that affect commercial accounts.",
        },
      ],
    },
    {
      heading: "What you will not find here",
      blocks: [
        {
          type: "paragraph",
          text: "We do not publish trade recommendations, price targets, or projections in these notes. Conversations about specific positions belong on a phone call with the branch, not in a weekly note.",
        },
        {
          type: "paragraph",
          text: "We do not include testimonials or performance claims of any kind. Past performance is not indicative of future results.",
        },
      ],
    },
    {
      heading: "How to use them",
      blocks: [
        {
          type: "paragraph",
          text: "Read the note alongside the calendar. If something we cover is relevant to your operation or trading plan, please reach out and we will work through it together. We respond to inquiries during U.S. market hours.",
        },
      ],
    },
  ],
};
