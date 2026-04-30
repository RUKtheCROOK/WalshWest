import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PageCtaProps = {
  eyebrow: string;
  title: string;
  body: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  variant?: "navy" | "light";
};

export function PageCta({
  eyebrow,
  title,
  body,
  primary,
  secondary,
  variant = "navy",
}: PageCtaProps) {
  const isNavy = variant === "navy";

  return (
    <section
      className={cn(
        "border-y",
        isNavy ? "bg-primary text-primary-foreground" : "bg-surface-subtle",
      )}
    >
      <div className="container mx-auto px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p
            className={cn(
              "small-caps mb-6 text-xs tracking-wider",
              isNavy ? "text-primary-foreground/70" : "text-muted-foreground",
            )}
          >
            {eyebrow}
          </p>
          <h2
            className={cn(
              "mb-6 font-serif text-3xl font-bold leading-tight md:text-4xl lg:text-5xl",
              isNavy ? "text-primary-foreground" : "text-text-emphasis",
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "mb-10 max-w-2xl text-base leading-relaxed md:text-lg",
              isNavy ? "text-primary-foreground/85" : "text-muted-foreground",
            )}
          >
            {body}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              variant={isNavy ? "outline" : "default"}
              className={
                isNavy
                  ? "border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  : ""
              }
              asChild
            >
              <Link href={primary.href}>{primary.label}</Link>
            </Button>
            {secondary && (
              <Button
                size="lg"
                variant="ghost"
                className={
                  isNavy
                    ? "border border-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    : ""
                }
                asChild
              >
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
