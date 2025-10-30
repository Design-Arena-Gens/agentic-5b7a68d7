const packages = [
  {
    name: "Classic Freshen Up",
    price: "$85",
    duration: "60-75 min",
    description: "Ideal for short-coat breeds needing routine maintenance and coat revitalization.",
    features: ["Hydro bath + conditioner", "Blow dry & light trim", "Ear + teeth cleaning", "Paw balm treatment"],
    badge: "Most Popular"
  },
  {
    name: "Luxury Full Groom",
    price: "$125",
    duration: "90-120 min",
    description: "Full-service pampering with hand scissoring, de-shedding, and aromatherapy treatments.",
    features: [
      "Custom coat styling",
      "Deshed or fluff blowout",
      "Blueberry facial + pawdicure",
      "Seasonal accessory + photo"
    ],
    highlighted: true
  },
  {
    name: "Wellness Membership",
    price: "$58",
    duration: "Bi-weekly",
    description: "Membership for frequent trims, coat conditioning, and priority booking.",
    features: ["4 grooms / season", "Monthly spa add-on", "Priority weekend slots", "Exclusive retail discounts"],
    badge: "VIP Club"
  }
];

export const Packages = () => {
  return (
    <section id="booking" className="relative pt-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="subheading">Transparent pricing, endless tail wags</p>
            <h2 className="section-heading mt-2">Choose the experience that fits your pup's lifestyle.</h2>
          </div>
          <p className="max-w-lg text-base text-slate-600">
            Every package includes personalized consultations, coat and skin analysis, and tailored home-care guidance.
            Add-ons like nail dremeling, creative color, or reiki massage can be booked at checkout.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex h-full flex-col rounded-3xl border bg-white/90 p-8 shadow-lg transition-transform duration-200 hover:-translate-y-1 ${
                pkg.highlighted ? 'border-primary-200 ring-2 ring-primary-200 shadow-orange-200/80' : 'border-white/70'
              }`}
            >
              {pkg.badge ? (
                <span className="absolute -top-3 left-6 rounded-full bg-accent-500 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg">
                  {pkg.badge}
                </span>
              ) : null}
              <div>
                <h3 className="font-display text-2xl text-slate-900">{pkg.name}</h3>
                <p className="mt-2 text-sm text-slate-500">{pkg.duration}</p>
                <p className="mt-4 text-base text-slate-600">{pkg.description}</p>
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-primary-500">{pkg.price}</span>
                <span className="text-sm text-slate-400">per session</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span aria-hidden>✔️</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] shadow-sm ${
                  pkg.highlighted
                    ? 'bg-primary-500 text-white shadow-glow hover:bg-primary-600'
                    : 'border border-primary-200 text-primary-500 hover:border-primary-300'
                }`}
              >
                Reserve Session
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
