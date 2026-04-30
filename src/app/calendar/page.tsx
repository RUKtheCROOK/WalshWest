import Link from "next/link";
import {
  getUpcomingMarketEvents,
  RECURRING_RELEASES,
  type MarketEvent,
} from "@/lib/calendar";
import { CalendarGlyph } from "@/components/illustrations/CalendarGlyph";
import { Button } from "@/components/ui/button";

const categoryStyles: Record<MarketEvent["category"], string> = {
  Agriculture: "border-primary text-primary",
  "Monetary Policy": "border-text-emphasis text-text-emphasis",
  Energy: "border-accent text-accent",
  Economic: "border-muted-foreground text-muted-foreground",
  Markets: "border-muted-foreground text-muted-foreground",
  "Walsh West": "border-primary bg-primary text-primary-foreground",
};

function formatMonthYear(d: Date): string {
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long" });
}

function formatDate(d: Date): string {
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function formatWeekday(d: Date): string {
  return d.toLocaleDateString("en-US", { weekday: "long" });
}

export default async function CalendarPage() {
  const events = await getUpcomingMarketEvents();

  const grouped: { month: string; events: MarketEvent[] }[] = [];
  for (const event of events) {
    const month = formatMonthYear(event.date);
    const last = grouped[grouped.length - 1];
    if (last && last.month === month) {
      last.events.push(event);
    } else {
      grouped.push({ month, events: [event] });
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-4xl space-y-12">
          <header className="space-y-4 border-b pb-8">
            <p className="small-caps text-xs text-muted-foreground">Calendar</p>
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-text-emphasis md:text-5xl lg:text-6xl">
              Reports &amp; Events to Watch
            </h1>
            <p className="max-w-2xl leading-relaxed text-muted-foreground">
              A short calendar of public reports and meetings that move the
              markets we work in — USDA crop and livestock data, FOMC meetings,
              EIA energy releases, and the economic calendar from BLS. Listed
              for awareness, not as a trading guide.
            </p>
          </header>

          <aside className="border-l-2 border-muted bg-surface-subtle p-5 text-xs leading-relaxed text-muted-foreground">
            <p className="small-caps mb-2 text-[0.65rem] tracking-wider text-text-emphasis">
              About this calendar
            </p>
            <p>
              Dates and times come from the publishing agency&apos;s schedule
              and may shift due to government shutdowns, holidays, or agency
              rescheduling. Verify with the source link before scheduling
              around a release. Items marked <em>tentative</em> are based on
              the publisher&apos;s standard recurring pattern but were not yet
              listed individually on the publisher&apos;s page at time of
              writing. Inclusion of a release does not imply a recommendation
              to trade around it. Walsh West does not predict the outcome of
              any of these reports.
            </p>
          </aside>

          <section className="space-y-6">
            <div className="space-y-2">
              <p className="small-caps text-xs text-muted-foreground">
                Recurring Releases
              </p>
              <h2 className="font-serif text-2xl font-semibold text-text-emphasis md:text-3xl">
                Weekly cadence
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Releases that publish on a fixed weekly schedule. Specific
                dates are not listed individually below — refer to each
                publisher for the next release.
              </p>
            </div>
            <ul className="grid gap-px bg-border md:grid-cols-2">
              {RECURRING_RELEASES.map((r) => (
                <li
                  key={r.id}
                  className="border border-border bg-card p-6 md:p-7"
                >
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span
                      className={`small-caps inline-flex items-center border px-2 py-0.5 text-[0.6rem] tracking-wider ${categoryStyles[r.category]}`}
                    >
                      {r.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {r.publisher}
                    </span>
                  </div>
                  <h3 className="mb-1 font-serif text-lg font-semibold text-text-emphasis">
                    {r.title}
                  </h3>
                  <p className="tabular mb-3 text-xs italic text-muted-foreground">
                    {r.cadence}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {r.description}
                  </p>
                  {r.link && (
                    <a
                      href={r.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="small-caps mt-4 inline-block text-[0.65rem] tracking-wider text-primary transition-colors hover:text-accent"
                    >
                      Source &rarr;
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <aside
            aria-label="Weekly market notes"
            className="grid gap-6 border-l-2 border-primary bg-surface-subtle p-6 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:p-10"
          >
            <div className="space-y-3">
              <p className="small-caps text-xs text-muted-foreground">
                Weekly Market Notes
              </p>
              <h2 className="font-serif text-2xl font-semibold text-text-emphasis md:text-3xl">
                Get a short weekly note that walks through the calendar.
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Each week we publish a brief note covering the public reports
                and meetings on the upcoming calendar — what is scheduled, who
                publishes it, and the kind of market context that is useful
                before the next session opens.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Button asChild>
                <Link href="/newsletter">Subscribe to weekly notes</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/newsletter">Read past notes</Link>
              </Button>
            </div>
          </aside>

          <div className="space-y-3 border-t pt-12">
            <p className="small-caps text-xs text-muted-foreground">
              Scheduled Dates
            </p>
            <h2 className="font-serif text-2xl font-semibold text-text-emphasis md:text-3xl">
              Discrete releases by month
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Monthly, quarterly, and one-off releases — government data,
              meetings, and policy decisions.
            </p>
          </div>

          {grouped.length === 0 ? (
            <div className="border border-dashed border-border bg-surface-subtle p-10 text-center">
              <p className="font-serif text-lg text-text-emphasis">
                Calendar updating
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Upcoming dates will appear here as they are confirmed by the
                publishers.
              </p>
            </div>
          ) : (
            grouped.map(({ month, events: monthEvents }) => (
              <section key={month} className="space-y-6">
                <h2 className="font-serif text-2xl font-semibold text-text-emphasis md:text-3xl">
                  {month}
                </h2>
                <ul className="divide-y divide-border border-y">
                  {monthEvents.map((event) => (
                    <li key={event.id} className="py-6 md:py-7">
                      <article className="grid gap-4 md:grid-cols-[160px_1fr] md:gap-8">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-text-emphasis">
                            <CalendarGlyph className="h-3.5 w-3.5 text-primary" />
                            <time
                              dateTime={event.date.toISOString().slice(0, 10)}
                              className="tabular text-sm font-medium"
                            >
                              {formatDate(event.date)}
                            </time>
                          </div>
                          <p className="tabular text-xs text-muted-foreground">
                            {formatWeekday(event.date)}
                          </p>
                          {event.time && (
                            <p className="tabular text-xs text-muted-foreground">
                              {event.time}
                            </p>
                          )}
                        </div>
                        <div className="space-y-3">
                          <div className="flex flex-wrap items-center gap-3">
                            <span
                              className={`small-caps inline-flex items-center border px-2 py-0.5 text-[0.6rem] tracking-wider ${categoryStyles[event.category]}`}
                            >
                              {event.category}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {event.publisher}
                            </span>
                            {event.cadence && (
                              <span className="text-xs italic text-muted-foreground">
                                · {event.cadence}
                              </span>
                            )}
                            {event.tentative && (
                              <span className="small-caps inline-flex items-center border border-muted-foreground/40 px-2 py-0.5 text-[0.6rem] tracking-wider text-muted-foreground">
                                Tentative
                              </span>
                            )}
                          </div>
                          <h3 className="font-serif text-lg font-semibold text-text-emphasis md:text-xl">
                            {event.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {event.description}
                          </p>
                          {event.link && (
                            <a
                              href={event.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="small-caps inline-block text-[0.65rem] tracking-wider text-primary transition-colors hover:text-accent"
                            >
                              Source &rarr;
                            </a>
                          )}
                        </div>
                      </article>
                    </li>
                  ))}
                </ul>
              </section>
            ))
          )}
        </div>
      </div>
    </>
  );
}
