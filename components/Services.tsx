const services = [
  {
    name: "Signature Spa Groom",
    description:
      "Luxury bath with aromatherapy, hand blow-dry, breed-specific haircut, pawdicure, and finishing cologne mist.",
    perks: ["Blueberry facial & deep coat conditioning", "Teeth brushing + breath refresh", "Coat health report"]
  },
  {
    name: "Puppy Essentials",
    description:
      "Gentle first-groom experience with positive reinforcement, light trimming, and socialization for young pups.",
    perks: ["Short, playful sessions", "Paw handling and brush training", "Parent take-home care tips"]
  },
  {
    name: "Shedding Solutions",
    description:
      "Deshed treatments featuring hydro-massage baths, high-velocity blowouts, and coat strengthening masks.",
    perks: ["Reduced shedding for 4-6 weeks", "Omega-rich coat sealing", "Complimentary home maintenance kit"]
  },
  {
    name: "Creative Styling",
    description:
      "Hand-scissored trims, Asian fusion styles, and vibrant, pet-safe coat color accents for show-stopping pups.",
    perks: ["Pre-visit styling consult", "Non-toxic vivid pigments", "Seasonal accessory collection"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="relative -mt-16 pt-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="section-card relative overflow-hidden px-8 py-12 md:px-12">
          <div className="absolute right-12 top-10 hidden h-32 w-32 rounded-full bg-primary-100 blur-3xl md:block" aria-hidden />
          <div className="absolute bottom-0 left-[5%] h-28 w-28 rounded-full bg-accent-100 blur-3xl" aria-hidden />
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="subheading">Grooming tailored to every coat type</p>
              <h2 className="section-heading mt-3">Concierge services your pup will adore.</h2>
            </div>
            <p className="max-w-xl text-base text-slate-600 md:text-lg">
              From hand-stripped terriers to curly doodles, our groomers customize every session based on coat texture,
              skin sensitivities, and your pet's temperament. Preview our most-loved packages below.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.name}
                className="accent-border relative flex h-full flex-col justify-between rounded-3xl bg-white/90 p-8 shadow-lg"
              >
                <div>
                  <h3 className="font-display text-2xl text-slate-900">{service.name}</h3>
                  <p className="mt-3 text-base text-slate-600">{service.description}</p>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-slate-500">
                  {service.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <span aria-hidden>🐾</span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
