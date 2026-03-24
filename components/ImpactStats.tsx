const stats = [
  { value: "450+", label: "Volunteers" },
  { value: "30+", label: "Active Programs" },
  { value: "12yrs", label: "Serving London" },
];

export default function ImpactStats() {
  return (
    <section className="border-y border-border py-10 sm:py-16">
      <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12 lg:gap-24">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2">
            <span className="text-3xl font-black leading-tight text-primary sm:text-4xl">
              {stat.value}
            </span>
            <span className="text-sm font-bold uppercase tracking-widest text-body-light">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
