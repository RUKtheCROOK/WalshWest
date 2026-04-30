"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CalculatorShell,
  ResultBlock,
  IllustrativeNote,
} from "./CalculatorShell";

const parse = (s: string): number | null => {
  if (s.trim() === "") return null;
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
};

const money = (n: number) =>
  `${n < 0 ? "-" : ""}$${Math.abs(n).toFixed(4).replace(/0+$/, "").replace(/\.$/, "")}`;

export function ShortHedgeCalculator() {
  const [initialFutures, setInitialFutures] = useState("");
  const [finalCash, setFinalCash] = useState("");
  const [finalFutures, setFinalFutures] = useState("");
  const [commission, setCommission] = useState("");

  const f0 = parse(initialFutures);
  const cf = parse(finalCash);
  const f1 = parse(finalFutures);
  const comm = parse(commission) ?? 0;

  let futuresGain: number | null = null;
  let netPrice: number | null = null;
  let finalBasis: number | null = null;

  if (f0 !== null && cf !== null && f1 !== null) {
    futuresGain = f0 - f1;
    netPrice = cf + futuresGain - comm;
    finalBasis = cf - f1;
  }

  return (
    <CalculatorShell
      id="short-hedge"
      eyebrow="Calculator 3"
      title="Short Hedge — Net Selling Price"
      description="A producer or elevator selling cash later can sell futures now to manage downside price risk. When the cash sale happens, the futures position is closed. This calculator shows the resulting net price per unit, before basis surprises."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="sh-f0">Initial futures sale price ($/unit)</Label>
          <Input
            id="sh-f0"
            type="number"
            step="0.01"
            inputMode="decimal"
            placeholder="e.g. 4.55"
            value={initialFutures}
            onChange={(e) => setInitialFutures(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="sh-cf">Final cash sale price ($/unit)</Label>
          <Input
            id="sh-cf"
            type="number"
            step="0.01"
            inputMode="decimal"
            placeholder="e.g. 4.10"
            value={finalCash}
            onChange={(e) => setFinalCash(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="sh-f1">Final futures buyback price ($/unit)</Label>
          <Input
            id="sh-f1"
            type="number"
            step="0.01"
            inputMode="decimal"
            placeholder="e.g. 4.20"
            value={finalFutures}
            onChange={(e) => setFinalFutures(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="sh-comm">Commission per unit ($, optional)</Label>
          <Input
            id="sh-comm"
            type="number"
            step="0.001"
            inputMode="decimal"
            placeholder="0"
            value={commission}
            onChange={(e) => setCommission(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ResultBlock
          label="Futures result per unit"
          value={futuresGain === null ? "—" : money(futuresGain)}
          hint={
            futuresGain === null
              ? undefined
              : futuresGain >= 0
              ? "Gain on the short futures position. Cash side likely fell."
              : "Loss on the short futures position. Cash side likely rose."
          }
        />
        <ResultBlock
          label="Net selling price per unit"
          value={netPrice === null ? "—" : money(netPrice)}
          hint={
            finalBasis === null
              ? undefined
              : `Final basis: ${money(finalBasis)}. Net price ≈ initial futures + final basis − commission.`
          }
        />
      </div>

      <details className="border border-border bg-surface-subtle p-4 text-sm">
        <summary className="cursor-pointer font-medium text-text-emphasis">
          Worked example
        </summary>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          A grain producer sells one corn futures contract at $4.55. By harvest,
          cash corn is $4.10 and the futures contract has fallen to $4.20. The
          futures position is bought back at $4.20 for a gain of $0.35 per
          bushel. Net selling price ≈ $4.10 cash + $0.35 futures gain = $4.45
          per bushel (before commission).
        </p>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          The result equals the original futures price plus final basis: $4.55 +
          (−$0.10) = $4.45. Basis risk — how much basis has changed between
          entry and exit — is what the hedge does not eliminate.
        </p>
      </details>

      <IllustrativeNote />
    </CalculatorShell>
  );
}
