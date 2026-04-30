import { InquiryForm } from "@/components/InquiryForm";
import { WorkWithUsForm } from "@/components/WorkWithUsForm";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-5xl space-y-12">
        <header className="space-y-4 border-b pb-8">
          <p className="small-caps text-xs text-muted-foreground">Contact</p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-text-emphasis md:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            Send a message, request a call, or sign up to be contacted about
            opening an account. We respond to inquiries during U.S. market hours.
          </p>
        </header>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="small-caps text-xs text-muted-foreground">Inquiry Form</p>
              <h2 className="font-serif text-2xl font-semibold text-text-emphasis">
                General Inquiry
              </h2>
            </div>
            <InquiryForm />
          </div>

          <div className="space-y-6 border-l pl-12 md:pl-16">
            <div className="space-y-2">
              <p className="small-caps text-xs text-muted-foreground">Client Signup</p>
              <h2 className="font-serif text-2xl font-semibold text-text-emphasis">
                Work With Us
              </h2>
            </div>
            <WorkWithUsForm />
          </div>
        </div>
      </div>
    </div>
  );
}
