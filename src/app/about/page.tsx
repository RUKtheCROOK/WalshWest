export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold">About Walsh West</h1>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Branch</h2>
        <p className="text-muted-foreground mb-4">
          Section copy pending review.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">The Branch Manager</h2>
        <p className="text-muted-foreground mb-4">
          Section copy pending review.
        </p>
      </section>

      <section className="bg-muted/50 p-6 rounded-lg">
        <h3 className="font-semibold mb-2">Walsh Trading, Inc.</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Walsh West is a branch office of Walsh Trading, Inc., a registered FCM/IB and NFA member.
        </p>
        <a
          href="https://walshtrading.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm"
        >
          Visit Walsh Trading &rarr;
        </a>
      </section>
    </div>
  );
}
