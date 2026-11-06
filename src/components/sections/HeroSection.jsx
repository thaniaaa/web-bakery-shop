import Button from '../ui/Button';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&auto=format&fit=crop&q=85';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[760px] overflow-hidden bg-[radial-gradient(circle_at_78%_30%,#f4c99c_0%,#fff3df_36%,#fffdf8_72%)] pt-28 sm:pt-32 lg:min-h-screen lg:pt-24"
    >
      <div className="absolute -left-24 top-44 size-72 rounded-full border border-caramel-400/20" aria-hidden="true" />
      <div className="absolute -left-12 top-56 size-44 rounded-full border border-caramel-400/20" aria-hidden="true" />

      <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-12 lg:pb-8">
        <div className="relative z-10 max-w-2xl text-center lg:text-left">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-caramel-500/20 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cocoa-700 backdrop-blur">
            <span className="size-2 rounded-full bg-caramel-500" />
            Fresh from the oven
          </p>

          <h1 className="font-display text-5xl leading-[0.98] font-bold tracking-[-0.045em] text-cocoa-900 sm:text-6xl lg:text-[5.4rem]">
            Baked with love,
            <span className="mt-2 block italic text-caramel-500">served with joy.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-cocoa-900/65 sm:text-lg sm:leading-8 lg:mx-0">
            Temukan roti, pastry, dan cake buatan tangan yang dipanggang segar setiap hari dari bahan pilihan untuk momen kecil yang terasa istimewa.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button as="a" href="#menu">
              Explore Our Menu
              <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
                <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
            <Button as="a" href="#about" variant="secondary">
              Our Story
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 border-t border-cocoa-900/10 pt-6 lg:justify-start">
            <div>
              <p className="font-display text-2xl font-bold text-cocoa-900">100%</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-cocoa-900/45">Fresh daily</p>
            </div>
            <div className="h-10 w-px bg-cocoa-900/10" />
            <div>
              <p className="font-display text-2xl font-bold text-cocoa-900">Handmade</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-cocoa-900/45">With care</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -inset-5 rotate-3 rounded-[3.5rem] border border-white/70 bg-white/25 backdrop-blur-sm" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] bg-caramel-400 shadow-[0_30px_80px_rgba(77,43,32,0.2)] sm:aspect-[5/4] lg:aspect-[4/5] lg:max-h-[680px]">
            <img
              src={HERO_IMAGE}
              alt="Cake dengan lapisan krim yang baru selesai dihias"
              className="size-full object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900/30 via-transparent to-white/10" aria-hidden="true" />
          </div>

          <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 p-3 pr-5 shadow-xl shadow-cocoa-900/10 backdrop-blur sm:bottom-7 sm:-left-8">
            <span className="grid size-11 place-items-center rounded-xl bg-cream-100 text-xl" aria-hidden="true">🥐</span>
            <div>
              <p className="text-xs font-semibold text-cocoa-900/50">Today&apos;s favorite</p>
              <p className="mt-0.5 font-display text-base font-bold text-cocoa-900">Butter Croissant</p>
            </div>
          </div>

          <div className="absolute -right-2 top-8 grid size-20 rotate-6 place-items-center rounded-full bg-cocoa-900 text-center text-[11px] font-bold leading-tight uppercase tracking-wider text-white shadow-xl sm:-right-7 sm:size-24">
            Baked<br />Fresh<br />Daily
          </div>
        </div>
      </div>
    </section>
  );
}
