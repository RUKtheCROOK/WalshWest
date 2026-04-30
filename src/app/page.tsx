import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HedgerGlyph } from "@/components/illustrations/HedgerGlyph";
import { SpeculatorGlyph } from "@/components/illustrations/SpeculatorGlyph";
import { CalendarGlyph } from "@/components/illustrations/CalendarGlyph";
import { PageCta } from "@/components/PageCta";
import { getAllNewsletters } from "@/content/newsletters";
import { getUpcomingMarketEvents } from "@/lib/calendar";

export default async function HomePage() {
  const latestNote = getAllNewsletters()[0];
  const upcomingEvents = await getUpcomingMarketEvents(3);

  return (
    <div>
      <section className="relative overflow-hidden bg-primary">
        <Image
          src="/images/hero.png"
          alt="A grain elevator complex on the plains at sunset, with an empty service road in the foreground."
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary to-transparent"
        />
        <div className="relative container mx-auto px-4 py-24 md:px-6 md:py-40 lg:py-48">
          <div className="mx-auto max-w-4xl">
            <p className="small-caps mb-4 text-sm text-primary-foreground/80">
              Branch Office
            </p>
            <h1 className="mb-6 font-serif text-5xl font-bold leading-tight text-primary-foreground drop-shadow-md md:text-6xl lg:text-7xl">
              Walsh West
            </h1>
            <p className="mb-3 text-xl text-primary-foreground/95 md:text-2xl">
              A branch office of Walsh Trading, Inc.
            </p>
            <p className="mb-12 max-w-2xl text-base leading-relaxed text-primary-foreground/90">
              We work with commercial hedgers and active speculators in the futures
              and options markets, backed by the resources of an established
              registered firm.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="border border-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-background py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <p className="small-caps mb-6 text-xs text-muted-foreground">
              Services
            </p>
            <h2 className="mb-4 font-serif text-3xl font-bold text-text-emphasis md:text-4xl">
              What we do.
            </h2>
            <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Two kinds of accounts use the futures and options markets, and they
              come to us with different questions. We work with both.
            </p>
            <div className="grid gap-px bg-border md:grid-cols-2">
              <Link
                href="/services"
                className="group relative block border border-border bg-card p-8 transition-all duration-200 hover:border-primary hover:bg-surface-subtle hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <HedgerGlyph className="mb-6 h-12 w-12 text-primary transition-transform duration-200 group-hover:-translate-y-0.5" />
                <h3 className="mb-3 text-xl font-semibold text-text-emphasis transition-colors group-hover:text-primary">
                  For Hedgers
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Producers, processors, and end-users with price exposure on
                  their balance sheet. We help identify where your operation is
                  exposed and execute the hedge with discipline.
                </p>
                <p className="small-caps mt-6 text-[0.65rem] tracking-wider text-primary opacity-60 transition-opacity group-hover:opacity-100">
                  Read about our services &rarr;
                </p>
              </Link>
              <Link
                href="/services"
                className="group relative block border border-border bg-card p-8 transition-all duration-200 hover:border-primary hover:bg-surface-subtle hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <SpeculatorGlyph className="mb-6 h-12 w-12 text-primary transition-transform duration-200 group-hover:-translate-y-0.5" />
                <h3 className="mb-3 text-xl font-semibold text-text-emphasis transition-colors group-hover:text-primary">
                  For Speculators
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Active traders who want direct brokerage access and the
                  perspective that comes from working alongside commercial
                  participants every day.
                </p>
                <p className="small-caps mt-6 text-[0.65rem] tracking-wider text-primary opacity-60 transition-opacity group-hover:opacity-100">
                  Read about our services &rarr;
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {(latestNote || upcomingEvents.length > 0) && (
        <section className="border-b bg-surface-subtle py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-12 md:grid-cols-2 md:gap-16">
                {latestNote && (
                  <div className="space-y-4">
                    <p className="small-caps text-xs text-muted-foreground">
                      Latest Note
                    </p>
                    <Link
                      href={`/newsletter/${latestNote.slug}`}
                      className="group block border border-border bg-card p-6 transition-all duration-200 hover:border-primary hover:bg-background hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <time
                        dateTime={latestNote.date}
                        className="tabular mb-3 block text-sm text-muted-foreground"
                      >
                        {new Date(latestNote.date).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "long", day: "numeric" },
                        )}
                      </time>
                      <h3 className="mb-3 font-serif text-2xl font-semibold text-text-emphasis transition-colors group-hover:text-primary md:text-3xl">
                        {latestNote.title}
                      </h3>
                      <p className="mb-4 leading-relaxed text-muted-foreground">
                        {latestNote.excerpt}
                      </p>
                      <p className="small-caps text-[0.65rem] tracking-wider text-primary transition-transform duration-200 group-hover:translate-x-1">
                        Read note &rarr;
                      </p>
                    </Link>
                  </div>
                )}

                {upcomingEvents.length > 0 && (
                  <div className="space-y-4">
                    <p className="small-caps text-xs text-muted-foreground">
                      Reports to Watch
                    </p>
                    <ul className="divide-y divide-border border-y border-border">
                      {upcomingEvents.map((event) => (
                        <li key={event.id}>
                          <Link
                            href="/calendar"
                            className="group block py-4 transition-colors duration-200 hover:bg-background focus-visible:outline-none focus-visible:bg-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                          >
                            <div className="flex items-center gap-2 text-text-emphasis">
                              <CalendarGlyph className="h-3.5 w-3.5 text-primary" />
                              <time className="tabular text-xs font-medium">
                                {event.date.toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                })}
                              </time>
                            </div>
                            <h3 className="mt-2 text-base font-semibold text-text-emphasis transition-colors group-hover:text-primary md:text-lg">
                              {event.title}
                            </h3>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {event.publisher}
                              {event.cadence ? ` · ${event.cadence}` : ""}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/calendar"
                      className="small-caps inline-flex items-center gap-2 text-[0.65rem] tracking-wider text-primary transition-all duration-200 hover:text-accent hover:gap-3"
                    >
                      See full calendar &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <PageCta
        eyebrow="Get in Touch"
        title="Talk through your hedge or your trading plan."
        body="A short conversation tells us whether we are a fit for what you are working on. There is no obligation, and account decisions stay with you."
        primary={{ href: "/contact", label: "Send a message" }}
        secondary={{ href: "/newsletter", label: "Subscribe to weekly notes" }}
        variant="navy"
      />

      <section className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl border-l-2 border-primary pl-6">
            <h2 className="mb-3 small-caps text-xs text-text-emphasis">
              Risk Disclosure
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Futures and options on futures involve substantial risk of loss and are not suitable for
              all investors. Past performance is not indicative of future results. Please carefully
              consider whether trading is appropriate for your financial situation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
