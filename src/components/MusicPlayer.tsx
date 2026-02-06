import { useState, useRef, useEffect } from 'react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Fade in the player
    setTimeout(() => setIsVisible(true), 1000);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
          console.log('Autoplay blocked, user needs to interact first');
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Background Music - Replace with your romantic music file */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        {/* Add your music file here */}
        {/* Option 1: Local file */}
        <source src="/music/romantic-music.mp3" type="audio/mpeg" />
        {/* Option 2: Use a free romantic piano music URL */}
        {/* You can also use: https://www.bensound.com/bensound-music/bensound-love.mp3 */}
      </audio>

      {/* Floating Music Player */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <button
          onClick={togglePlay}
          className={`
            group relative w-14 h-14 rounded-full 
            bg-gradient-to-br from-rose-gold to-soft-pink
            shadow-lg shadow-rose-gold/30
            hover:shadow-xl hover:shadow-rose-gold/40
            hover:scale-110 active:scale-95
            transition-all duration-300
            flex items-center justify-center
            border-2 border-white/50
          `}
          aria-label={isPlaying ? 'Pause Music' : 'Play Music'}
        >
          {/* Pulsing ring when playing */}
          {isPlaying && (
            <>
              <span className="absolute inset-0 rounded-full bg-rose-gold/30 animate-ping" />
              <span className="absolute -inset-1 rounded-full border-2 border-rose-gold/20 animate-pulse" />
            </>
          )}

          {/* Icon */}
          <span className="relative text-2xl">
            {isPlaying ? '🎵' : '🎶'}
          </span>
        </button>

        {/* Label */}
        <div className={`
          absolute bottom-full right-0 mb-2 
          bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5
          shadow-lg border border-soft-pink/30
          transform origin-bottom-right
          transition-all duration-300
          ${isPlaying ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
        `}>
          <p className="font-poppins text-xs text-warm-brown whitespace-nowrap">
            Playing romantic music 💕
          </p>
        </div>

        {/* Click hint for first time */}
        {!isPlaying && (
          <div className="absolute bottom-full right-0 mb-2 bg-rose-gold text-white rounded-lg px-3 py-1.5 shadow-lg text-xs font-poppins whitespace-nowrap animate-bounce">
            Click to play music 🎵
          </div>
        )}
      </div>
    </>
  );
}
