const highlights = [
  {
    title: "Fear-free handling",
    description:
      "Certified groomers use desensitization techniques, quiet equipment, and positive reinforcement for stress-free visits."
  },
  {
    title: "Holistic spa menu",
    description:
      "Choose from mineral mud masks, aromatherapy paw soaks, shed control facials, and therapeutic brush-outs."
  },
  {
    title: "Wellness monitoring",
    description:
      "We track coat condition, skin health, and paw pad hydration—sending post-visit notes with recommendations."
  }
];

const trustMarks = [
  {
    label: "Fear Free Certified Groomer",
    detail: "Every team member is fear-free certified and first-aid trained."
  },
  {
    label: "AKC S.A.F.E. Salon",
    detail: "We exceed AKC safety standards with one-on-one appointments."
  },
  {
    label: "Pet CPR trained",
    detail: "Annual recertification for emergency readiness."
  }
];

export const Experience = () => {
  return (
    <section className="relative pt-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="subheading">Luxury care, compassionate handling</p>
            <h2 className="section-heading">An elevated grooming journey crafted around comfort.</h2>
            <p className="text-lg text-slate-600">
              We schedule limited appointments per day to keep our studio calm and serene. Each pup enjoys warm towel
              wraps, coat-specific products, and optional add-ons like reiki massage or blueberry facials. Parent
              updates with photos ensure you stay connected throughout the pampering.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {[{ value: '12 yrs', label: 'Master groomer expertise' }, { value: '1:1', label: 'Individual appointments only' }, { value: '35 min', label: 'Average check-in to cuddle time' }].map((item) => (
                <div key={item.label} className="rounded-2xl border border-primary-100 bg-white/80 p-5 text-center shadow-sm">
                  <p className="text-2xl font-semibold text-primary-500">{item.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="section-card relative overflow-hidden p-8">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary-100 blur-3xl" aria-hidden />
            <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-accent-200 blur-3xl" aria-hidden />
            <h3 className="font-display text-2xl text-slate-900">Our promise</h3>
            <p className="mt-4 text-base text-slate-600">
              We lead with empathy and transparency—partnering with you to keep your pup healthy, confident, and camera-ready.
            </p>
            <div className="mt-8 space-y-5">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-500">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-4 border-t border-slate-200 pt-6">
              {trustMarks.map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-slate-600">{item.label}</span>
                  <span className="text-sm text-slate-500">{item.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
