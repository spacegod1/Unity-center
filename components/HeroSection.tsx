import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-8 py-8 lg:flex-row lg:gap-12 lg:py-16">
      <div className="flex max-w-xl flex-col gap-6">
        <h1 className="text-[36px] font-black leading-none tracking-tight text-heading sm:text-[48px] lg:text-[60px]">
          Empowering Our Community
        </h1>
        <p className="text-lg leading-relaxed text-body">
          Unity Centre of South London is dedicated to fostering social
          integration and providing essential support to our local neighbors.
          Since our inception, we&apos;ve been a beacon of hope for residents
          seeking guidance, connection, and growth.
        </p>
        <div className="flex flex-col gap-4 pt-2 sm:flex-row">
          <Link
            href="/about"
            className="rounded-lg bg-primary px-8 py-3.5 text-center text-base font-bold text-white transition-shadow hover:shadow-md"
          >
            Our Story
          </Link>
          <Link
            href="/get-involved"
            className="rounded-lg border border-heading px-8 py-3.5 text-center text-base font-bold text-heading transition-colors hover:bg-heading hover:text-white"
          >
            Get Involved
          </Link>
        </div>
      </div>

      <div className="relative w-full flex-1">
        <div className="absolute -left-6 -top-6 hidden h-full w-full rounded-xl bg-primary-light lg:block" />
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/images/hero-image.png"
            alt="Community members at Unity Centre"
            width={1024}
            height={764}
            className="h-[250px] w-full object-cover sm:h-[300px] lg:h-[400px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
