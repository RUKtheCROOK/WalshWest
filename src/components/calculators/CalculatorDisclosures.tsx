export function CalculatorDisclosures() {
  return (
    <aside
      aria-label="Calculator disclosures"
      className="space-y-4 border-l-2 border-primary bg-surface-subtle p-6 text-sm leading-relaxed text-muted-foreground md:p-8"
    >
      <p className="small-caps text-[0.7rem] tracking-wider text-text-emphasis">
        Educational Tools — Read Before Use
      </p>
      <p>
        The calculators on this page are provided for{" "}
        <strong className="text-text-emphasis">
          educational and illustrative purposes only
        </strong>
        . They perform arithmetic on the inputs you provide. They do not
        constitute investment advice, trading recommendations, or a solicitation
        to trade futures or options on futures.
      </p>
      <p>
        All values shown are estimates. Actual results will vary based on
        execution prices, commissions, fees, basis fluctuations, slippage,
        liquidity, and other factors that the calculators do not account for.
      </p>
      <p>
        <strong className="text-text-emphasis">
          Futures and options on futures involve substantial risk of loss and
          are not suitable for all investors.
        </strong>{" "}
        You should carefully consider whether trading is appropriate for your
        financial situation. Hedging does not eliminate risk; it substitutes one
        form of risk for another. Past performance is not indicative of future
        results.
      </p>
      <p>
        For a conversation about your specific situation, contact Walsh West.
        Walsh West is a branch office of Walsh Trading, Inc., a guaranteed
        introducing broker. Customer accounts are held at and cleared through
        Straits Financial LLC, a registered Futures Commission Merchant and NFA
        member.
      </p>
    </aside>
  );
}
