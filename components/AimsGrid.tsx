import {
  BookOpen,
  Users,
  Heart,
  Briefcase,
  Shield,
  Scale,
} from "lucide-react";

const aims = [
  {
    icon: BookOpen,
    title: "Education Resources",
    description:
      "Providing access to literacy programs, digital skills training, and after-school tutoring for all ages.",
  },
  {
    icon: Users,
    title: "Social Integration",
    description:
      "Fostering connections through cultural events, community meetups, and language support groups.",
  },
  {
    icon: Heart,
    title: "Health & Wellbeing",
    description:
      "Promoting physical and mental health through workshops, sports activities, and counseling sessions.",
  },
  {
    icon: Briefcase,
    title: "Career Development",
    description:
      "Workshops on CV building, interview techniques, and connecting residents with local job opportunities.",
  },
  {
    icon: Shield,
    title: "Youth Advocacy",
    description:
      "Mentorship programs for young people to build confidence and develop leadership skills.",
  },
  {
    icon: Scale,
    title: "Rights & Advice",
    description:
      "Free legal aid clinics and advisory services on housing, immigration, and social benefits.",
  },
];

export default function AimsGrid() {
  return (
    <section className="flex flex-col items-center gap-12">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-bold leading-snug text-heading sm:text-3xl">
          Aims & Objectives
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-body-light">
          We work tirelessly across multiple pillars to ensure every member of
          our community has the tools they need to thrive.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {aims.map((aim) => (
          <div
            key={aim.title}
            className="flex flex-col gap-4 rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light">
              <aim.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-heading">{aim.title}</h3>
            <p className="text-base leading-relaxed text-body">{aim.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
