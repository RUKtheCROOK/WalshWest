/**
 * Events/Calendar source wrapper (TBD)
 * 
 * TODO: Decide on event source (Google Calendar API, static MDX, or CMS)
 * For now, this returns placeholder event data.
 */

export type Event = {
  id: string;
  title: string;
  description: string;
  date: Date;
  location?: string;
  link?: string;
};

export async function getUpcomingEvents(): Promise<Event[]> {
  // TODO: Implement actual event source integration
  return [
    {
      id: "placeholder-1",
      title: "Market Briefing (Placeholder)",
      description: "Section copy pending review.",
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
      location: "Online",
    },
  ];
}
