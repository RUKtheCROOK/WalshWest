import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllNewsletters,
  getNewsletterBySlug,
  getNewsletterSlugs,
  type NewsletterBlock,
} from "@/content/newsletters";
import { NewsletterDisclosures } from "@/components/NewsletterDisclosures";

export function generateStaticParams() {
  return getNewsletterSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const issue = getNewsletterBySlug(slug);
  if (!issue) return {};
  return {
    title: `${issue.title} — Walsh West`,
    description: issue.excerpt,
  };
}

function Block({ block }: { block: NewsletterBlock }) {
  if (block.type === "paragraph") {
    return (
      <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
        {block.text}
      </p>
    );
  }
  if (block.type === "subheading") {
    return (
      <h3 className="pt-2 font-serif text-xl font-semibold text-text-emphasis md:text-2xl">
        {block.text}
      </h3>
    );
  }
  if (block.type === "table") {
    return (
      <div className="space-y-3">
        {block.caption && (
          <p className="text-sm italic text-muted-foreground">
            {block.caption}
          </p>
        )}
        <div className="-mx-4 overflow-x-auto md:mx-0">
          <table className="tabular w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-y border-border bg-surface-subtle">
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    scope="col"
                    className="small-caps px-3 py-3 text-left text-[0.7rem] tracking-wider text-text-emphasis"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className="border-b border-border/60 last:border-b-0"
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-3 py-3 text-text-emphasis ${
                        ci === 0 ? "font-medium" : "text-muted-foreground"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  if (block.type === "signoff") {
    return (
      <div className="space-y-0.5 border-l-2 border-muted pl-4 text-sm text-muted-foreground">
        {block.lines.map((l, i) => (
          <p
            key={i}
            className={i === 0 ? "font-serif text-base font-semibold text-text-emphasis" : ""}
          >
            {l}
          </p>
        ))}
      </div>
    );
  }
  return null;
}

export default async function NewsletterIssuePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const issue = getNewsletterBySlug(slug);
  if (!issue) notFound();

  const all = getAllNewsletters();
  const idx = all.findIndex((n) => n.slug === issue.slug);
  const newer = idx > 0 ? all[idx - 1] : null;
  const older = idx < all.length - 1 ? all[idx + 1] : null;

  const formattedDate = new Date(issue.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-3xl space-y-12">
        <nav aria-label="Breadcrumb" className="small-caps text-xs">
          <Link
            href="/newsletter"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            &larr; All notes
          </Link>
        </nav>

        <header className="space-y-6 border-b pb-10">
          <p className="small-caps text-xs text-muted-foreground">
            Weekly Market Note
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-text-emphasis md:text-5xl lg:text-6xl">
            {issue.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <time dateTime={issue.date} className="tabular">
              {formattedDate}
            </time>
            <span aria-hidden="true">&middot;</span>
            <span>Walsh West Branch</span>
            {issue.byline && (
              <>
                <span aria-hidden="true">&middot;</span>
                <span>
                  Prepared by{" "}
                  <span className="text-text-emphasis">
                    {issue.byline.preparedBy}
                  </span>
                  {issue.byline.phone && (
                    <span className="tabular">
                      {" "}
                      &middot; {issue.byline.phone}
                    </span>
                  )}
                </span>
              </>
            )}
          </div>
        </header>

        <NewsletterDisclosures />

        <div className="space-y-12">
          {issue.sections.map((section, i) => (
            <section key={i} className="space-y-4">
              {section.heading && (
                <h2 className="border-b pb-3 font-serif text-2xl font-semibold text-text-emphasis md:text-3xl">
                  {section.heading}
                </h2>
              )}
              {section.blocks.map((block, j) => (
                <Block key={j} block={block} />
              ))}
            </section>
          ))}
        </div>

        <nav
          aria-label="More notes"
          className="grid gap-6 border-t pt-10 md:grid-cols-2"
        >
          {older ? (
            <Link
              href={`/newsletter/${older.slug}`}
              className="group block space-y-1"
            >
              <p className="small-caps text-[0.65rem] tracking-wider text-muted-foreground">
                &larr; Older note
              </p>
              <p className="font-serif text-lg font-semibold text-text-emphasis transition-colors group-hover:text-primary">
                {older.title}
              </p>
            </Link>
          ) : (
            <span />
          )}
          {newer ? (
            <Link
              href={`/newsletter/${newer.slug}`}
              className="group block space-y-1 md:text-right"
            >
              <p className="small-caps text-[0.65rem] tracking-wider text-muted-foreground">
                Newer note &rarr;
              </p>
              <p className="font-serif text-lg font-semibold text-text-emphasis transition-colors group-hover:text-primary">
                {newer.title}
              </p>
            </Link>
          ) : null}
        </nav>
      </div>
    </article>
  );
}
