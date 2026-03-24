import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm md:flex-row">
      <div className="relative h-[200px] w-full shrink-0 sm:h-[250px] md:h-auto md:w-[45%]">
        <Image
          src="/images/mission-image.png"
          alt="Unity Centre mission"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center gap-5 p-6 sm:p-8 md:p-12">
        <span className="inline-flex w-fit rounded-full bg-primary-light px-4 py-1 text-xs font-bold uppercase tracking-wide text-primary">
          Our Foundation
        </span>

        <h2 className="text-2xl font-bold leading-snug text-heading sm:text-3xl">
          A Mission of Unity
        </h2>

        <p className="text-lg font-medium leading-relaxed text-body sm:text-xl">
          &ldquo;To empower individuals through education, health, and social
          support, creating a stronger, more inclusive South London for
          everyone.&rdquo;
        </p>

        <div className="mt-2 h-1.5 w-12 rounded-full bg-primary" />
      </div>
    </section>
  );
}
