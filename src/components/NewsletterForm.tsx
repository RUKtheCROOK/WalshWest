"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterInput } from "@/lib/validations";
import { subscribeNewsletter } from "@/server/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function NewsletterForm() {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterInput) => {
    setSubmitting(true);
    setMessage(null);

    const result = await subscribeNewsletter(data);

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
        <Label htmlFor="name" className="text-foreground">Name (Optional)</Label>
        <Input
          id="name"
          {...register("name")}
          className="transition-shadow focus-visible:shadow-sm"
        />
        {errors.name && (
          <p className="text-sm font-medium text-destructive">{errors.name.message}</p>
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
        {submitting ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  );
}
