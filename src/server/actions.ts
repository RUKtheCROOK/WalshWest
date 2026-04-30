"use server";

import { prisma } from "@/lib/db";
import { sendEmail } from "@/lib/email";
import { subscribeToNewsletter } from "@/lib/newsletter";
import {
  inquirySchema,
  workWithUsSchema,
  newsletterSchema,
  type InquiryInput,
  type WorkWithUsInput,
  type NewsletterInput,
} from "@/lib/validations";

export type ActionResult<T = void> = {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
};

export async function submitInquiry(input: InquiryInput): Promise<ActionResult<string>> {
  try {
    const validated = inquirySchema.parse(input);

    const inquiry = await prisma.inquiry.create({
      data: validated,
    });

    // Send confirmation email (admin notification in production)
    await sendEmail({
      to: validated.email,
      subject: "We received your inquiry",
      html: `<p>Thank you for contacting Walsh West. We will respond shortly.</p>`,
    });

    return {
      success: true,
      message: "Thank you for your inquiry. We will be in touch soon.",
      data: inquiry.id,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: "Failed to submit inquiry. Please try again.",
      };
    }
    return {
      success: false,
      message: "An unexpected error occurred.",
    };
  }
}

export async function submitWorkWithUs(input: WorkWithUsInput): Promise<ActionResult<string>> {
  try {
    const validated = workWithUsSchema.parse(input);

    const signup = await prisma.workWithUsSignup.create({
      data: validated,
    });

    await sendEmail({
      to: validated.email,
      subject: "Thank you for your interest in Walsh West",
      html: `<p>We received your information and will be in touch soon.</p>`,
    });

    return {
      success: true,
      message: "Thank you for your interest. We will contact you shortly.",
      data: signup.id,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: "Failed to submit. Please try again.",
      };
    }
    return {
      success: false,
      message: "An unexpected error occurred.",
    };
  }
}

export async function subscribeNewsletter(input: NewsletterInput): Promise<ActionResult> {
  try {
    const validated = newsletterSchema.parse(input);

    // Check if already subscribed
    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email: validated.email },
    });

    if (existing) {
      if (existing.subscribed) {
        return {
          success: false,
          message: "This email is already subscribed.",
        };
      }
      // Resubscribe
      await prisma.newsletterSubscriber.update({
        where: { email: validated.email },
        data: { subscribed: true, name: validated.name },
      });
    } else {
      await prisma.newsletterSubscriber.create({
        data: validated,
      });
    }

    // Add to newsletter provider (stub for now)
    await subscribeToNewsletter({
      email: validated.email,
      name: validated.name,
    });

    await sendEmail({
      to: validated.email,
      subject: "Welcome to Walsh West Newsletter",
      html: `<p>You've successfully subscribed to our newsletter.</p>`,
    });

    return {
      success: true,
      message: "Successfully subscribed to newsletter.",
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: "Failed to subscribe. Please try again.",
      };
    }
    return {
      success: false,
      message: "An unexpected error occurred.",
    };
  }
}
