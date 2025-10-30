const testimonials = [
  {
    name: "Luna & Harper",
    role: "Goldendoodle & Aussie mom",
    quote:
      "Pampered Paws is the first salon where Luna leaps out of the car with excitement. The groomers remember every detail—from her favorite playlist to how she prefers her tail trimmed.",
    rating: 5
  },
  {
    name: "Bentley",
    role: "Bulldog dad",
    quote:
      "The team takes extra care with Bentley's sensitive skin. They follow up after each appointment and have transformed his coat health with their wellness plan.",
    rating: 5
  },
  {
    name: "Mochi",
    role: "Shih Tzu parent",
    quote:
      "Their Asian fusion trims are artful. Mochi comes home smelling divine and sporting the cutest bows that match the season.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative pt-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="subheading">Love notes from pet parents</p>
            <h2 className="section-heading mt-2">Our community of wagging tails says it best.</h2>
          </div>
          <p className="max-w-lg text-base text-slate-600">
            500+ five-star reviews across Google, Nextdoor, and Yelp. We proudly serve Riverview, Willow Park, and
            neighboring communities with complimentary pup pick-up services.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-3xl border border-white/60 bg-white/90 p-7 shadow-lg">
              <div className="text-lg" aria-hidden>
                {'★'.repeat(testimonial.rating)}
              </div>
              <blockquote className="mt-4 text-base text-slate-600">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-6 text-sm">
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-slate-500">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
