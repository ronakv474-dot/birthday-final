import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import { OurStorySection } from './components/OurStorySection';
import { HerQualitiesSection } from './components/HerQualitiesSection';
import { MemoriesSection } from './components/MemoriesSection';
import { LetterSection } from './components/LetterSection';
import { DreamsSection } from './components/DreamsSection';
import { WishesSection } from './components/WishesSection';
import { MusicPlayer } from './components/MusicPlayer';
import { FallingHearts } from './components/FallingHearts';

export function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <FallingHearts />
      <MusicPlayer />
      
      <HeroSection />
      <OurStorySection />
      <HerQualitiesSection />
      <MemoriesSection />
      <LetterSection />
      <DreamsSection />
      <WishesSection />
      
      {/* Footer */}
      <footer className="py-8 text-center bg-gradient-to-r from-soft-pink/30 via-blush/30 to-soft-pink/30">
        <p className="font-cormorant text-lg text-warm-brown italic">
          Made with all my love, forever yours — Ronak ❤️
        </p>
        <p className="font-poppins text-sm text-soft-brown mt-2">
          3rd August 2024 — Forever & Always
        </p>
      </footer>
    </div>
  );
}
