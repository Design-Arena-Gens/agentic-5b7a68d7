export const Contact = () => {
  return (
    <section id="contact" className="relative pt-24 pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-card p-10">
            <p className="subheading">Visit our studio</p>
            <h2 className="section-heading mt-3">Where tail wags meet artisan grooming.</h2>
            <div className="mt-6 space-y-6 text-sm text-slate-600">
              <div>
                <p className="font-semibold text-slate-900">Studio Address</p>
                <p>42 Tailwag Trail, Riverview, OR 97205</p>
                <a
                  href="https://maps.app.goo.gl/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center gap-2 text-primary-500"
                >
                  View on Maps →
                </a>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Studio Hours</p>
                <p>Tue - Fri: 8:30 AM – 6:00 PM</p>
                <p>Sat - Sun: 9:00 AM – 4:00 PM</p>
                <p>Closed Mondays for continuing education.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Contact</p>
                <p>Call/Text: (555) 123-4567</p>
                <p>Email: hello@pamperedpaws.studio</p>
              </div>
            </div>
            <div className="mt-8 rounded-2xl border border-white/60 bg-white/80 p-6 text-sm text-slate-600">
              <p className="font-semibold text-slate-900">Complimentary amenities</p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2">
                  <span aria-hidden>☕</span> Espresso & matcha bar for pet parents
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden>🛋️</span> Quiet lounge with live pup cam access
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden>🚐</span> Mobile spa appointments available within 15 miles
                </li>
              </ul>
            </div>
          </div>
          <form className="accent-border relative rounded-[36px] bg-white/95 p-10 shadow-2xl">
            <p className="subheading">Request an appointment</p>
            <h2 className="section-heading mt-3 text-3xl">Share your pup's grooming needs.</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
                Your Name
                <input
                  type="text"
                  name="name"
                  placeholder="Jane Doe"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-600 shadow-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-600 shadow-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
                Pup's Name
                <input
                  type="text"
                  name="petName"
                  placeholder="Mochi"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-600 shadow-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
                Breed & Age
                <input
                  type="text"
                  name="breed"
                  placeholder="Shih Tzu, 3 yrs"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-600 shadow-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  required
                />
              </label>
            </div>
            <label className="mt-6 flex flex-col gap-2 text-sm font-semibold text-slate-700">
              Desired Services
              <select
                name="services"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-600 shadow-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-200"
              >
                <option>Luxury Full Groom</option>
                <option>Signature Spa Groom</option>
                <option>Puppy Essentials</option>
                <option>Creative Styling</option>
                <option>Mobile Grooming</option>
              </select>
            </label>
            <label className="mt-6 flex flex-col gap-2 text-sm font-semibold text-slate-700">
              Tell us about your pup
              <textarea
                name="notes"
                rows={4}
                placeholder="Share temperament notes, coat goals, or special requests."
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-600 shadow-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-200"
              />
            </label>
            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-white shadow-glow transition hover:bg-primary-600"
            >
              Submit Request
            </button>
            <p className="mt-4 text-xs text-slate-500">
              We respond within one business day with tailored appointment options and prep tips.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
