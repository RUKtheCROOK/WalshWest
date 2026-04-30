import Image from "next/image";
import Link from "next/link";
import { HedgerGlyph } from "@/components/illustrations/HedgerGlyph";
import { SpeculatorGlyph } from "@/components/illustrations/SpeculatorGlyph";
import { PageCta } from "@/components/PageCta";

type Detail = { label: string; body: string };

function DetailStrip({ items }: { items: Detail[] }) {
  return (
    <dl className="grid divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0">
      {items.map((item) => (
        <div key={item.label} className="space-y-2 px-0 py-5 md:px-6">
          <dt className="small-caps text-[0.65rem] tracking-wider text-muted-foreground">
            {item.label}
          </dt>
          <dd className="text-sm leading-relaxed text-text-emphasis">
            {item.body}
          </dd>
        </div>
      ))}
    </dl>
  );
}

const hedgerDetails: Detail[] = [
  {
    label: "Markets",
    body: "Grains, oilseeds, livestock, dairy, and energy contracts.",
  },
  {
    label: "What we look at",
    body: "Cash exposure, hedge windows, basis, and margin requirements.",
  },
  {
    label: "Cadence",
    body: "Reviews on whatever rhythm fits the operation.",
  },
];

const speculatorDetails: Detail[] = [
  {
    label: "Markets",
    body: "CME agricultural, energy, metals, and financial contracts.",
  },
  {
    label: "Setup",
    body: "Customer accounts are held at and cleared through Straits Financial LLC, the FCM.",
  },
  {
    label: "Access",
    body: "Direct phone access to a Series 3 broker during U.S. market hours.",
  },
];

const steps = [
  {
    n: "01",
    title: "A short conversation",
    body: "We learn about the operation or trading plan and discuss whether we are a fit. There is no obligation.",
  },
  {
    n: "02",
    title: "Account opens",
    body: "Customer accounts are held at and cleared through Straits Financial LLC, the FCM. We help with the paperwork.",
  },
  {
    n: "03",
    title: "Ongoing",
    body: "Execution, market context, and hedge or trade reviews on whatever rhythm works.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">
          <header className="grid gap-6 border-b pb-12 md:grid-cols-[1fr_auto] md:items-end md:gap-12">
            <div className="space-y-4">
              <p className="small-caps text-xs text-muted-foreground">
                What We Do
              </p>
              <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-text-emphasis md:text-5xl lg:text-6xl">
                Our Services
              </h1>
              <p className="max-w-2xl leading-relaxed text-muted-foreground">
                Two practices, one branch. Hedger accounts come to us with a
                position in the cash market and a question about price risk.
                Speculator accounts come to us for direct brokerage access and
                a broker who picks up the phone.
              </p>
            </div>
            <div className="hidden md:block">
              <p className="small-caps text-[0.65rem] tracking-widest text-muted-foreground">
                Practices
              </p>
              <p className="font-serif text-6xl font-bold tabular text-primary">
                02
              </p>
            </div>
          </header>

          <section className="grid gap-10 border-b py-16 md:grid-cols-12 md:gap-12 md:py-20">
            <div className="md:col-span-1">
              <p className="font-serif text-5xl font-bold tabular text-primary md:text-6xl">
                01
              </p>
            </div>
            <div className="space-y-8 md:col-span-6">
              <div className="flex items-start gap-4">
                <HedgerGlyph className="h-12 w-12 shrink-0 text-primary" />
                <div className="space-y-2">
                  <p className="small-caps text-xs text-muted-foreground">
                    For Commercial Producers
                  </p>
                  <h2 className="font-serif text-3xl font-semibold text-text-emphasis md:text-4xl">
                    For Hedgers
                  </h2>
                </div>
              </div>
              <p className="leading-relaxed text-muted-foreground">
                Producers, processors, grain elevators, and end-users have one thing
                in common: their margins move with commodity prices. We help our
                hedger clients identify where their operation is exposed, choose
                instruments suited to that exposure, and execute with the discipline
                a hedge program requires. Conversations begin with your operation,
                not with a product pitch. Hedging does not eliminate risk; it
                substitutes one form of risk for another.
              </p>
              <DetailStrip items={hedgerDetails} />
              <Link
                href="/hedging-calculators"
                className="small-caps inline-flex items-center gap-2 text-[0.7rem] tracking-wider text-primary transition-colors hover:text-accent"
              >
                See the math behind a hedge &rarr;
              </Link>
            </div>
            <div className="md:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-border md:aspect-[3/4]">
                <Image
                  src="/images/hedgers.png"
                  alt="A grain handling facility under overcast sky, with a concrete elevator tower, metal grain bins, and a portable auger."
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          <section className="grid gap-10 border-b py-16 md:grid-cols-12 md:gap-12 md:py-20">
            <div className="md:col-span-5 md:order-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-border md:aspect-[3/4]">
                <Image
                  src="/images/speculators.png"
                  alt="A bulk cargo ship moored alongside a grain export terminal at twilight, with conveyor gantries and silos lit against a deep blue sky."
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-1 md:order-2">
              <p className="font-serif text-5xl font-bold tabular text-primary md:text-6xl">
                02
              </p>
            </div>
            <div className="space-y-8 md:col-span-6 md:order-3">
              <div className="flex items-start gap-4">
                <SpeculatorGlyph className="h-12 w-12 shrink-0 text-primary" />
                <div className="space-y-2">
                  <p className="small-caps text-xs text-muted-foreground">
                    For Informed Traders
                  </p>
                  <h2 className="font-serif text-3xl font-semibold text-text-emphasis md:text-4xl">
                    For Speculators
                  </h2>
                </div>
              </div>
              <p className="leading-relaxed text-muted-foreground">
                For active traders, we provide direct brokerage access to the major
                futures and options markets, including agricultural, energy, metals,
                and financial contracts. Account holders work with a Series 3
                licensed broker rather than a call center. Speculative trading is
                not suitable for every investor and can result in substantial loss.
              </p>
              <DetailStrip items={speculatorDetails} />
              <Link
                href="/calendar"
                className="small-caps inline-flex items-center gap-2 text-[0.7rem] tracking-wider text-primary transition-colors hover:text-accent"
              >
                See the markets calendar &rarr;
              </Link>
            </div>
          </section>

          <section className="space-y-10 py-16 md:py-20">
            <div className="space-y-3">
              <p className="small-caps text-xs text-muted-foreground">
                How It Starts
              </p>
              <h2 className="font-serif text-3xl font-semibold text-text-emphasis md:text-4xl">
                Working with the branch
              </h2>
              <p className="max-w-2xl leading-relaxed text-muted-foreground">
                The path from first conversation to active account is short.
                Three steps cover most of it.
              </p>
            </div>
            <ol className="grid gap-px bg-border md:grid-cols-3">
              {steps.map((s) => (
                <li
                  key={s.n}
                  className="space-y-3 border border-border bg-card p-6 md:p-8"
                >
                  <p className="font-serif text-3xl font-bold tabular text-primary">
                    {s.n}
                  </p>
                  <h3 className="font-serif text-lg font-semibold text-text-emphasis md:text-xl">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <aside
            aria-label="Risk disclosure"
            className="space-y-3 border border-border bg-surface-subtle p-6 md:p-8"
          >
            <p className="small-caps text-[0.65rem] tracking-wider text-text-emphasis">
              Disclosure
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Futures and options on futures involve substantial risk of loss
              and are not suitable for all investors. Past performance is not
              indicative of future results. Hedging does not eliminate risk;
              it substitutes one form of risk for another. Speculative trading
              is not suitable for every investor and can result in substantial
              loss. Walsh West is a branch office of Walsh Trading, Inc., a
              guaranteed introducing broker. Customer accounts are held at and
              cleared through Straits Financial LLC, a registered Futures
              Commission Merchant and NFA member.
            </p>
          </aside>
        </div>
      </div>

      <PageCta
        eyebrow="Run the Numbers"
        title="See the math behind a hedge."
        body="Five short educational calculators — basis, hedge size, short and long hedge net price, and initial margin. Pure arithmetic on your inputs. No projections, no predictions."
        primary={{ href: "/hedging-calculators", label: "Open the calculators" }}
        secondary={{ href: "/contact", label: "Send a message" }}
        variant="navy"
      />
    </>
  );
}
