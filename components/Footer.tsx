export const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12 text-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:justify-between">
        <div className="max-w-sm space-y-3">
          <p className="font-display text-2xl text-white">Pampered Paws Grooming Studio</p>
          <p className="text-sm text-slate-400">
            Fear-free certified stylists delivering luxury grooming, wellness monitoring, and endless cuddles to Riverview's most beloved pups.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-6 text-sm md:grid-cols-3">
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-white">Studio</p>
            <ul className="mt-3 space-y-2 text-slate-400">
              <li><a href="#services" className="transition hover:text-white">Services</a></li>
              <li><a href="#gallery" className="transition hover:text-white">Gallery</a></li>
              <li><a href="#faq" className="transition hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-white">Connect</p>
            <ul className="mt-3 space-y-2 text-slate-400">
              <li><a href="tel:5551234567" className="transition hover:text-white">(555) 123-4567</a></li>
              <li><a href="mailto:hello@pamperedpaws.studio" className="transition hover:text-white">hello@pamperedpaws.studio</a></li>
              <li><a href="https://instagram.com" className="transition hover:text-white" target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-white">Visit</p>
            <ul className="mt-3 space-y-2 text-slate-400">
              <li>42 Tailwag Trail</li>
              <li>Riverview, OR 97205</li>
              <li>Tue - Sun · By appointment</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Pampered Paws Grooming Studio. All rights reserved.</p>
          <p>Fear Free Certified · AKC S.A.F.E. Salon · Pet CPR Trained</p>
        </div>
      </div>
    </footer>
  );
};
