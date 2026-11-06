import { useState } from 'react';
import Button from '../ui/Button';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Categories', href: '#categories' },
  { label: 'Menu', href: '#menu' },
  { label: 'About Us', href: '#about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12"
      >
        <a
          href="#home"
          onClick={closeMenu}
          className="group inline-flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caramel-500"
          aria-label="Ovenly Bakery — kembali ke beranda"
        >
          <span className="grid size-11 place-items-center rounded-full bg-cocoa-900 text-cream-50 shadow-lg shadow-cocoa-900/15 transition-transform group-hover:-rotate-6">
            <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden="true">
              <path d="M7 14.5c0-4 2.2-7.4 5-9.5 2.8 2.1 5 5.5 5 9.5a5 5 0 0 1-10 0Z" stroke="currentColor" strokeWidth="1.7" />
              <path d="M9.2 11.2c1.8.4 3.6.4 5.6 0M9 14.4c2 .5 4 .5 6 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          </span>
          <span className="font-display text-2xl font-bold tracking-tight text-cocoa-900">
            Ovenly<span className="text-caramel-500">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-cocoa-900/70 transition-colors hover:text-cocoa-900 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caramel-500"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button as="a" href="#menu" className="min-h-11 px-5 py-2.5">
            Order Now
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="grid size-11 place-items-center rounded-full border border-cocoa-900/10 bg-white/70 text-cocoa-900 backdrop-blur transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caramel-500 lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
        >
          {isOpen ? (
            <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
              <path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="mx-5 rounded-3xl border border-cocoa-900/10 bg-cream-50/95 p-3 shadow-2xl shadow-cocoa-900/10 backdrop-blur-xl lg:hidden">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="block rounded-2xl px-4 py-3 text-sm font-bold text-cocoa-900/75 transition hover:bg-white hover:text-cocoa-900"
            >
              {item.label}
            </a>
          ))}
          <Button as="a" href="#menu" onClick={closeMenu} className="mt-2 w-full">
            Order Now
          </Button>
        </div>
      )}
    </header>
  );
}
