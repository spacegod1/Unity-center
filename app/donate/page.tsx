"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Lock } from "lucide-react";

const AMOUNTS = [10, 25, 50, 100, 250] as const;

export default function DonatePage() {
  const [selected, setSelected] = useState<number | "custom">(25);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "bank">("card");

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Header Section */}
        <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
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
              {/* Top */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-border">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-heading">Donate Now</h2>
              </div>

              {/* Amount Grid */}
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {AMOUNTS.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setSelected(amount)}
                    className={`rounded-xl border-2 px-4 py-4 text-center text-base font-bold transition ${
                      selected === amount
                        ? "border-primary bg-primary-light shadow-[0_0_0_2px_rgba(6,11,154,0.15)]"
                        : "border-[#F1F5F9] bg-white hover:border-primary-border"
                    }`}
                  >
                    £{amount}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setSelected("custom")}
                  className={`rounded-xl border-2 px-4 py-4 text-center text-base font-bold transition ${
                    selected === "custom"
                      ? "border-primary bg-primary-light shadow-[0_0_0_2px_rgba(6,11,154,0.15)]"
                      : "border-[#F1F5F9] bg-white hover:border-primary-border"
                  }`}
                >
                  Custom
                </button>
              </div>

              {selected === "custom" && (
                <div className="mt-4">
                  <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base font-bold text-heading">
                      £
                    </span>
                    <input
                      type="number"
                      min="1"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="w-full rounded-xl border-2 border-[#F1F5F9] bg-white py-4 pl-8 pr-4 text-base font-bold text-heading outline-none transition placeholder:font-normal placeholder:text-body-light focus:border-primary focus:ring-2 focus:ring-primary-light"
                    />
                  </div>
                </div>
              )}

              {/* Payment Method */}
              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-wide text-body-light">
                  Payment Method
                </p>
                <div className="mt-3 flex flex-col gap-3">
                  <label
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 px-4 py-3.5 transition ${
                      paymentMethod === "card"
                        ? "border-primary bg-[rgba(6,11,154,0.05)]"
                        : "border-[#F1F5F9]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="h-4 w-4 accent-primary"
                    />
                    <span className="text-sm font-semibold text-heading">
                      Credit or Debit Card
                    </span>
                  </label>
                  <label
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 px-4 py-3.5 transition ${
                      paymentMethod === "bank"
                        ? "border-primary bg-[rgba(6,11,154,0.05)]"
                        : "border-[#F1F5F9]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      checked={paymentMethod === "bank"}
                      onChange={() => setPaymentMethod("bank")}
                      className="h-4 w-4 accent-primary"
                    />
                    <span className="text-sm font-semibold text-heading">
                      Direct Debit / Bank Transfer
                    </span>
                  </label>
                </div>
              </div>

              {/* Proceed Button */}
              <button
                type="button"
                className="mt-8 w-full rounded-2xl bg-heading py-4 text-lg font-black text-white shadow-md transition hover:shadow-lg sm:text-xl"
              >
                Proceed to Payment
              </button>

              {/* Security Note */}
              <div className="mt-4 flex items-center justify-center gap-1.5 opacity-50">
                <Lock className="h-3.5 w-3.5" />
                <span className="text-[10px] font-bold uppercase tracking-wide">
                  Secure SSL Encrypted Payment
                </span>
              </div>
            </div>

            {/* Quote */}
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
