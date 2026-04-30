import type { ReactNode } from "react";

type CalculatorShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function CalculatorShell({
  id,
  eyebrow,
  title,
  description,
  children,
}: CalculatorShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-24 border border-border bg-card"
    >
      <header className="space-y-3 border-b bg-surface-subtle px-6 py-6 md:px-10 md:py-8">
        <p className="small-caps text-xs text-muted-foreground">{eyebrow}</p>
        <h2
          id={`${id}-title`}
          className="font-serif text-2xl font-semibold text-text-emphasis md:text-3xl"
        >
          {title}
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>
      </header>
      <div className="space-y-6 px-6 py-8 md:px-10 md:py-10">{children}</div>
    </section>
  );
}

export function ResultBlock({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="border-l-2 border-primary bg-surface-subtle p-5">
      <p className="small-caps mb-2 text-[0.65rem] tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="tabular font-serif text-2xl font-bold text-text-emphasis md:text-3xl">
        {value}
      </p>
      {hint && (
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{hint}</p>
      )}
    </div>
  );
}

export function IllustrativeNote() {
  return (
    <p className="text-xs italic leading-relaxed text-muted-foreground">
      For illustration only. Estimates exclude commissions, fees, slippage, and
      changes in basis. Actual results will vary. Futures and options on
      futures involve substantial risk of loss.
    </p>
  );
}
