import { useEffect, useRef, useState } from 'react';

export function LetterSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-cream to-rose-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-5 text-4xl opacity-20 animate-float">💌</div>
      <div className="absolute top-20 right-10 text-3xl opacity-20 animate-float delay-400">✉️</div>
      <div className="absolute bottom-20 left-10 text-3xl opacity-20 animate-float delay-600">💝</div>

      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-dancing text-5xl md:text-6xl text-warm-brown mb-4">A Letter From My Heart</h2>
          <p className="font-cormorant text-xl text-soft-brown italic">
            "Words I've always wanted to say..."
          </p>
        </div>

        {/* The Letter */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-ivory rounded-3xl p-8 md:p-12 shadow-2xl border border-soft-pink/30 relative">
            {/* Letter decorations */}
            <div className="absolute top-4 left-4 text-2xl">💐</div>
            <div className="absolute top-4 right-4 text-2xl">🌸</div>

            <div className="font-cormorant text-lg md:text-xl text-warm-brown leading-relaxed space-y-6">
              <p className="font-dancing text-2xl text-rose-gold">My Dearest Abhilasha,</p>

              <p className="italic">
                On this special day, as you celebrate another beautiful year of your life, 
                I want you to know how deeply grateful I am that you exist in this world — and in my life.
              </p>

              <p>
                <span className="font-semibold text-rose-gold">Thank you</span> — for understanding me when 
                I couldn't understand myself. For loving me on the days I found it hard to love myself. 
                For being patient, kind, and endlessly caring. You saw my flaws and chose to stay. 
                You heard my silence and understood every word. That's not just love, meri jaan — that's magic.
              </p>

              <p>
                <span className="font-semibold text-rose-gold">I'm sorry</span> — for the times I made mistakes, 
                for the moments I wasn't at my best, for any word that hurt you even unintentionally. 
                You deserve nothing but happiness, and I promise to always try harder to give you that.
              </p>

              <p>
                There was a time when the fear of losing you haunted me. But then you said those words 
                that still echo in my heart every day —
              </p>

              <div className="bg-soft-pink/20 rounded-xl p-6 text-center border-l-4 border-rose-gold">
                <p className="font-dancing text-2xl md:text-3xl text-warm-brown">
                  "I am yours only, my babby, don't worry." 💕
                </p>
              </div>

              <p>
                Those words... they didn't just calm my fears — they made me believe in forever. 
                In a world where people leave so easily, you chose to stay. You chose us. 
                And I will spend every day being worthy of that choice.
              </p>

              <p>
                My darling, my little world, my everything — I may not be perfect, but my love for you is. 
                1.5 years, and not once did we talk about giving up. That says everything about us, about you, 
                about what we have built together.
              </p>

              <p>
                <span className="font-semibold text-rose-gold">I promise you</span> — a future filled with 
                respect, endless adventures, quiet moments together, laughter that never fades, 
                and a love that only grows stronger with time. I promise to travel the world with you, 
                to build a life with you, to grow old with you.
              </p>

              <p>
                We don't meet often, and that breaks my heart. But even in the distance, 
                I feel you with me every moment. Our daily conversations, our silly jokes, 
                our "gucha" moments, your cute "lena dena ni h" — they all keep me going.
              </p>

              <p className="text-center text-xl">
                You are my peace in chaos, my smile in sadness, my home when I'm lost.
              </p>

              <p className="font-dancing text-2xl text-rose-gold text-right mt-8">
                Forever & Always Yours,
                <br />
                <span className="text-3xl">Ronak ❤️</span>
              </p>
            </div>
          </div>
        </div>

        {/* If I Were With You Today */}
        <div className={`mt-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass rounded-3xl p-8 md:p-10 text-center">
            <h3 className="font-dancing text-3xl md:text-4xl text-warm-brown mb-6">
              If I Were With You Today... 💕
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { emoji: "🎂", text: "Cut cake together" },
                { emoji: "🍝", text: "Feed you with my hands" },
                { emoji: "🍳", text: "Cook for my foodie" },
                { emoji: "🤗", text: "Hug you endlessly" },
                { emoji: "🚶‍♂️", text: "Go out together" },
                { emoji: "💋", text: "Pamper you all day" },
              ].map((item, index) => (
                <div key={index} className="bg-white/50 rounded-xl p-4 hover:bg-soft-pink/30 transition-colors duration-300">
                  <span className="text-3xl block mb-2">{item.emoji}</span>
                  <span className="font-poppins text-sm text-warm-brown">{item.text}</span>
                </div>
              ))}
            </div>
            <p className="font-cormorant text-lg text-soft-brown italic mt-6">
              "I would make you feel safe, loved, and the most beautiful person in the world."
            </p>
          </div>
        </div>

        {/* Emotion of Distance */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block bg-gradient-to-r from-soft-pink/40 via-blush/40 to-soft-pink/40 rounded-full px-8 py-4">
            <p className="font-cormorant text-xl text-warm-brown">
              <span className="text-rose-gold">Sadness</span> of distance, 
              <span className="text-rose-gold"> Peace</span> of loyalty, 
              <span className="text-rose-gold"> Patience</span> in love 💕
            </p>
            <p className="font-poppins text-sm text-soft-brown mt-2">
              We can wait, because what we have is worth the wait.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
