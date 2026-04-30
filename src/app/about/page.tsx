import Image from "next/image";
import { PortraitPlaceholder } from "@/components/illustrations/PortraitPlaceholder";
import { PageCta } from "@/components/PageCta";

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate flex h-[60vh] min-h-[440px] flex-col justify-end overflow-hidden bg-background md:h-[70vh]">
        <Image
          src="/images/region.png"
          alt="A wide farmland landscape in late afternoon, with cultivated fields stretching to a flat horizon and a row of trees in the middle distance."
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-3/4 bg-gradient-to-t from-background via-background/85 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 -z-10 w-1/2 bg-gradient-to-r from-background/40 to-transparent md:w-1/3"
        />
        <div className="container mx-auto px-4 pb-10 md:px-6 md:pb-16 lg:pb-20">
          <div className="mx-auto max-w-4xl space-y-3">
            <p className="small-caps text-xs text-muted-foreground">Who We Are</p>
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-text-emphasis md:text-5xl lg:text-6xl">
              About Walsh West
            </h1>
            <p className="max-w-xl pt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              The regional branch of Walsh Trading, Inc., serving commercial
              hedgers and active speculators in the futures and options
              markets.
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 pb-12 md:px-6 md:pb-20">
        <div className="mx-auto max-w-4xl space-y-16 pt-4 md:pt-6">

        <section className="space-y-6 border-b pb-16">
          <div className="space-y-2">
            <p className="small-caps text-xs text-muted-foreground">Branch Office</p>
            <h2 className="font-serif text-3xl font-semibold text-text-emphasis md:text-4xl">
              Our Branch
            </h2>
          </div>
          <div className="prose prose-sm max-w-none leading-relaxed text-muted-foreground md:prose-base lg:columns-2 lg:gap-12">
            <p>
              Walsh West is the regional branch of Walsh Trading, Inc., a
              guaranteed introducing broker. Customer accounts are held at and
              cleared through Straits Financial LLC, a registered Futures
              Commission Merchant and NFA member. The branch was opened to give commercial
              producers and active traders in the region a local point of
              contact for execution, market color, and risk-management
              conversations.
            </p>
            <p>
              The work is straightforward. Hedgers come to us when they need to
              think clearly about price exposure in their operation. Speculators
              come to us when they want direct access to the futures and options
              markets and a broker who picks up the phone. Either way, every
              account is held at and cleared through Straits Financial LLC.
            </p>
          </div>
        </section>

        <section className="space-y-6 border-b pb-16">
          <div className="space-y-2">
            <p className="small-caps text-xs text-muted-foreground">Leadership</p>
            <h2 className="font-serif text-3xl font-semibold text-text-emphasis md:text-4xl">
              The Branch Manager
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-[260px_1fr] md:gap-12">
            <div className="border border-border text-primary">
              <PortraitPlaceholder />
            </div>
            <div className="prose prose-sm max-w-none leading-relaxed text-muted-foreground md:prose-base">
              <p>
                The branch is led by a Series 3 and Series 30 licensed broker
                with experience working alongside commercial hedgers and
                speculative accounts. The role of the branch manager is to
                translate market conditions into language a producer or trader
                can use, and to make sure every account decision is grounded in
                a clear understanding of the risk involved.
              </p>
            </div>
          </div>
        </section>

          <section className="border-l-2 border-primary bg-surface-subtle p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-[140px_1fr] md:items-start md:gap-10">
              <Image
                src="/images/walsh-trading-mark.png"
                alt=""
                width={182}
                height={147}
                className="h-auto w-32"
              />
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-semibold text-text-emphasis">
                  Walsh Trading, Inc.
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Walsh West is a branch office of Walsh Trading, Inc., a
                  guaranteed introducing broker. Customer accounts and funds
                  are held at and cleared through Straits Financial LLC, the
                  FCM.
                </p>
                <a
                  href="https://walshtrading.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-accent"
                >
                  Visit Walsh Trading &rarr;
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <PageCta
        eyebrow="Continue"
        title="See what working with the branch looks like."
        body="From hedge programs for commercial operations to direct brokerage for active traders, our services pages describe the kinds of accounts we work with day to day."
        primary={{ href: "/services", label: "Read about our services" }}
        secondary={{ href: "/contact", label: "Send a message" }}
        variant="light"
      />
    </>
  );
}
