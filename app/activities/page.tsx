import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const filterTags = [
  { label: "All Activities", active: true },
  { label: "Health & Wellbeing" },
  { label: "Education" },
  { label: "Sports" },
  { label: "Cultural Programs" },
];

const activities = [
  {
    tag: "HEALTH",
    tagColor: "#22C55E",
    image: "/images/activity-health.png",
    title: "Health & Wellbeing",
    description:
      "Yoga sessions and mental health workshops for all ages to build a resilient community.",
  },
  {
    tag: "EDUCATION",
    tagColor: "#060B9A",
    image: "/images/activity-education.png",
    title: "Computer Literacy",
    description:
      "Essential tech support, senior digital inclusion, and job seeking assistance.",
  },
  {
    tag: "SPORTS",
    tagColor: "#F97316",
    image: "/images/activity-sports.png",
    title: "Tennis & Darts Club",
    description:
      "Join our local sports community for weekly matches and tournament play.",
  },
  {
    tag: "CULTURAL",
    tagColor: "#A855F7",
    image: "/images/activity-cultural.png",
    title: "Cultural Programs",
    description:
      "Heritage events, community meals, and celebrations of our diverse background.",
  },
];

const organisations = [
  "NOVIHA UK",
  "POSITIVE NETWORK",
  "FOMWAG UK",
  "DEVINE MERCY",
  "ADISADEL OLD BOYS",
  "WORLD WIDE UNITY MOVEMENT",
];

export default function ActivitiesPage() {
  return (
    <>
      <Header activePage="Projects" />
      <main className="mx-auto w-full max-w-[1280px] flex-1 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16 py-10">
          {/* Hero */}
          <section className="relative overflow-hidden rounded-xl bg-heading px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <Image
              src="/images/activities-hero.png"
              alt=""
              fill
              className="object-cover opacity-40"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(6,11,154,0.4) 0%, transparent 60%)",
              }}
            />
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-[32px] font-black leading-tight text-white sm:text-[40px] lg:text-[48px]">
                What Happens Here
              </h1>
              <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg">
                Discover the vibrant heart of our community. From health
                workshops to cultural programs, there is something for everyone
                at the Unity Centre.
              </p>
            </div>
          </section>

          {/* Filter Tags */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {filterTags.map((tag) => (
              <button
                key={tag.label}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  tag.active
                    ? "bg-primary text-white"
                    : "border border-border bg-white text-heading hover:border-primary hover:text-primary"
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>

          {/* Activities Grid */}
          <section>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <h2 className="text-[24px] font-black text-heading sm:text-[30px]">
                Current Programs
              </h2>
              <span className="w-fit rounded-full bg-primary-light px-4 py-1.5 text-xs font-bold text-primary">
                12 Active Programs
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {activities.map((item) => (
                <div
                  key={item.title}
                  className="overflow-hidden rounded-xl border border-border bg-white shadow-sm"
                >
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <span
                      className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white"
                      style={{ backgroundColor: item.tagColor }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-heading">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">
                      {item.description}
                    </p>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Organisations */}
          <section className="rounded-xl bg-[#EEEFFF] px-6 py-10 sm:px-8 sm:py-14 lg:px-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-[24px] font-black text-heading sm:text-[30px]">
                Organisations Using the Center
              </h2>
              <p className="mt-4 text-base leading-relaxed text-body">
                We are proud to host and partner with local NGOs and community
                groups that make South London a better place for everyone.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {organisations.map((org) => (
                <div
                  key={org}
                  className="flex items-center justify-center rounded-lg bg-white px-6 py-5 shadow-sm"
                >
                  <span className="text-center text-base font-black text-[#94A3B8] sm:text-xl">
                    {org}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
