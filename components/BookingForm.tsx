"use client";

import { useState, type FormEvent } from "react";
import { Shield, Mail, Loader2, CheckCircle } from "lucide-react";

export default function BookingForm() {
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
      phone: data.get("phone"),
      space: data.get("space"),
      date: data.get("date"),
      details: data.get("details"),
      ngoRate: data.get("ngoRate") === "on",
    };

    try {
      const res = await fetch("/api/enquiry", {
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
        <h3 className="text-xl font-bold text-heading">Enquiry Sent!</h3>
        <p className="text-sm leading-relaxed text-body">
          Thank you for your enquiry. We&apos;ll get back to you within 24
          working hours. A confirmation email has been sent.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-primary hover:underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <>
      <h3 className="text-xl font-bold text-heading">Booking Enquiry</h3>
      <p className="mt-1 text-sm text-body-light">
        Response within 24 working hours
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-heading">
            Full Name
          </label>
          <input
            name="fullName"
            type="text"
            required
            placeholder="Your full name"
            className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-heading outline-none transition-colors placeholder:text-body-light focus:border-primary"
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-heading">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@email.com"
              className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-heading outline-none transition-colors placeholder:text-body-light focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-heading">
              Phone
            </label>
            <input
              name="phone"
              type="tel"
              placeholder="+44 ..."
              className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-heading outline-none transition-colors placeholder:text-body-light focus:border-primary"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-heading">
            Space
          </label>
          <select
            name="space"
            required
            className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-heading outline-none transition-colors focus:border-primary"
          >
            <option value="">Select a space</option>
            <option>Unity Centre Hall</option>
            <option>Office</option>
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-heading">
            Booking Date
          </label>
          <input
            name="date"
            type="date"
            className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-heading outline-none transition-colors focus:border-primary"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-heading">
            Event Details
          </label>
          <textarea
            name="details"
            rows={3}
            placeholder="Tell us about your event..."
            className="w-full resize-none rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-heading outline-none transition-colors placeholder:text-body-light focus:border-primary"
          />
        </div>

        <label className="flex items-start gap-2.5 text-sm text-body">
          <input
            name="ngoRate"
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-border accent-primary"
          />
          <span className="leading-snug">
            Apply for NGO/Community discounted rate (Eligibility proof required)
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
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-shadow hover:shadow-md disabled:opacity-60"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            "Send Enquiry"
          )}
        </button>
      </form>

      <div className="mt-5 flex items-center justify-center gap-4 border-t border-border pt-5">
        <div className="flex items-center gap-1.5 text-xs text-body-light">
          <Shield className="h-3.5 w-3.5" />
          Secure &amp; Private Data Handling
        </div>
        <span className="text-border">|</span>
        <a
          href="/contact"
          className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
        >
          <Mail className="h-3.5 w-3.5" />
          Need a custom quote? Contact us
        </a>
      </div>
    </>
  );
}
