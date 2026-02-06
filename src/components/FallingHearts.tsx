import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  emoji: string;
}

export function FallingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const emojis = ['❤️', '💕', '💖', '💗', '💝', '🌸', '✨', '💐'];
    
    const createHeart = () => {
      const heart: Heart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        size: Math.random() * 1.5 + 0.8,
        duration: Math.random() * 5 + 8,
        delay: Math.random() * 2,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
      };

      setHearts(prev => [...prev, heart]);

      // Remove heart after animation
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== heart.id));
      }, (heart.duration + heart.delay) * 1000);
    };

    // Create initial hearts
    for (let i = 0; i < 5; i++) {
      setTimeout(createHeart, i * 500);
    }

    // Create hearts periodically
    const interval = setInterval(createHeart, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute -top-10 animate-fade-in"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}rem`,
            animation: `fall ${heart.duration}s linear ${heart.delay}s forwards`,
            opacity: 0.6,
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  );
}
