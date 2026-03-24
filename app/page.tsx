import Link from "next/link";
import Image from "next/image";
import {
  HandHelping,
  GraduationCap,
  CalendarHeart,
  Users,
  Heart,
  Clock,
  UserCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stats = [
  { label: "Families Helped", value: "500+", icon: Heart },
  { label: "Years of Service", value: "15+", icon: Clock },
  { label: "Volunteers", value: "120+", icon: UserCheck },
];

const services = [
  {
    title: "Advice & Support",
    description:
      "Providing professional guidance, legal resources, and emotional support for individuals in need.",
    icon: HandHelping,
  },
  {
    title: "Education & Training",
    description:
      "Empowering locals through digital skills, language classes, and vocational workshop training.",
    icon: GraduationCap,
  },
  {
    title: "Community Events",
    description:
      "Bringing residents together through seasonal festivals, local markets, and cultural celebrations.",
    icon: CalendarHeart,
  },
  {
    title: "Youth Programs",
    description:
      "After-school clubs, mentoring, and sports activities dedicated to our younger generation's future.",
    icon: Users,
  },
];

export default function HomePage() {
  return (
    <>
      <Header activePage="Home" />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-[400px] items-center overflow-hidden bg-dark sm:min-h-[500px] lg:min-h-[600px]">
          <Image
            src="/images/home-hero.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(17,24,19,0.8) 0%, rgba(17,24,19,0.4) 50%, rgba(17,24,19,0) 100%)",
            }}
          />
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="max-w-full sm:max-w-2xl">
              <h1 className="text-[32px] leading-[1.1] font-black text-white sm:text-[44px] lg:text-[60px]">
                A Community Centre serving South and other parts of London
              </h1>
              <p className="mt-6 text-base font-medium text-slate-200 sm:text-lg lg:text-xl">
                Empowering our community through support, education, and unity.
                We provide the tools for growth.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/get-involved"
                  className="w-full rounded-xl bg-primary px-8 py-3.5 text-center text-base font-bold text-white shadow-sm transition-shadow hover:shadow-md sm:w-auto"
                >
                  Get Involved
                </Link>
                <Link
                  href="/about"
                  className="w-full rounded-xl border border-white/30 bg-white/10 px-8 py-3.5 text-center text-base font-bold text-white backdrop-blur transition-colors hover:bg-white/20 sm:w-auto"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative z-20 mx-auto mt-8 max-w-[1280px] px-4 sm:mt-0 sm:-mt-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-5 rounded-2xl border border-border bg-white p-6 shadow-lg"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-light">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-footer-text">
                    {stat.label}
                  </p>
                  <p className="text-[30px] font-black leading-tight text-dark">
                    {stat.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="text-center">
            <h2 className="text-2xl font-black text-dark sm:text-3xl lg:text-4xl">
              How We Can Help You
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-footer-text sm:text-lg">
              We offer a wide range of dedicated services designed to support and
              uplift our local community members through every stage of life.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-page-bg">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-dark">
                  {service.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-body-light">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
