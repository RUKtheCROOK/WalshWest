import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Walsh West</h1>
        <p className="text-xl text-muted-foreground mb-8">
          A branch office of Walsh Trading, Inc.
        </p>
        <p className="max-w-2xl mx-auto mb-8">
          Section copy pending review.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/services">Our Services</Link>
          </Button>
        </div>
      </section>

      <section className="bg-muted/50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Risk Disclosure</h2>
        <p className="text-sm text-muted-foreground">
          Futures and options on futures involve substantial risk of loss and are not suitable for
          all investors. Past performance is not indicative of future results. Please carefully
          consider whether trading is appropriate for your financial situation.
        </p>
      </section>
    </div>
  );
}
