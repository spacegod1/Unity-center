"use client";

import { useState, type FormEvent } from "react";
import { Mail, ChevronDown, Loader2, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const body = {
      fullName: data.get("fullName"),
      email: data.get("email"),
      subject: data.get("subject"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <CheckCircle className="h-12 w-12 text-green-600" />
        <h3 className="text-xl font-bold text-heading">Message Sent!</h3>
        <p className="text-sm leading-relaxed text-body">
          Thank you for reaching out. We&apos;ll get back to you within 24
          hours. A confirmation email has been sent.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-[30px] font-bold leading-tight text-heading">
        Send us a Message
      </h2>
      <p className="mt-2 text-sm text-body-light">
        We typically respond within 24 hours. Your details are safe with us.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="fullName" className="text-sm font-semibold text-heading">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="John Doe"
              className="w-full rounded-xl border border-border bg-page-bg px-4 py-3 text-sm text-heading outline-none transition placeholder:text-body-light focus:border-primary focus:ring-2 focus:ring-primary-light"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-semibold text-heading">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="john@example.com"
              className="w-full rounded-xl border border-border bg-page-bg px-4 py-3 text-sm text-heading outline-none transition placeholder:text-body-light focus:border-primary focus:ring-2 focus:ring-primary-light"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="subject" className="text-sm font-semibold text-heading">
            Subject
          </label>
          <div className="relative">
            <select
              id="subject"
              name="subject"
              defaultValue="general"
              className="w-full appearance-none rounded-xl border border-border bg-page-bg px-4 py-3 pr-10 text-sm text-heading outline-none transition focus:border-primary focus:ring-2 focus:ring-primary-light"
            >
              <option value="general">General Inquiry</option>
              <option value="volunteer">Volunteering</option>
              <option value="support">Support Request</option>
              <option value="partnership">Partnership</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-body-light" />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-semibold text-heading">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us how we can help…"
            className="w-full resize-none rounded-xl border border-border bg-page-bg px-4 py-3 text-sm text-heading outline-none transition placeholder:text-body-light focus:border-primary focus:ring-2 focus:ring-primary-light"
          />
        </div>

        <label className="flex items-start gap-3 text-sm text-body">
          <input
            type="checkbox"
            name="privacy"
            className="mt-0.5 h-4 w-4 rounded border-border text-primary accent-primary"
          />
          <span>
            I agree to the privacy policy and data protection terms.
          </span>
        </label>

        {status === "error" && (
          <p className="rounded-lg bg-red-50 px-4 py-2.5 text-sm font-medium text-red-700">
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-base font-bold text-white shadow-sm transition hover:shadow-md disabled:opacity-60"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Mail className="h-5 w-5" />
              Send Message
            </>
          )}
        </button>
      </form>
    </>
  );
}
