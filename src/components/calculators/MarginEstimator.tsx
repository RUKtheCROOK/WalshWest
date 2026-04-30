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
  return Number.isFinite(n) && n >= 0 ? n : null;
};

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });

export function MarginEstimator() {
  const [contracts, setContracts] = useState("");
  const [perContract, setPerContract] = useState("");

  const c = parse(contracts);
  const m = parse(perContract);
  const total = c !== null && m !== null ? c * m : null;

  return (
    <CalculatorShell
      id="margin"
      eyebrow="Calculator 5"
      title="Initial Margin Estimate"
      description="A rough estimate of the capital required to enter a futures position. Multiply the per-contract initial margin by the number of contracts. Per-contract margins are set by the exchange and the broker and change with market volatility — verify current rates with Walsh West before relying on any number."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="m-contracts">Number of contracts</Label>
          <Input
            id="m-contracts"
            type="number"
            step="1"
            min="0"
            inputMode="numeric"
            placeholder="e.g. 5"
            value={contracts}
            onChange={(e) => setContracts(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="m-per">Initial margin per contract ($)</Label>
          <Input
            id="m-per"
            type="number"
            step="1"
            min="0"
            inputMode="decimal"
            placeholder="e.g. 2200"
            value={perContract}
            onChange={(e) => setPerContract(e.target.value)}
          />
        </div>
      </div>

      <ResultBlock
        label="Estimated total initial margin"
        value={total === null ? "—" : money(total)}
        hint="Initial margin is the capital required to open a position. It is not the maximum loss. Maintenance margin and margin calls may require additional capital while the position is open."
      />

      <details className="border border-border bg-surface-subtle p-4 text-sm">
        <summary className="cursor-pointer font-medium text-text-emphasis">
          About margin
        </summary>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Each futures contract has an initial margin set by the exchange.
          Brokers may require more, especially during volatile markets. If the
          position moves against you, the account may be subject to a margin
          call requiring additional funds within a short window. A position can
          be liquidated if margin requirements are not met.
        </p>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          For current per-contract margins, contact Walsh West or check the CME
          margin information published by the exchange. This calculator uses
          only the value you enter.
        </p>
      </details>

      <IllustrativeNote />
    </CalculatorShell>
  );
}
