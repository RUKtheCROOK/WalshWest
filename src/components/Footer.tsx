import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t bg-surface-subtle">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 border-b pb-12 md:grid-cols-4 lg:gap-12">
          <div>
            <Link
              href="/"
              className="mb-4 flex items-center gap-3 transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/walsh-west-mark.png"
                alt=""
                width={736}
                height={463}
                className="h-12 w-auto"
              />
              <span className="font-serif text-xl font-bold tracking-tight text-text-emphasis">
                Walsh West
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A branch office of Walsh Trading, Inc.
            </p>
          </div>
          <div>
            <h3 className="small-caps mb-4 text-xs text-text-emphasis">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/calendar"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Calendar
                </Link>
              </li>
              <li>
                <Link
                  href="/newsletter"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="small-caps mb-4 text-xs text-text-emphasis">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link
                  href="/newsletter"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Subscribe
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="small-caps mb-4 text-xs text-text-emphasis">
              Parent Firm
            </h3>
            <a
              href="https://walshtrading.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 flex items-center gap-2.5 transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/walsh-trading-mark.png"
                alt=""
                width={182}
                height={147}
                className="h-8 w-auto"
              />
              <span className="font-serif text-base font-bold tracking-tight text-text-emphasis">
                Walsh Trading, Inc.
              </span>
            </a>
            <p className="text-xs text-muted-foreground">
              Guaranteed Introducing Broker, NFA Member
            </p>
          </div>
        </div>
        <div className="mt-8 space-y-6 pt-8">
          <div className="space-y-3 border-l-2 border-primary pl-6">
            <p className="small-caps text-[0.65rem] tracking-wider text-text-emphasis">
              Disclosure
            </p>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Walsh West is a branch office of Walsh Trading, Inc. Walsh
              Trading, Inc. is registered as a Guaranteed Introducing Broker
              with the Commodity Futures Trading Commission and an NFA Member.
              Customer accounts are held at and cleared through Straits
              Financial LLC, a registered Futures Commission Merchant and NFA
              Member.
            </p>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Futures and options trading involves substantial risk and is not
              suitable for all investors. Therefore, individuals should
              carefully consider their financial condition in deciding whether
              to trade. Option traders should be aware that the exercise of a
              long option will result in a futures position. The valuation of
              futures and options may fluctuate, and as a result, clients may
              lose more than their original investment. The information
              contained on this site is the opinion of the writer or was
              obtained from sources cited within the commentary. The impact on
              market prices due to seasonal or market cycles and current news
              events may already be reflected in market prices.{" "}
              <span className="font-semibold text-foreground">
                PAST PERFORMANCE IS NOT NECESSARILY INDICATIVE OF FUTURE
                RESULTS.
              </span>
            </p>
            <p className="text-xs leading-relaxed text-muted-foreground">
              All information, communications, publications, and reports,
              including this specific material, used and distributed by Walsh
              Trading, Inc. (&ldquo;WTI&rdquo;) shall be construed as a
              solicitation for entering into a derivatives transaction. WTI
              does not distribute research reports, employ research analysts,
              or maintain a research department as defined in CFTC Regulation
              1.71.
            </p>
          </div>
          <div className="hairline" />
          <div className="flex flex-col justify-between gap-4 text-xs text-muted-foreground md:flex-row">
            <p>&copy; {new Date().getFullYear()} Walsh West. All rights reserved.</p>
            <p className="tabular">NFA ID: XXXXXXXXX</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
