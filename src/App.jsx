import HeroSection from './components/sections/HeroSection';
import Navbar from './components/sections/Navbar';

const upcomingSections = [
  { id: 'categories', label: 'Categories' },
  { id: 'menu', label: 'Our Featured Food' },
  { id: 'about', label: 'About Us' },
  { id: 'newsletter', label: 'Newsletter' },
];

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream-50">
      <Navbar />

      <main>
        <HeroSection />

        {/* Kerangka section berikutnya sesuai urutan PRD. */}
        {upcomingSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            aria-label={section.label}
            className="scroll-mt-24"
          />
        ))}
      </main>

      {/* Footer akan dipecah menjadi Section Component tersendiri. */}
      <footer id="contact" aria-label="Footer" className="scroll-mt-24" />
    </div>
  );
}
