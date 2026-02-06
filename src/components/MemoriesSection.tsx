import { useEffect, useState, useRef } from 'react';

export function MemoriesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  {/* ========================================
      🖼️ GALLERY PHOTOS - ADD YOUR PHOTOS HERE
      ========================================
      Replace the src URLs with your own photos
      You can use:
      - Local: "./images/memory-1.jpg"
      - Imgur: "https://i.imgur.com/xxxxx.jpg"
      - Google Drive: "https://drive.google.com/uc?id=FILE_ID"
      ======================================== */}
  const memories = [
    {
      src: "/images/memory2.jpg",
      caption: "Our Beautiful Journey 💕"
    },
    {
      src: "/images/memory3.jpg",
      caption: "Precious Moments Together 🥰"
    },
    {
      src: "/images/memory4.jpg",
      caption: "My Cutie Pie 💗"
    },
    {
      src: "/images/memory5.jpg",
      caption: "Forever My Favorite 🌸"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-b from-rose-cream via-white to-blush/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-dancing text-5xl md:text-6xl text-rose-gold mb-4">
            Our Memories 📸
          </h2>
          <p className="font-cormorant text-xl text-soft-brown">
            Har ek photo mein chupi hai ek kahani... humari kahani 💕
          </p>
        </div>

        {/* Photo Gallery - 4 Photos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {memories.map((memory, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-square">
                {/* ========================================
                    Replace src with your photo URL
                    ======================================== */}
                <img 
                  src={memory.src}
                  alt={memory.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-cormorant text-white text-center text-lg font-semibold">
                    {memory.caption}
                  </p>
                </div>
                {/* Heart decoration on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-2xl">💕</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Full-Width Moment */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
            {/* ========================================
                🖼️ SPECIAL MOMENT PHOTO
                ========================================
                Replace with your special moment photo
                This is a full-width emotional image
                ======================================== */}
            <img 
              src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&h=500&fit=crop"
              alt="Our Special Moment"
              className="w-full h-64 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6">
                <p className="font-dancing text-4xl md:text-6xl text-white mb-4 drop-shadow-lg">
                  The Moment I Knew 💕
                </p>
                <p className="font-cormorant text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                  "Jab tune mujhe samjha, meri care ki bina kisi control ke...
                  <br />
                  usi din dil ne kaha — yehi hai meri wali."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Add Photos Guide */}
        <div className={`mt-16 p-6 bg-white/50 rounded-2xl border-2 border-dashed border-rose-gold/30 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="font-cormorant text-2xl text-rose-gold mb-4 text-center">
            📸 Apni Photos Kaise Add Karein?
          </h3>
          <div className="font-poppins text-soft-brown text-sm md:text-base space-y-2">
            <p><span className="text-rose-gold font-semibold">Step 1:</span> Apni photo Imgur pe upload karo (Free hai!)</p>
            <p><span className="text-rose-gold font-semibold">Step 2:</span> Image pe Right-click → "Copy Image Address"</p>
            <p><span className="text-rose-gold font-semibold">Step 3:</span> Code mein <code className="bg-rose-gold/10 px-2 py-1 rounded">src="..."</code> mein paste karo</p>
            <p className="text-center mt-4 text-rose-gold">
              Files: <code className="bg-rose-gold/10 px-2 py-1 rounded">HeroSection.tsx</code> & <code className="bg-rose-gold/10 px-2 py-1 rounded">MemoriesSection.tsx</code>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
