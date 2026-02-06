import { useEffect, useRef, useState } from 'react';

export function OurStorySection() {
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

  const milestones = [
    {
      date: "3rd August 2024",
      time: "1:45 PM",
      title: "The Beginning",
      description: "The moment you said yes, my world became beautiful. Our story began, and I knew life would never be the same.",
      emoji: "💕"
    },
    {
      date: "Every Day Since",
      title: "Growing Together",
      description: "1.5 years of pure love. No breakup ever mentioned. Just two hearts becoming one, slowly and beautifully.",
      emoji: "🌱"
    },
    {
      date: "Distance & Love",
      title: "We Don't Meet Often",
      description: "But every single day, our love grows stronger. The distance only makes our bond deeper, our conversations more meaningful.",
      emoji: "💌"
    },
    {
      date: "Today",
      title: "Your Special Day",
      description: "And here we are, celebrating you — the most beautiful soul I've ever known. Happy Birthday, meri jaan.",
      emoji: "🎂"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-cream to-rose-cream">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-dancing text-5xl md:text-6xl text-warm-brown mb-4">Our Story</h2>
          <p className="font-cormorant text-xl text-soft-brown italic">
            "A love that grows every single day..."
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-soft-pink via-rose-gold to-soft-pink transform md:-translate-x-1/2" />

          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row md:items-center mb-12 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-rose-gold rounded-full transform -translate-x-1/2 border-4 border-white shadow-lg z-10" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                <div className="glass rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <span className="text-4xl mb-4 block">{milestone.emoji}</span>
                  <p className="font-poppins text-sm text-rose-gold font-medium">{milestone.date}</p>
                  {milestone.time && (
                    <p className="font-poppins text-xs text-soft-brown">{milestone.time}</p>
                  )}
                  <h3 className="font-dancing text-2xl text-warm-brown mt-2 mb-3">{milestone.title}</h3>
                  <p className="font-poppins text-soft-brown text-sm leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
