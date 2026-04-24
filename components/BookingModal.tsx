"use client";

import { useState } from "react";
import { X, CalendarDays } from "lucide-react";
import BookingForm from "./BookingForm";

export default function BookingModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:shadow-xl lg:hidden"
      >
        <CalendarDays className="h-5 w-5" />
        Book This Space
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-10 max-h-[90vh] w-full overflow-y-auto rounded-t-2xl bg-white px-5 pb-8 pt-4 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-heading">Booking Enquiry</h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-page-bg"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-dark" />
              </button>
            </div>
            <BookingForm />
          </div>
        </div>
      )}
    </>
  );
}
