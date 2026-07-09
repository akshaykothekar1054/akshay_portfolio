"use server";

import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase";
import { PERSON } from "@/lib/constants";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const NOTIFY_FROM = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string | null)?.trim() || "";
  const email = (formData.get("email") as string | null)?.trim() || "";
  const message = (formData.get("message") as string | null)?.trim() || "";

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all fields." };
  }
  if (!isValidEmail(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const { error: dbError } = await getSupabaseAdmin()
    .from("inquiries")
    .insert({ name, email, message });

  if (dbError) {
    console.error("Supabase insert failed:", dbError);
    return {
      status: "error",
      message: "Something went wrong saving your message. Please try again.",
    };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: `Portfolio Contact <${NOTIFY_FROM}>`,
      to: PERSON.email,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
  } catch (emailError) {
    console.error("Resend email failed:", emailError);
    // The inquiry is already saved in Supabase, so don't fail the submission
    // over a notification email issue.
  }

  return { status: "success", message: "Thanks! Your message has been sent." };
}
