const steps = [
  {
    title: "Concierge check-in",
    description:
      "Discuss coat goals, temperament notes, and any sensitivities while your pup explores aromatherapy treats."
  },
  {
    title: "Spa bath ritual",
    description:
      "Warm hydro-massage cleanse, tailored shampoo layering, blueberry facial, and luxe towel wrap."
  },
  {
    title: "Detail-driven styling",
    description:
      "Hand blow-dry, de-shedding or fluff drying, precision trimming, and pawdicure with nourishing paw balm."
  },
  {
    title: "Finishing touches",
    description:
      "Breath refresh, coat mist, photo update, and personalized home-care plan for sustained results."
  }
];

export const Process = () => {
  return (
    <section id="process" className="relative pt-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[36px] bg-white/85 p-10 shadow-2xl shadow-orange-100/60">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="subheading">Our signature grooming journey</p>
              <h2 className="section-heading mt-2">Every appointment feels like a spa retreat.</h2>
            </div>
            <p className="max-w-xl text-base text-slate-600">
              We pace sessions to your pet's comfort level, scheduling extra cuddle breaks and quiet time when needed.
              Parents receive text updates plus before-and-after photos for keepsakes.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-5 rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-lg font-semibold text-white shadow-glow">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-display text-xl text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
