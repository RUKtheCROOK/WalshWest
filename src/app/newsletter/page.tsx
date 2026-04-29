import { NewsletterForm } from "@/components/NewsletterForm";

export default function NewsletterPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Newsletter</h1>
        <p className="text-muted-foreground">
          Section copy pending review.
        </p>
      </div>

      <div className="bg-muted/50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Subscribe</h2>
        <NewsletterForm />
      </div>

      <p className="text-xs text-muted-foreground">
        By subscribing, you agree to receive emails from Walsh West. You can unsubscribe at any
        time using the link in each email.
      </p>
    </div>
  );
}
