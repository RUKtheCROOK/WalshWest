import type { Metadata } from "next";
import Link from "next/link";
import { BasisCalculator } from "@/components/calculators/BasisCalculator";
import { HedgeRatioCalculator } from "@/components/calculators/HedgeRatioCalculator";
import { ShortHedgeCalculator } from "@/components/calculators/ShortHedgeCalculator";
import { LongHedgeCalculator } from "@/components/calculators/LongHedgeCalculator";
import { MarginEstimator } from "@/components/calculators/MarginEstimator";
import { CalculatorDisclosures } from "@/components/calculators/CalculatorDisclosures";
import { PageCta } from "@/components/PageCta";

export const metadata: Metadata = {
  title: "Hedging Calculators — Walsh West",
  description:
    "Educational calculators for basis, hedge ratio, short and long hedge net price, and initial margin. For illustrative purposes only.",
};

const calculators = [
  { id: "basis", label: "Basis" },
  { id: "hedge-ratio", label: "Number of Contracts" },
  { id: "short-hedge", label: "Short Hedge Net Price" },
  { id: "long-hedge", label: "Long Hedge Net Price" },
  { id: "margin", label: "Initial Margin" },
];

export default function HedgingCalculatorsPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-5xl space-y-12">
          <header className="space-y-4 border-b pb-8">
            <p className="small-caps text-xs text-muted-foreground">
              Educational Tools
            </p>
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-text-emphasis md:text-5xl lg:text-6xl">
              Hedging Calculators
            </h1>
            <p className="max-w-3xl leading-relaxed text-muted-foreground">
              Five short calculators for the math behind a hedge. Each performs
              arithmetic on the inputs you provide. They are not trade
              recommendations and they do not predict future prices. Read the
              disclosures below before using them.
            </p>
          </header>

          <CalculatorDisclosures />

          <nav aria-label="Calculator index" className="border-y py-6">
            <p className="small-caps mb-4 text-xs text-muted-foreground">
              On this page
            </p>
            <ol className="grid gap-2 text-sm md:grid-cols-2 lg:grid-cols-3">
              {calculators.map((c, i) => (
                <li key={c.id}>
                  <Link
                    href={`#${c.id}`}
                    className="group inline-flex items-baseline gap-3 text-text-emphasis transition-colors hover:text-primary"
                  >
                    <span className="tabular text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="border-b border-transparent group-hover:border-primary">
                      {c.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-12">
            <BasisCalculator />
            <HedgeRatioCalculator />
            <ShortHedgeCalculator />
            <LongHedgeCalculator />
            <MarginEstimator />
          </div>
        </div>
      </div>

      <PageCta
        eyebrow="One More Step"
        title="Run your specific situation past us."
        body="A calculator does the arithmetic. A conversation tells you whether the math fits your operation. Reach out and we will walk through it together."
        primary={{ href: "/contact", label: "Send a message" }}
        secondary={{ href: "/services", label: "About our services" }}
        variant="navy"
      />
    </>
  );
}
