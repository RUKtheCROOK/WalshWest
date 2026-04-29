import { Resend } from "resend";
import { env } from "../env";

export const resend = new Resend(env.RESEND_API_KEY);

export type EmailPayload = {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
};

export async function sendEmail(payload: EmailPayload) {
  const { to, subject, html, from = "Walsh West <noreply@walshwest.com>" } = payload;

  try {
    const response = await resend.emails.send({
      from,
      to,
      subject,
      html,
    });

    return { success: true, data: response };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    };
  }
}
