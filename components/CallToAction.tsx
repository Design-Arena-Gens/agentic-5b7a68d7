export const CallToAction = () => {
  return (
    <section className="relative pt-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-primary-500 via-primary-400 to-accent-500 p-[1px] shadow-2xl">
          <div className="rounded-[39px] bg-white/95 px-10 py-12 text-center">
            <p className="subheading text-primary-500">Limited appointments weekly</p>
            <h2 className="mt-3 font-display text-3xl text-slate-900 md:text-4xl">
              Book your pup's next spa day &mdash; first-time guests receive a complimentary coat health consult.
            </h2>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              Call, text, or request a visit through our online form. We'll confirm availability and send pre-visit tips
              tailored to your pup's breed and temperament.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 md:flex-row">
              <a
                href="tel:5551234567"
                className="rounded-full bg-primary-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-white shadow-glow transition hover:bg-primary-600"
              >
                Call the Studio
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/70 bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-primary-500 shadow-sm transition hover:border-primary-200"
              >
                Request Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
