export default function ServicesPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold">Our Services</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">For Hedgers</h2>
        <p className="text-muted-foreground mb-4">
          Section copy pending review.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">For Speculators</h2>
        <p className="text-muted-foreground mb-4">
          Section copy pending review.
        </p>
      </section>

      <section className="bg-muted/50 p-6 rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>Risk Disclosure:</strong> Futures and options on futures involve substantial
          risk of loss and are not suitable for all investors. Past performance is not indicative
          of future results.
        </p>
      </section>
    </div>
  );
}
