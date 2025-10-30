import Image from "next/image";

export const Hero = () => {
  return (
    <section
      id="top"
      className="hero-gradient relative overflow-hidden pt-28 pb-24 text-slate-900"
    >
      <div className="noise-overlay" aria-hidden />
      <div className="blur-blob left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-accent-200" aria-hidden />
      <div className="blur-blob bottom-[-20%] right-[5%] h-80 w-80 rounded-full bg-primary-300" aria-hidden />

      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:flex-row lg:items-center">
        <div className="max-w-2xl space-y-8">
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-primary-600">
            <span className="subheading">FIVE-STAR GROOMING</span>
            <span className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 shadow-sm shadow-primary-200/60">
              <span aria-hidden>⭐️⭐️⭐️⭐️⭐️</span>
              Loved by 1,200+ local pet parents
            </span>
          </div>
          <h1 className="font-display text-4xl leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Spa-level grooming tailored to your best friend's unique personality.
          </h1>
          <p className="text-lg text-slate-600 md:text-xl">
            At Pampered Paws, every pup enjoys aromatherapy baths, hand-finished cuts, and fear-free handling from
            master groomers. Relax in our lounge while we transform bath day into a luxurious retreat.
          </p>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="#booking"
              className="rounded-full bg-primary-500 px-8 py-3 text-base font-semibold uppercase tracking-[0.35em] text-white shadow-glow transition hover:bg-primary-600"
            >
              Book a Spa Day
            </a>
            <a
              href="#services"
              className="rounded-full border border-primary-200 px-8 py-3 text-base font-semibold uppercase tracking-[0.35em] text-primary-600 transition hover:border-primary-400 hover:text-primary-500"
            >
              Explore Services
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                label: "Certified groomers",
                value: "6",
                description: "Fear-free & AKC safety certified"
              },
              {
                label: "Tailored spa packages",
                value: "12",
                description: "Custom add-ons & seasonal treatments"
              },
              {
                label: "Pup comfort score",
                value: "98%",
                description: "Pups leave relaxed & wagging"
              }
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm">
                <p className="text-3xl font-semibold text-primary-500">{stat.value}</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">{stat.label}</p>
                <p className="mt-2 text-sm text-slate-500">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex w-full justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-8 -left-6 h-20 w-20 rounded-full bg-accent-200/60 blur-2xl" aria-hidden />
            <div className="absolute -bottom-10 -right-8 h-32 w-32 rounded-full bg-primary-400/50 blur-3xl" aria-hidden />
            <div className="accent-border relative overflow-hidden rounded-[30px] bg-white/60 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80"
                alt="Groomer styling a happy golden doodle"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-10 left-1/2 w-11/12 -translate-x-1/2 rounded-3xl bg-white p-5 text-slate-600 shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-500">Why pet parents choose us</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span aria-hidden>✨</span>
                  Breed-specific styling + creative trims
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden>🫧</span>
                  Hypoallergenic, organic spa products
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden>🫶</span>
                  One-on-one appointments for every pup
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
