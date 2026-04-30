import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { getAllNewsletters } from "@/content/newsletters";

export default function NewsletterPage() {
  const issues = getAllNewsletters();

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-3xl space-y-16">
        <header className="space-y-4 border-b pb-8">
          <p className="small-caps text-xs text-muted-foreground">Newsletter</p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-text-emphasis md:text-5xl lg:text-6xl">
            Weekly Market Notes
          </h1>
          <p className="leading-relaxed text-muted-foreground">
            A short note each week walking through the public reports and
            meetings on the upcoming{" "}
            <Link
              href="/calendar"
              className="text-primary underline-offset-4 hover:underline"
            >
              calendar
            </Link>
            . No promotional material — the kind of summary that is useful
            before the next session opens.
          </p>
        </header>

        <section className="space-y-6">
          <div className="border-l-2 border-primary bg-surface-subtle p-8 md:p-10">
            <div className="space-y-2">
              <p className="small-caps text-xs text-muted-foreground">Subscribe</p>
              <h2 className="font-serif text-2xl font-semibold text-text-emphasis">
                Get the next note by email
              </h2>
            </div>
            <div className="mt-6">
              <NewsletterForm />
            </div>
          </div>
          <p className="border-l-2 border-muted pl-6 text-xs leading-relaxed text-muted-foreground">
            By subscribing, you agree to receive emails from Walsh West. You can unsubscribe at any
            time using the link in each email.
          </p>
        </section>

        <section className="space-y-8">
          <div className="space-y-2">
            <p className="small-caps text-xs text-muted-foreground">Past Notes</p>
            <h2 className="font-serif text-3xl font-semibold text-text-emphasis md:text-4xl">
              Read recent issues
            </h2>
          </div>

          {issues.length === 0 ? (
            <p className="leading-relaxed text-muted-foreground">
              No issues have been published yet. Subscribe above to receive the
              first note.
            </p>
          ) : (
            <ul className="divide-y divide-border border-y">
              {issues.map((issue) => (
                <li key={issue.slug}>
                  <Link
                    href={`/newsletter/${issue.slug}`}
                    className="group grid gap-4 py-6 transition-colors hover:bg-surface-subtle md:grid-cols-[140px_1fr] md:gap-8 md:py-8"
                  >
                    <time
                      dateTime={issue.date}
                      className="tabular block text-sm font-medium text-text-emphasis"
                    >
                      {new Date(issue.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    <div className="space-y-2">
                      <h3 className="font-serif text-xl font-semibold text-text-emphasis transition-colors group-hover:text-primary md:text-2xl">
                        {issue.title}
                      </h3>
                      <p className="leading-relaxed text-muted-foreground">
                        {issue.excerpt}
                      </p>
                      <p className="small-caps text-[0.65rem] tracking-wider text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        Read note
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
