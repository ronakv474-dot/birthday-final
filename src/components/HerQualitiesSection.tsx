import { useEffect, useRef, useState } from 'react';

export function HerQualitiesSection() {
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

  const qualities = [
    {
      emoji: "💗",
      title: "Extremely Caring",
      description: "The way you care for me, listen to me, and understand me — it's something I never knew I needed until I found you."
    },
    {
      emoji: "🌟",
      title: "Beautiful Inside & Out",
      description: "Your beauty radiates from your soul. Every smile, every look, every gesture — you're the most beautiful person I know."
    },
    {
      emoji: "🧠",
      title: "Smart & Intelligent",
      description: "Your intelligence amazes me every day. The way you think, the way you handle things — you inspire me."
    },
    {
      emoji: "🤝",
      title: "Understanding & Patient",
      description: "You accept me for who I am. You listen without judgment, love without conditions. That's rare and precious."
    },
    {
      emoji: "💪",
      title: "Gives Priority & Effort",
      description: "You make me feel important, valued, and loved. Your effort never goes unnoticed, meri jaan."
    },
    {
      emoji: "🥰",
      title: "Adorably Childish",
      description: "The way you become childish in front of me, mimic me in your cute way, blush and get shy — it melts my heart every time."
    }
  ];

  const habits = [
    { text: "Mimics me in the cutest way 🥺", icon: "🪞" },
    { text: 'Calls me "Ronak ji" / "Babby mere"', icon: "💬" },
    { text: "Becomes adorably childish with me", icon: "👶" },
    { text: "Blushes and gets shy so beautifully", icon: "🙈" },
    { text: '"Gucha" moments 💕', icon: "💭" },
    { text: '"Lena dena ni h" attitude 😂', icon: "✨" }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-rose-cream to-blush/30">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-dancing text-5xl md:text-6xl text-warm-brown mb-4">Why You're Special</h2>
          <p className="font-cormorant text-xl text-soft-brown italic">
            "Everything about you is magic, my sweetheart..."
          </p>
        </div>

        {/* Qualities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {qualities.map((quality, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="text-5xl mb-4 block animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                {quality.emoji}
              </span>
              <h3 className="font-dancing text-2xl text-warm-brown mb-3">{quality.title}</h3>
              <p className="font-poppins text-sm text-soft-brown leading-relaxed">{quality.description}</p>
            </div>
          ))}
        </div>

        {/* Little Habits Section */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="font-dancing text-3xl text-warm-brown text-center mb-8">Your Little Habits I Adore 💕</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {habits.map((habit, index) => (
              <div
                key={index}
                className="glass rounded-full px-6 py-3 flex items-center gap-2 hover:bg-soft-pink/30 transition-colors duration-300"
              >
                <span className="text-xl">{habit.icon}</span>
                <span className="font-poppins text-sm text-warm-brown">{habit.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Special Moment */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass rounded-3xl p-8 md:p-12 max-w-3xl mx-auto border-2 border-rose-gold/20">
            <span className="text-6xl block mb-6">💖</span>
            <h3 className="font-dancing text-3xl text-warm-brown mb-4">The Moment I Knew</h3>
            <p className="font-cormorant text-xl text-soft-brown italic leading-relaxed">
              "The moment I knew you were special was when you genuinely tried to understand me 
              and make my life better — through care, not control. You didn't try to change me, 
              you tried to grow with me. That's when I knew you were the one."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
