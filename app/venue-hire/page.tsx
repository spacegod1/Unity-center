import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpaceCarousel from "@/components/SpaceCarousel";
import BookingForm from "@/components/BookingForm";
import BookingModal from "@/components/BookingModal";
import { ArrowRight, Wifi, Monitor, Accessibility, Users } from "lucide-react";

export default function VenueHirePage() {
  return (
    <>
      <Header activePage="Hiring" />
      <main className="mx-auto w-full max-w-[1280px] flex-1 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16 py-10">
          {/* Hero */}
          <section className="relative overflow-hidden rounded-xl bg-heading px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <Image
              src="/images/unity_centre_entrance_1.jpeg"
              alt=""
              fill
              className="object-cover opacity-50"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(6,11,154,0.35) 0%, rgba(17,24,19,0.1) 100%)",
              }}
            />
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-[28px] font-black leading-tight text-white sm:text-[36px] lg:text-[48px]">
                Spaces That Inspire Community Growth.
              </h1>
              <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg">
                From professional boardrooms to expansive event halls, our
                high-quality facilities support both local businesses and
                community initiatives.
              </p>
              <a
                href="#spaces"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-bold text-white shadow-sm transition-shadow hover:shadow-md"
              >
                Browse Spaces
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </section>

          {/* Main Hall + Sidebar Booking */}
          <div id="spaces" className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            {/* Left: Main Hall */}
            <div className="flex flex-col gap-6 lg:col-span-3">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-heading">Our Spaces</h2>
              </div>

              {/* The Grand Hall */}
              <div className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="sm:min-h-[320px]">
                    <SpaceCarousel />
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-8">
                    <span className="inline-block w-fit rounded-full bg-primary-light px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                      Available Now
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-heading">
                      The Grand Hall
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">
                      Our main hall is perfect for weddings, community workshops,
                      and large-scale presentations. Features an integrated PA
                      system, stage area, tables and seating for up to 120 guests.
                    </p>
                    <div className="mt-4 rounded-lg bg-[#F1F5F9] px-4 py-3">
                      <p className="text-lg font-black text-heading">
                        From £55<span className="text-sm font-semibold text-body">/hr</span>
                      </p>
                      <p className="mt-1 text-xs text-body-light">
                        Capacity: 60 guests
                      </p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded bg-[#F1F5F9] px-3 py-1.5 text-xs font-medium text-heading">
                        <Wifi className="h-3.5 w-3.5" /> Wi-Fi
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded bg-[#F1F5F9] px-3 py-1.5 text-xs font-medium text-heading">
                        <Monitor className="h-3.5 w-3.5" /> AV System
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded bg-[#F1F5F9] px-3 py-1.5 text-xs font-medium text-heading">
                        <Accessibility className="h-3.5 w-3.5" /> Accessible
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Space */}
              <div className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="relative sm:min-h-[280px]">
                    <video
                      src="/images/unity_office.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-8">
                    <span className="inline-block w-fit rounded-full bg-primary-light px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                      Available Now
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-heading">
                      Private Office
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">
                      A self-contained private office ideal for small teams,
                      consultants, or community organisations looking for a
                      permanent base in Balham.
                    </p>
                    <div className="mt-4 rounded-lg bg-[#F1F5F9] px-4 py-3">
                      <p className="text-lg font-black text-heading">
                        £300<span className="text-sm font-semibold text-body">/month</span>
                      </p>
                      <p className="mt-1 text-xs text-body-light">
                        Available for inspection any time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Booking Form — desktop only */}
            <div className="hidden lg:col-span-2 lg:block">
              <div className="overflow-hidden rounded-xl border border-border bg-white shadow-lg lg:sticky lg:top-24">
                <div className="h-1.5 bg-primary" />
                <div className="p-6">
                  <BookingForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Mobile: Fixed booking button + modal */}
      <BookingModal />
    </>
  );
}
