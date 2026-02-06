import { useEffect, useRef, useState } from 'react';

export function WishesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-blush/40 to-soft-pink/30 relative overflow-hidden">
      {/* Decorative balloons */}
      <div className="absolute top-10 left-10 text-5xl opacity-30 animate-float">🎈</div>
      <div className="absolute top-20 right-20 text-4xl opacity-30 animate-float delay-400">🎈</div>
      <div className="absolute bottom-40 left-20 text-4xl opacity-30 animate-float delay-200">🎈</div>
      <div className="absolute top-40 left-1/3 text-3xl opacity-30 animate-float delay-600">🎈</div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Birthday Cake */}
          <div className="text-8xl mb-8 animate-pulse-soft">🎂</div>

          {/* Main Wish */}
          <h2 className="font-dancing text-5xl md:text-7xl text-warm-brown mb-6">
            Happy Birthday
          </h2>
          <h3 className="font-dancing text-4xl md:text-6xl text-rose-gold mb-8">
            Abhilasha! 🎉
          </h3>

          <div className="space-y-4 mb-12">
            <p className="font-cormorant text-xl md:text-2xl text-soft-brown italic">
              My Babby, My Darling, My Sweetheart
            </p>
            <p className="font-cormorant text-xl md:text-2xl text-soft-brown italic">
              My Little World, My Everything
            </p>
            <p className="font-cormorant text-xl md:text-2xl text-rose-gold italic">
              Mera Bachaa, Meri Cutieee 💕
            </p>
          </div>
        </div>

        {/* Wishes */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass rounded-3xl p-8 md:p-12 text-center">
            <h4 className="font-dancing text-3xl text-warm-brown mb-8">My Wishes For You ✨</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { emoji: "🌟", wish: "May all your dreams come true" },
                { emoji: "😊", wish: "May happiness follow you everywhere" },
                { emoji: "💪", wish: "May you achieve everything you desire" },
                { emoji: "💖", wish: "May our love grow stronger every day" },
                { emoji: "🌈", wish: "May your life be filled with colors" },
                { emoji: "🤗", wish: "May you always feel loved and cherished" },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 bg-white/50 rounded-xl p-4 hover:bg-soft-pink/30 transition-colors duration-300"
                >
                  <span className="text-3xl">{item.emoji}</span>
                  <span className="font-poppins text-warm-brown text-left">{item.wish}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-rose-gold/20 via-soft-pink/30 to-rose-gold/20 rounded-3xl p-8 md:p-12 border-2 border-rose-gold/20">
            <p className="font-cormorant text-2xl md:text-3xl text-warm-brown leading-relaxed mb-6">
              "You came into my life like a beautiful surprise,
              <br />and made every day worth living.
              <br />Today, on your special day,
              <br />I just want you to know..."
            </p>
            
            <p className="font-dancing text-4xl md:text-5xl text-rose-gold mb-8">
              I Love You, Abhilasha ❤️
            </p>

            <p className="font-poppins text-soft-brown">
              From 3rd August 2024 to infinity and beyond...
            </p>

            <div className="mt-8 flex justify-center gap-4 text-4xl">
              <span className="animate-heartbeat">💕</span>
              <span className="animate-heartbeat delay-200">💖</span>
              <span className="animate-heartbeat delay-400">💗</span>
            </div>
          </div>
        </div>

        {/* Countdown or Date Display */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="font-dancing text-2xl text-warm-brown">
            Forever thankful for you 🙏
          </p>
          <p className="font-poppins text-sm text-soft-brown mt-2">
            — Your Ronak ji 💝
          </p>
        </div>
      </div>
    </section>
  );
}
