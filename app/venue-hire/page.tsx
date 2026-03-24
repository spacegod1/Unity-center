import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Wifi,
  Monitor,
  Accessibility,
  Tv,
  Coffee,
  Printer,
  Lock,
  Zap,
  UtensilsCrossed,
  Users,
  Shield,
  Mail,
} from "lucide-react";

const spaces = [
  {
    title: "The Grand Hall",
    capacity: "Capacity: 120",
    price: "From £45/hr",
    description:
      "Perfect for weddings, community workshops, and large-scale presentations. Features integrated PA system and stage area.",
    features: [
      { label: "High-speed Wi-Fi", Icon: Wifi },
      { label: "AV System", Icon: Monitor },
      { label: "Full Access", Icon: Accessibility },
    ],
    image: "/images/venue-grand-hall.png",
  },
  {
    title: "The Executive Suite",
    capacity: "Capacity: 12",
    price: "From £25/hr",
    description:
      "A professional environment for board meetings, interviews, or small team strategy sessions.",
    features: [
      { label: '65" Screen', Icon: Tv },
      { label: "Tea & Coffee", Icon: Coffee },
      { label: "Printing", Icon: Printer },
    ],
    image: "/images/venue-executive-suite.png",
  },
  {
    title: "Creative Studio Pods",
    capacity: "Day Pass / Monthly",
    price: "From £15/day",
    description:
      "Individual desks or semi-private pods for freelancers, remote workers, and local NGOs.",
    features: [
      { label: "Private Lockers", Icon: Lock },
      { label: "High-Speed Fiber", Icon: Zap },
      { label: "Shared Kitchen", Icon: UtensilsCrossed },
    ],
    image: "/images/venue-studio-pods.png",
  },
];

export default function VenueHirePage() {
  return (
    <>
      <Header activePage="Projects" />
      <main className="mx-auto w-full max-w-[1280px] flex-1 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16 py-10">
          {/* Hero */}
          <section className="relative overflow-hidden rounded-xl bg-heading px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <Image
              src="/images/venue-hero.png"
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

          {/* Two-column layout */}
          <div id="spaces" className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            {/* Left: Space Listings */}
            <div className="flex flex-col gap-6 lg:col-span-3">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-heading">
                  Our Available Spaces
                </h2>
              </div>

              {spaces.map((space) => (
                <div
                  key={space.title}
                  className="overflow-hidden rounded-xl border border-border bg-white shadow-sm"
                >
                  <div className="relative h-36 sm:h-44">
                    <Image
                      src={space.image}
                      alt={space.title}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-3 right-3 z-10 rounded-full bg-heading/70 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                      {space.capacity}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-lg font-bold text-heading">
                        {space.title}
                      </h3>
                      <span className="text-sm font-bold text-primary">
                        {space.price}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-body">
                      {space.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {space.features.map((feat) => (
                        <span
                          key={feat.label}
                          className="inline-flex items-center gap-1.5 rounded bg-[#F1F5F9] px-3 py-1.5 text-xs font-medium text-heading"
                        >
                          <feat.Icon className="h-3.5 w-3.5" />
                          {feat.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Booking Enquiry Form */}
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-xl border border-border bg-white shadow-lg lg:sticky lg:top-24">
                <div className="h-1.5 bg-primary" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-heading">
                    Booking Enquiry
                  </h3>
                  <p className="mt-1 text-sm text-body-light">
                    Response within 24 working hours
                  </p>

                  <form className="mt-6 flex flex-col gap-4">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-heading">
                        Full Name
                      </label>
                      <input
                        type="text"
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
                          type="email"
                          placeholder="you@email.com"
                          className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-heading outline-none transition-colors placeholder:text-body-light focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold text-heading">
                          Phone
                        </label>
                        <input
                          type="tel"
                          placeholder="+44 ..."
                          className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-heading outline-none transition-colors placeholder:text-body-light focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-heading">
                        Preferred Space
                      </label>
                      <select className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-heading outline-none transition-colors focus:border-primary">
                        <option value="">Select a space</option>
                        <option>The Grand Hall</option>
                        <option>The Executive Suite</option>
                        <option>Creative Studio Pods</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-heading">
                        Booking Date
                      </label>
                      <input
                        type="date"
                        className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-heading outline-none transition-colors focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-heading">
                        Attendance
                      </label>
                      <input
                        type="number"
                        placeholder="Expected number of attendees"
                        min={1}
                        className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-heading outline-none transition-colors placeholder:text-body-light focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-heading">
                        Event Details
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your event..."
                        className="w-full resize-none rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-heading outline-none transition-colors placeholder:text-body-light focus:border-primary"
                      />
                    </div>

                    <label className="flex items-start gap-2.5 text-sm text-body">
                      <input
                        type="checkbox"
                        className="mt-0.5 h-4 w-4 rounded border-border accent-primary"
                      />
                      <span className="leading-snug">
                        Apply for NGO/Community discounted rate (Eligibility
                        proof required)
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="mt-2 w-full rounded-lg bg-primary py-3 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-shadow hover:shadow-md"
                    >
                      Send Enquiry
                    </button>
                  </form>

                  <div className="mt-5 flex items-center justify-center gap-4 border-t border-border pt-5">
                    <div className="flex items-center gap-1.5 text-xs text-body-light">
                      <Shield className="h-3.5 w-3.5" />
                      Secure &amp; Private Data Handling
                    </div>
                    <span className="text-border">|</span>
                    <a
                      href="#"
                      className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      Need a custom quote? Contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
