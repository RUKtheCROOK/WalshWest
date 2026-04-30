export function NewsletterDisclosures() {
  return (
    <aside
      aria-label="Disclosure"
      className="space-y-3 border-l-2 border-primary bg-surface-subtle p-6 text-xs leading-relaxed text-muted-foreground"
    >
      <p className="small-caps text-[0.7rem] tracking-wider text-text-emphasis">
        Disclosure
      </p>
      <p>
        Walsh Trading, Inc. is registered as a Guaranteed Introducing Broker
        with the Commodity Futures Trading Commission and an NFA Member.
      </p>
      <p>
        Futures and options trading involves substantial risk and is not
        suitable for all investors. Therefore, individuals should carefully
        consider their financial condition in deciding whether to trade. Option
        traders should be aware that the exercise of a long option will result
        in a futures position. The valuation of futures and options may
        fluctuate, and as a result, clients may lose more than their original
        investment. The information contained on this site is the opinion of
        the writer or was obtained from sources cited within the commentary.
        The impact on market prices due to seasonal or market cycles and
        current news events may already be reflected in market prices.{" "}
        <strong className="text-text-emphasis">
          PAST PERFORMANCE IS NOT NECESSARILY INDICATIVE OF FUTURE RESULTS.
        </strong>
      </p>
      <p>
        All information, communications, publications, and reports, including
        this specific material, used and distributed by Walsh Trading, Inc.
        (&ldquo;WTI&rdquo;) shall not be construed as a solicitation for
        entering into a derivatives transaction. WTI does not distribute research
        reports, employ research analysts, or maintain a research department as
        defined in CFTC Regulation 1.71.
      </p>
    </aside>
  );
}
