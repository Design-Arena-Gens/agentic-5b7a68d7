import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1563461660947-507ef49c0f83?auto=format&fit=crop&w=900&q=80",
    alt: "Freshly groomed poodle with a stylish cut"
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    alt: "Dog receiving a gentle bath"
  },
  {
    src: "https://images.unsplash.com/photo-1525253013412-55c1a69a5738?auto=format&fit=crop&w=900&q=80",
    alt: "Groomer trimming dog fur with care"
  },
  {
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80",
    alt: "Happy dog wrapped in a towel"
  }
];

export const Gallery = () => {
  return (
    <section id="gallery" className="relative pt-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="subheading">Studio snapshots</p>
            <h2 className="section-heading mt-2">Before & after moments captured in our salon.</h2>
          </div>
          <p className="max-w-lg text-base text-slate-600">
            Peek into a typical spa day at Pampered Paws. We share photo updates during appointments so you can see each
            transformation in real time.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {galleryImages.map((image) => (
            <div key={image.src} className="group relative overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                width={900}
                height={900}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <p className="absolute bottom-6 left-6 right-6 text-lg font-semibold text-white opacity-0 transition group-hover:opacity-100">
                {image.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
