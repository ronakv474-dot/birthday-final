import { useEffect, useRef, useState } from 'react';

export function DreamsSection() {
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
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-rose-cream to-blush/40 relative overflow-hidden">
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-dancing text-5xl md:text-6xl text-warm-brown mb-4">Our Future Dream</h2>
          <p className="font-cormorant text-xl text-soft-brown italic">
            "A dream I hold close to my heart..."
          </p>
        </div>

        {/* Poetic Dream Section */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -inset-4 border-2 border-rose-gold/20 rounded-3xl transform rotate-1" />
            <div className="absolute -inset-4 border-2 border-rose-gold/10 rounded-3xl transform -rotate-1" />
            
            <div className="bg-gradient-to-br from-ivory via-cream to-ivory rounded-3xl p-8 md:p-12 shadow-2xl relative">
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 text-3xl">🏡</div>
              <div className="absolute top-4 right-4 text-3xl">💕</div>
              <div className="absolute bottom-4 left-4 text-3xl">🌸</div>
              <div className="absolute bottom-4 right-4 text-3xl">✨</div>

              <div className="text-center space-y-8 py-8">
                <div className="space-y-6">
                  <p className="font-dancing text-3xl md:text-4xl text-warm-brown leading-relaxed">
                    "Ek sundar, shaant, pyara sa ghar..."
                  </p>
                  
                  <p className="font-cormorant text-xl md:text-2xl text-soft-brown italic leading-relaxed">
                    jisme main aur meri <span className="text-rose-gold font-semibold">Abhilasha</span> 
                    <br />apni duniya banayenge...
                  </p>

                  <div className="py-4">
                    <span className="text-4xl animate-heartbeat inline-block">🏠</span>
                  </div>

                  <p className="font-cormorant text-xl md:text-2xl text-soft-brown italic leading-relaxed">
                    Jahan hum khushi se life spend karenge...
                  </p>

                  <p className="font-cormorant text-xl md:text-2xl text-soft-brown italic leading-relaxed">
                    Jahan hum ek dusre ke bina reh nahi sakte...
                  </p>

                  <div className="py-4">
                    <span className="text-4xl animate-float inline-block">💑</span>
                  </div>

                  <p className="font-dancing text-2xl md:text-3xl text-rose-gold leading-relaxed">
                    Aur jis jahaan me bichhadne ka riwaaj na ho...
                  </p>
                </div>

                {/* English translation */}
                <div className="mt-12 pt-8 border-t border-soft-pink/30">
                  <p className="font-poppins text-sm text-soft-brown leading-relaxed max-w-2xl mx-auto">
                    <span className="text-rose-gold">✨ Translation:</span> A beautiful, peaceful, lovely home... 
                    where you and I will build our own world... where we'll spend our lives in happiness... 
                    where we can't live without each other... and where separation doesn't exist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Promises */}
        <div className={`mt-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: "✈️", text: "Travel Together" },
              { emoji: "🏠", text: "Our Own Home" },
              { emoji: "👫", text: "Grow Old Together" },
              { emoji: "💍", text: "Forever Yours" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="text-4xl block mb-3 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                  {item.emoji}
                </span>
                <span className="font-poppins text-sm text-warm-brown font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
