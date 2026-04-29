import { InquiryForm } from "@/components/InquiryForm";
import { WorkWithUsForm } from "@/components/WorkWithUsForm";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-muted-foreground">
          Section copy pending review.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">General Inquiry</h2>
          <InquiryForm />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Work With Us</h2>
          <WorkWithUsForm />
        </div>
      </div>
    </div>
  );
}
