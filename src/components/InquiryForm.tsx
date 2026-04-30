"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { inquirySchema, type InquiryInput } from "@/lib/validations";
import { submitInquiry } from "@/server/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function InquiryForm() {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryInput>({
    resolver: zodResolver(inquirySchema),
  });

  const onSubmit = async (data: InquiryInput) => {
    setSubmitting(true);
    setMessage(null);

    const result = await submitInquiry(data);

    if (result.success) {
      setMessage({ type: "success", text: result.message });
      reset();
    } else {
      setMessage({ type: "error", text: result.message });
    }

    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-foreground">Name</Label>
        <Input
          id="name"
          {...register("name")}
          className="transition-shadow focus-visible:shadow-sm"
        />
        {errors.name && (
          <p className="text-sm font-medium text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground">Email</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          className="transition-shadow focus-visible:shadow-sm"
        />
        {errors.email && (
          <p className="text-sm font-medium text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-foreground">Phone</Label>
        <Input
          id="phone"
          type="tel"
          {...register("phone")}
          className="transition-shadow focus-visible:shadow-sm"
        />
        {errors.phone && (
          <p className="text-sm font-medium text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-foreground">Message</Label>
        <Textarea
          id="message"
          rows={5}
          {...register("message")}
          className="resize-none transition-shadow focus-visible:shadow-sm"
        />
        {errors.message && (
          <p className="text-sm font-medium text-destructive">{errors.message.message}</p>
        )}
      </div>

      {message && (
        <div
          className={`border p-4 ${
            message.type === "success"
              ? "border-green-200 bg-green-50 text-green-900"
              : "border-destructive bg-red-50 text-red-900"
          }`}
        >
          <p className="text-sm font-medium">{message.text}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={submitting}
        className="w-full transition-all hover:shadow-sm"
        size="lg"
      >
        {submitting ? "Submitting..." : "Submit Inquiry"}
      </Button>
    </form>
  );
}
