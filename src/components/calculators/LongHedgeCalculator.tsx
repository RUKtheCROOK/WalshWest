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

export function LongHedgeCalculator() {
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
    futuresGain = f1 - f0;
    netPrice = cf - futuresGain + comm;
    finalBasis = cf - f1;
  }

  return (
    <CalculatorShell
      id="long-hedge"
      eyebrow="Calculator 4"
      title="Long Hedge — Net Purchase Price"
      description="A processor, feed mill, or end-user buying cash later can buy futures now to manage upside price risk. When the cash purchase happens, the futures position is closed. This calculator shows the resulting net purchase price per unit, before basis surprises."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="lh-f0">Initial futures purchase price ($/unit)</Label>
          <Input
            id="lh-f0"
            type="number"
            step="0.01"
            inputMode="decimal"
            placeholder="e.g. 4.55"
            value={initialFutures}
            onChange={(e) => setInitialFutures(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lh-cf">Final cash purchase price ($/unit)</Label>
          <Input
            id="lh-cf"
            type="number"
            step="0.01"
            inputMode="decimal"
            placeholder="e.g. 4.95"
            value={finalCash}
            onChange={(e) => setFinalCash(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lh-f1">Final futures sale price ($/unit)</Label>
          <Input
            id="lh-f1"
            type="number"
            step="0.01"
            inputMode="decimal"
            placeholder="e.g. 4.85"
            value={finalFutures}
            onChange={(e) => setFinalFutures(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lh-comm">Commission per unit ($, optional)</Label>
          <Input
            id="lh-comm"
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
              ? "Gain on the long futures position. Cash side likely rose."
              : "Loss on the long futures position. Cash side likely fell."
          }
        />
        <ResultBlock
          label="Net purchase price per unit"
          value={netPrice === null ? "—" : money(netPrice)}
          hint={
            finalBasis === null
              ? undefined
              : `Final basis: ${money(finalBasis)}. Net price ≈ initial futures + final basis + commission.`
          }
        />
      </div>

      <details className="border border-border bg-surface-subtle p-4 text-sm">
        <summary className="cursor-pointer font-medium text-text-emphasis">
          Worked example
        </summary>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          A feed mill expects to buy 5,000 bushels of corn next quarter. Today
          it buys one corn futures contract at $4.55. By the time of purchase,
          cash corn is $4.95 and the futures contract has risen to $4.85. The
          futures position is sold at $4.85 for a gain of $0.30 per bushel. Net
          purchase price ≈ $4.95 cash − $0.30 futures gain = $4.65 per bushel
          (before commission).
        </p>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          The result equals the original futures price plus final basis: $4.55 +
          $0.10 = $4.65. The hedge does not eliminate basis risk.
        </p>
      </details>

      <IllustrativeNote />
    </CalculatorShell>
  );
}
