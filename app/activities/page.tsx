import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const activities = [
  {
    image: "/images/exercise.jpeg",
    title: "Health & Wellbeing",
    description:
      "Yoga sessions and mental health workshops for all ages to build a resilient community.",
    position: "object-center",
  },
  {
    image: "/images/computer_literacy.jpeg",
    title: "Computer Literacy",
    description:
      "Essential tech support, senior digital inclusion, and job seeking assistance.",
    position: "object-center",
  },
  {
    image: "/images/dart.jpeg",
    title: "Tennis & Darts Club",
    description:
      "Join our local sports community for weekly matches and tournament play.",
    position: "object-[50%_30%]",
  },
  {
    image: "/images/unity_centre_hall_1.jpeg",
    title: "Cultural Programs",
    description:
      "Heritage events, community meals, and celebrations of our diverse background.",
    position: "object-center",
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

          {/* Activities Grid */}
          <section>
            <h2 className="mb-8 text-[24px] font-black text-heading sm:text-[30px]">
              Our Programs
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {activities.map((item) => (
                <div
                  key={item.title}
                  className="overflow-hidden rounded-xl border border-border bg-white shadow-sm"
                >
                  <div className="relative h-48 sm:h-64 lg:h-72">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={`object-cover ${item.position}`}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-heading">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Organisations */}
          <section className="rounded-xl border border-border bg-white px-6 py-10 sm:px-8 sm:py-14 lg:px-12">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
              <div className="shrink-0 text-center lg:max-w-[280px] lg:text-left">
                <h2 className="text-[22px] font-black leading-tight text-heading sm:text-[26px]">
                  Organisations Using&nbsp;the&nbsp;Centre
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  We proudly host and partner with local NGOs and community
                  groups across South London.
                </p>
              </div>

              <div className="hidden h-20 w-px bg-border lg:block" />

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:justify-start">
                {organisations.map((org, i) => (
                  <span
                    key={org}
                    className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-heading sm:text-base"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                    {org}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
