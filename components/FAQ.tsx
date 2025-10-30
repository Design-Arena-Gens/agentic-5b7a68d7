const faqs = [
  {
    question: "How do you keep anxious pups comfortable during grooming?",
    answer:
      "We schedule extended appointments with quiet equipment, calming pheromone diffusers, and frequent cuddle breaks. If your pet has specific triggers, let us know so we can tailor the environment."
  },
  {
    question: "Do you offer mobile grooming?",
    answer:
      "Yes! Our mobile spa van brings the full Pampered Paws experience to your driveway. It features filtered water, climate control, and the same certified groomers you love in-studio." 
  },
  {
    question: "What vaccinations are required?",
    answer:
      "We require proof of Rabies, Bordetella, and Distemper/Parvo (DHPP) vaccines. Puppies under 16 weeks are exempt from Rabies but must have age-appropriate boosters."
  },
  {
    question: "Can I stay during the grooming session?",
    answer:
      "You're welcome to relax in our viewing lounge with complimentary lattes, but most pups focus best when they know parents will return for a big reveal and treat." 
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="relative pt-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="subheading">Frequently asked questions</p>
          <h2 className="section-heading mt-2">We’re here to make grooming joyful for everyone.</h2>
          <p className="mt-4 text-base text-slate-600">
            Don't see your question? Call or text us—we love chatting about coat care, puppy training, and breed-specific styling.
          </p>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-3xl border border-white/70 bg-white/90 p-6 shadow-md open:shadow-lg"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-3 text-left text-lg font-semibold text-slate-900">
                <span>{faq.question}</span>
                <span className="text-primary-500 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
