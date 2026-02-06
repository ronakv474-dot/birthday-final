import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-rose-cream via-blush to-soft-pink/40">
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-4xl animate-float">🌸</div>
        <div className="absolute top-40 right-20 text-3xl animate-float" style={{ animationDelay: '1s' }}>💕</div>
        <div className="absolute bottom-40 left-20 text-3xl animate-float" style={{ animationDelay: '2s' }}>✨</div>
        <div className="absolute bottom-20 right-10 text-4xl animate-float" style={{ animationDelay: '0.5s' }}>🌷</div>
        <div className="absolute top-1/3 left-1/4 text-2xl animate-float" style={{ animationDelay: '1.5s' }}>💗</div>
        <div className="absolute top-1/2 right-1/4 text-2xl animate-float" style={{ animationDelay: '2.5s' }}>🦋</div>
      </div>

      <div className={`text-center px-6 z-10 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Main Photo */}
        <div className="mb-8 relative">
          <div className="w-56 h-56 md:w-72 md:h-72 mx-auto rounded-full overflow-hidden border-4 border-white/60 shadow-2xl relative group">
            {/* ========================================
                🖼️ HERO PHOTO - REPLACE THIS IMAGE
                ========================================
                Replace the src with your couple photo
                Example: src="./images/main-couple.jpg"
                Or use: src="https://i.imgur.com/xxxxx.jpg"
                ======================================== */}
            <img 
              src="/images/memory1.jpg"
              alt="Me and Abhilasha"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-gold/20 to-transparent" />
          </div>
          {/* Decorative ring */}
          <div className="absolute inset-0 w-56 h-56 md:w-72 md:h-72 mx-auto rounded-full border-2 border-rose-gold/30 animate-pulse" style={{ transform: 'scale(1.1)' }} />
        </div>

        {/* Title */}
        <h1 className="font-dancing text-5xl md:text-7xl text-rose-gold mb-4 animate-fade-in">
          Happy Birthday
        </h1>
        
        <h2 className="font-cormorant text-3xl md:text-5xl text-warm-brown mb-6 font-semibold">
          My Dearest Abhilasha 💕
        </h2>

        <p className="font-poppins text-soft-brown text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
          Meri duniya, meri jaan, meri sabse khoobsurat muskan...
          <br />
          <span className="font-dancing text-2xl text-rose-gold">Aaj tera din hai, mera bachha!</span>
        </p>

        {/* Scroll indicator */}
        <div className="animate-bounce mt-12">
          <div className="w-8 h-12 mx-auto border-2 border-rose-gold/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-rose-gold/70 rounded-full animate-pulse" />
          </div>
          <p className="font-poppins text-sm text-soft-brown mt-2">Scroll Down ↓</p>
        </div>
      </div>
    </section>
  );
}
