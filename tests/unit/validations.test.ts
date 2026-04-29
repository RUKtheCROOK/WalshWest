import { describe, it, expect } from "vitest";
import { inquirySchema, workWithUsSchema, newsletterSchema } from "@/lib/validations";

describe("Form Validations", () => {
  describe("inquirySchema", () => {
    it("should validate a valid inquiry", () => {
      const validInput = {
        name: "John Doe",
        email: "john@example.com",
        phone: "555-1234",
        message: "I have a question about your services.",
      };

      const result = inquirySchema.safeParse(validInput);
      expect(result.success).toBe(true);
    });

    it("should reject invalid email", () => {
      const invalidInput = {
        name: "John Doe",
        email: "not-an-email",
        phone: "555-1234",
        message: "Test message",
      };

      const result = inquirySchema.safeParse(invalidInput);
      expect(result.success).toBe(false);
    });

    it("should reject missing required fields", () => {
      const invalidInput = {
        name: "John Doe",
        email: "john@example.com",
      };

      const result = inquirySchema.safeParse(invalidInput);
      expect(result.success).toBe(false);
    });
  });

  describe("workWithUsSchema", () => {
    it("should validate a valid signup", () => {
      const validInput = {
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "555-5678",
        operation_type: "Grain producer",
        message: "I'm interested in hedging services.",
      };

      const result = workWithUsSchema.safeParse(validInput);
      expect(result.success).toBe(true);
    });

    it("should allow optional operation_type", () => {
      const validInput = {
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "555-5678",
        message: "I'm interested in your services.",
      };

      const result = workWithUsSchema.safeParse(validInput);
      expect(result.success).toBe(true);
    });
  });

  describe("newsletterSchema", () => {
    it("should validate a valid subscription", () => {
      const validInput = {
        email: "subscriber@example.com",
        name: "Subscriber Name",
      };

      const result = newsletterSchema.safeParse(validInput);
      expect(result.success).toBe(true);
    });

    it("should allow email-only subscription", () => {
      const validInput = {
        email: "subscriber@example.com",
      };

      const result = newsletterSchema.safeParse(validInput);
      expect(result.success).toBe(true);
    });

    it("should reject invalid email", () => {
      const invalidInput = {
        email: "not-valid",
      };

      const result = newsletterSchema.safeParse(invalidInput);
      expect(result.success).toBe(false);
    });
  });
});
