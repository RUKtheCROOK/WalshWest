"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CalculatorShell,
  ResultBlock,
  IllustrativeNote,
} from "./CalculatorShell";

const fmt = (n: number) =>
  `${n >= 0 ? "+" : "-"}$${Math.abs(n).toFixed(4).replace(/0+$/, "").replace(/\.$/, "")}`;

const parse = (s: string): number | null => {
  if (s.trim() === "") return null;
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
};

export function BasisCalculator() {
  const [cash, setCash] = useState("");
  const [futures, setFutures] = useState("");

  const cashNum = parse(cash);
  const futuresNum = parse(futures);
  const basis =
    cashNum !== null && futuresNum !== null ? cashNum - futuresNum : null;

  const direction = basis === null
    ? ""
    : basis === 0
    ? "even"
    : basis > 0
    ? "over (cash above futures)"
    : "under (cash below futures)";

  return (
    <CalculatorShell
      id="basis"
      eyebrow="Calculator 1"
      title="Basis"
      description="Basis is the difference between the local cash price and the futures price for the same commodity. It moves with local supply, demand, transportation, and storage. Hedgers manage price risk in futures; basis risk remains in the cash market."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="basis-cash">Cash price ($/unit)</Label>
          <Input
            id="basis-cash"
            type="number"
            step="0.01"
            inputMode="decimal"
            placeholder="e.g. 4.40"
            value={cash}
            onChange={(e) => setCash(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="basis-futures">Futures price ($/unit)</Label>
          <Input
            id="basis-futures"
            type="number"
            step="0.01"
            inputMode="decimal"
            placeholder="e.g. 4.55"
            value={futures}
            onChange={(e) => setFutures(e.target.value)}
          />
        </div>
      </div>

      <ResultBlock
        label="Basis (Cash − Futures)"
        value={basis === null ? "—" : `${fmt(basis)} ${direction}`}
        hint="A negative basis means cash is trading below futures. A positive basis means cash is trading above futures. The number changes day to day as cash conditions change."
      />

      <details className="border border-border bg-surface-subtle p-4 text-sm">
        <summary className="cursor-pointer font-medium text-text-emphasis">
          Worked example
        </summary>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Local elevator bids $4.40 for cash corn. The nearby corn futures
          contract is trading at $4.55. Basis = $4.40 − $4.55 = −$0.15, or
          15 cents under the board.
        </p>
      </details>

      <IllustrativeNote />
    </CalculatorShell>
  );
}
