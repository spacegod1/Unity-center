import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MapPin, Clock, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Header activePage="Contacts" />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
          <div className="pointer-events-none absolute -top-32 right-0 h-[280px] w-[280px] rounded-full bg-primary-light blur-[120px] sm:h-[380px] sm:w-[380px] lg:h-[480px] lg:w-[480px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-[200px] w-[200px] rounded-full bg-[rgba(6,11,154,0.05)] blur-[100px] sm:h-[260px] sm:w-[260px] lg:h-[320px] lg:w-[320px]" />

          <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-[32px] font-black leading-[1.1] tracking-tight text-heading sm:text-[44px] lg:text-[60px]">
                Supporting the Balham Community Together.
              </h1>
              <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
                Whether you need support, want to volunteer, or have a general
                inquiry, our doors are always open. Reach out via the form below
                or visit us in person.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mx-auto max-w-[1280px] px-4 pb-12 pt-4 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Left: Info + Map */}
            <div className="flex flex-col gap-8">
              {/* Info Card */}
              <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-heading">Visit Us</h2>
                <div className="mt-8 flex flex-col gap-8">
                  <InfoBlock
                    icon={<MapPin className="h-5 w-5 text-primary" />}
                    label="Our Location"
                    lines={[
                      "2-4 Ravenstone Street",
                      "Balham, London, SW12 9SS",
                    ]}
                  />
                  <InfoBlock
                    icon={<Clock className="h-5 w-5 text-primary" />}
                    label="Office Hours"
                    lines={[
                      "Mon – Fri: 9:00 AM – 6:00 PM",
                      "Sat: 10:00 AM – 2:00 PM",
                    ]}
                  />
                  <InfoBlock
                    icon={<Phone className="h-5 w-5 text-primary" />}
                    label="Phone & Email"
                    lines={[
                      "+7921 655533",
                      "+7868 239278",
                      "info@unitycentresl.org.uk",
                    ]}
                  />
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="overflow-hidden rounded-2xl border-4 border-white shadow-lg">
                <div className="relative h-[200px] w-full bg-slate-200 sm:h-[260px] lg:h-[320px]">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <MapPin className="h-16 w-16 text-body" />
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 shadow-md">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-heading">
                        2-4 Ravenstone Street, SW12 9SS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm lg:p-10">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function InfoBlock({
  icon,
  label,
  lines,
}: {
  icon: React.ReactNode;
  label: string;
  lines: string[];
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-bold text-heading">{label}</h3>
        <p className="mt-1 text-sm leading-relaxed text-body">
          {lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < lines.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

