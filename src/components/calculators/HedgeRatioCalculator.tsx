"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CONTRACTS, getContract } from "@/lib/contracts";
import {
  CalculatorShell,
  ResultBlock,
  IllustrativeNote,
} from "./CalculatorShell";

const parse = (s: string): number | null => {
  if (s.trim() === "") return null;
  const n = Number(s);
  return Number.isFinite(n) && n > 0 ? n : null;
};

const fmtUnits = (n: number) =>
  n.toLocaleString("en-US", { maximumFractionDigits: 0 });

export function HedgeRatioCalculator() {
  const [symbol, setSymbol] = useState(CONTRACTS[0].symbol);
  const [quantity, setQuantity] = useState("");

  const contract = getContract(symbol);
  const qtyNum = parse(quantity);

  let contracts: number | null = null;
  let covered: number | null = null;
  let residual: number | null = null;

  if (qtyNum !== null && contract) {
    contracts = Math.floor(qtyNum / contract.size);
    covered = contracts * contract.size;
    residual = qtyNum - covered;
  }

  return (
    <CalculatorShell
      id="hedge-ratio"
      eyebrow="Calculator 2"
      title="Number of Contracts"
      description="A simple sizing tool. Divide the quantity you want to hedge by the contract size to estimate how many futures contracts cover it. Whole contracts only — any residual remains unhedged in the cash market."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="hr-commodity">Commodity</Label>
          <select
            id="hr-commodity"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {CONTRACTS.map((c) => (
              <option key={c.symbol} value={c.symbol}>
                {c.name} ({fmtUnits(c.size)} {c.unit})
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="hr-quantity">
            Quantity to hedge ({contract?.unit ?? "units"})
          </Label>
          <Input
            id="hr-quantity"
            type="number"
            step="1"
            inputMode="decimal"
            placeholder={`e.g. ${fmtUnits((contract?.size ?? 1000) * 5)}`}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
      </div>

      <ResultBlock
        label="Estimated contracts (whole)"
        value={contracts === null ? "—" : `${contracts} contract${contracts === 1 ? "" : "s"}`}
        hint={
          contract && contracts !== null && covered !== null && residual !== null
            ? `Covers ${fmtUnits(covered)} ${contract.unit}. Residual unhedged: ${fmtUnits(residual)} ${contract.unit}.`
            : "Whole contracts only. Any residual remains in cash."
        }
      />

      <details className="border border-border bg-surface-subtle p-4 text-sm">
        <summary className="cursor-pointer font-medium text-text-emphasis">
          Worked example
        </summary>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          A producer expects 27,500 bushels of corn from harvest. With a
          5,000-bushel corn contract, that is 27,500 ÷ 5,000 = 5.5 contracts.
          Rounded down to whole contracts: 5 contracts cover 25,000 bushels;
          2,500 bushels remain unhedged.
        </p>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          This is the simple proportional hedge ratio. Some commercial accounts
          use a variance-minimizing hedge ratio that adjusts for correlation and
          volatility between the cash position and the futures contract; that is
          a separate exercise.
        </p>
      </details>

      <IllustrativeNote />
    </CalculatorShell>
  );
}
