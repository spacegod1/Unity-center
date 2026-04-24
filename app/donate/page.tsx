import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart } from "lucide-react";

export default function DonatePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Header Section */}
        <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
          <div className="pointer-events-none absolute -top-32 right-0 h-[280px] w-[280px] rounded-full bg-primary-light blur-[120px] sm:h-[380px] sm:w-[380px] lg:h-[480px] lg:w-[480px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-[200px] w-[200px] rounded-full bg-[rgba(6,11,154,0.05)] blur-[100px] sm:h-[260px] sm:w-[260px] lg:h-[320px] lg:w-[320px]" />

          <div className="relative mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
            <span className="inline-block rounded-full bg-primary-border px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#1E293B]">
              Support Our Mission
            </span>
            <h1 className="mx-auto mt-5 max-w-xl text-3xl font-black leading-[1.1] tracking-tight text-heading sm:text-4xl lg:text-5xl">
              Make a Difference Today
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-body sm:text-lg">
              Your generosity fuels our community programs and provides vital
              support to those who need it most in South London.
            </p>
          </div>
        </section>

        {/* Donation Card */}
        <section className="mx-auto max-w-[1280px] px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[576px]">
            <div className="rounded-3xl border border-border bg-white p-6 shadow-xl sm:p-8 lg:p-10">
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-border">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-heading">Donate via Bank Transfer</h2>
                <p className="text-center text-sm leading-relaxed text-body">
                  To make a donation, please transfer your chosen amount to the
                  account below and use your name as the payment reference.
                </p>
              </div>

              <div className="mt-8 rounded-xl border border-primary-border bg-primary-light p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-primary">
                  Bank Transfer Details
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-body">Bank</span>
                    <span className="text-sm font-bold text-heading">NatWest</span>
                  </div>
                  <div className="h-px bg-primary-border" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-body">Account Name</span>
                    <span className="text-sm font-bold text-heading">Unity Centre</span>
                  </div>
                  <div className="h-px bg-primary-border" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-body">Sort Code</span>
                    <span className="text-sm font-bold text-heading">60-01-34</span>
                  </div>
                  <div className="h-px bg-primary-border" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-body">Account Number</span>
                    <span className="text-sm font-bold text-heading">21618615</span>
                  </div>
                  <div className="h-px bg-primary-border" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-body">Account Type</span>
                    <span className="text-sm font-bold text-heading">Business Current</span>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-center text-xs leading-relaxed text-body-light">
                Please use your full name as the payment reference so we can
                acknowledge your donation. For Gift Aid or any questions, contact
                us at <a href="mailto:info@unitycentresl.org.uk" className="font-semibold text-primary hover:underline">info@unitycentresl.org.uk</a>
              </p>
            </div>

            <p className="mt-6 text-center text-sm leading-relaxed text-body-light">
              &ldquo;100% of your donation goes directly towards our community
              programs.&rdquo;
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
