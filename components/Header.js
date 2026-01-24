import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef, useCallback } from 'react';

export default function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const mobileAudioRef = useRef(null);

  // Check if we're on the home page
  const isHomePage = router.pathname === '/';

  useEffect(() => {
    // If not on home page, always show background
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    // On home page, check scroll position with throttling for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Track if user manually paused
  const userPausedRef = useRef(false);

  // Function to play audio - wrapped in useCallback to prevent recreating
  const playAudio = useCallback(async () => {
    // Don't auto-play if user manually paused
    if (userPausedRef.current) {
      return;
    }

    // Try to play desktop audio first (if it exists and is paused)
    if (audioRef.current && audioRef.current.paused) {
      try {
        audioRef.current.volume = 0.5; // Set volume to 50%
        await audioRef.current.play();
        setIsPlaying(true);
        userPausedRef.current = false; // Reset flag when playing
        return;
      } catch (error) {
        // Continue to try mobile
      }
    }
    
    // If desktop audio fails or doesn't exist, try mobile
    if (mobileAudioRef.current && mobileAudioRef.current.paused) {
      try {
        mobileAudioRef.current.volume = 0.5;
        await mobileAudioRef.current.play();
        setIsPlaying(true);
        userPausedRef.current = false; // Reset flag when playing
      } catch (err) {
        // Auto-play was prevented by browser - user needs to interact first
      }
    }
  }, []);

  // Function to pause audio
  const pauseAudio = useCallback(() => {
    if (audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    if (mobileAudioRef.current && !mobileAudioRef.current.paused) {
      mobileAudioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  // Listen for video unmute events to pause audio
  useEffect(() => {
    const handleVideoUnmute = () => {
      pauseAudio();
    };

    window.addEventListener('video-unmute', handleVideoUnmute);
    return () => window.removeEventListener('video-unmute', handleVideoUnmute);
  }, [pauseAudio]);

  // Initialize audio volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
    if (mobileAudioRef.current) {
      mobileAudioRef.current.volume = 0.5;
    }
  }, []);

  // Auto-play music on page load and route change
  useEffect(() => {
    // Only auto-play if user hasn't manually paused
    if (userPausedRef.current) {
      return;
    }

    // Small delay to ensure audio element is ready
    const timer = setTimeout(() => {
      playAudio();
    }, 500);

    return () => clearTimeout(timer);
  }, [router.pathname, playAudio]); // Trigger on route change

  const navLinks = [
    { href: '/', label: 'בית' },
    { href: '/about', label: 'על חיים' },
    { href: '/family', label: 'המשפחה זוכרים' },
    { href: '/friends', label: 'החברים זוכרים' },
    { href: '/letters', label: 'מכתבים וכתבות' },
    { href: '/share', label: 'שיתוף שלכם' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(path);
  };

  // Determine if navbar should have background
  const shouldShowBackground = !isHomePage || isScrolled;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        shouldShowBackground 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-white/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Title */}
          <Link href="/" className="flex items-center space-x-3 space-x-reverse group">
            {/* Paratrooper Logo */}
            <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
              <Image
                src="/images/LOGO.jpeg"
                alt="סמל צנחנים"
                fill
                className="object-contain rounded-full group-hover:scale-110 transition-transform duration-300"
                priority
              />
            </div>
            <div className="transition-all duration-300">
              <h1 className={`text-xl md:text-2xl lg:text-3xl font-bold group-hover:scale-105 transition-transform duration-300 ${
                shouldShowBackground 
                  ? 'bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent' 
                  : 'text-white drop-shadow-lg'
              }`}>
                סמ"ר חיים בכר ז"ל
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 group ${
                    active
                      ? 'text-white shadow-lg'
                      : shouldShowBackground
                      ? 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                      : 'text-white/95 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-xl -z-10 shadow-lg"></span>
                  )}
                  <span className="relative z-10">{link.label}</span>
                  {!active && !shouldShowBackground && (
                    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-400 to-red-600 transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
                  )}
                  {!active && shouldShowBackground && (
                    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-700 transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
                  )}
                </Link>
              );
            })}
            
            {/* Music Player - Desktop */}
            <div className="mr-4 flex items-center">
              <div className={`group relative rounded-2xl p-3 transition-all duration-300 ${
                shouldShowBackground 
                  ? 'bg-gradient-to-br from-red-50 via-red-50/90 to-rose-50/80 hover:from-red-100 hover:via-red-100/90 hover:to-rose-100/80 shadow-lg hover:shadow-xl border border-red-200/50' 
                  : 'bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20'
              }`}>
                {/* Music Icon */}
                <div className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center z-10">
                  <svg 
                    className={`w-4 h-4 ${shouldShowBackground ? 'text-red-600' : 'text-white'} transition-all duration-300 ${isPlaying ? 'animate-pulse' : ''}`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                  </svg>
                </div>
                {/* Custom Audio Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={async () => {
                      if (audioRef.current) {
                        if (isPlaying) {
                          audioRef.current.pause();
                        } else {
                          audioRef.current.volume = 0.5;
                          try {
                            await audioRef.current.play();
                          } catch (err) {
                            console.log('Play failed:', err);
                          }
                        }
                      }
                    }}
                    className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                      shouldShowBackground
                        ? 'bg-gradient-to-br from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white shadow-md hover:shadow-lg'
                        : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm'
                    }`}
                    aria-label={isPlaying ? 'השהה מוזיקה' : 'נגן מוזיקה'}
                  >
                    {isPlaying ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 mr-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    )}
                  </button>
                  <audio
                    ref={audioRef}
                    loop
                    className="hidden"
                    onPlay={() => {
                      setIsPlaying(true);
                      userPausedRef.current = false;
                      if (mobileAudioRef.current && !mobileAudioRef.current.paused) {
                        mobileAudioRef.current.pause();
                      }
                    }}
                    onPause={(e) => {
                      if (e.target.paused) {
                        setIsPlaying(false);
                        userPausedRef.current = true;
                      }
                    }}
                    onEnded={() => setIsPlaying(false)}
                  >
                    <source src="/images/music/song.mp3" type="audio/mpeg" />
                  </audio>
                </div>
                {/* Decorative gradient overlay */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                  shouldShowBackground 
                    ? 'bg-gradient-to-br from-red-200/20 to-transparent' 
                    : 'bg-gradient-to-br from-white/10 to-transparent'
                }`}></div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              shouldShowBackground 
                ? 'text-gray-800 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="תפריט"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`py-4 space-y-2 ${shouldShowBackground ? 'bg-white/50' : 'bg-black/20 backdrop-blur-sm'}`}>
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    active
                      ? 'bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg'
                      : shouldShowBackground
                      ? 'text-gray-700 hover:bg-gray-100'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            
            {/* Music Player for Mobile */}
            <div className="px-6 py-3">
              <div className={`group relative rounded-2xl p-4 transition-all duration-300 ${
                shouldShowBackground 
                  ? 'bg-gradient-to-br from-red-50 via-red-50/90 to-rose-50/80 hover:from-red-100 hover:via-red-100/90 hover:to-rose-100/80 shadow-lg hover:shadow-xl border border-red-200/50' 
                  : 'bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20'
              }`}>
                {/* Music Icon for Mobile */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="relative">
                      <svg 
                        className={`w-6 h-6 ml-2 ${shouldShowBackground ? 'text-red-600' : 'text-white'} transition-all duration-300 ${isPlaying ? 'animate-pulse' : ''}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                      </svg>
                      {isPlaying && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                      )}
                    </div>
                    <span className={`text-sm font-bold ${shouldShowBackground ? 'text-red-700' : 'text-white'}`}>
                      נגן מוזיקה
                    </span>
                  </div>
                  <button
                    onClick={async () => {
                      if (mobileAudioRef.current) {
                        if (isPlaying) {
                          mobileAudioRef.current.pause();
                        } else {
                          mobileAudioRef.current.volume = 0.5;
                          try {
                            await mobileAudioRef.current.play();
                          } catch (err) {
                            console.log('Play failed:', err);
                          }
                        }
                      }
                    }}
                    className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                      shouldShowBackground
                        ? 'bg-gradient-to-br from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white shadow-md hover:shadow-lg active:scale-95'
                        : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm active:scale-95'
                    }`}
                    aria-label={isPlaying ? 'השהה מוזיקה' : 'נגן מוזיקה'}
                  >
                    {isPlaying ? (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 mr-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    )}
                  </button>
                </div>
                <audio
                  ref={mobileAudioRef}
                  loop
                  className="hidden"
                  onPlay={() => {
                    setIsPlaying(true);
                    userPausedRef.current = false;
                    if (audioRef.current && !audioRef.current.paused) {
                      audioRef.current.pause();
                    }
                  }}
                  onPause={(e) => {
                    if (e.target.paused) {
                      setIsPlaying(false);
                      userPausedRef.current = true;
                    }
                  }}
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src="/images/music/song.mp3" type="audio/mpeg" />
                </audio>
                {/* Decorative gradient overlay */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                  shouldShowBackground 
                    ? 'bg-gradient-to-br from-red-200/20 to-transparent' 
                    : 'bg-gradient-to-br from-white/10 to-transparent'
                }`}></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Music Player Button for Mobile - Always Visible */}
      <div className="md:hidden fixed bottom-[1.5rem] right-[17.5rem] z-40 mobile-audio-button">
        <button
          onClick={async () => {
            if (mobileAudioRef.current) {
              if (isPlaying) {
                mobileAudioRef.current.pause();
              } else {
                mobileAudioRef.current.volume = 0.5;
                try {
                  await mobileAudioRef.current.play();
                } catch (err) {
                  console.log('Play failed:', err);
                }
              }
            }
          }}
          className={`flex items-center justify-center w-12 h-12 rounded-full shadow-2xl transition-all duration-300 active:scale-95 ${
            isPlaying
              ? 'bg-gradient-to-br from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white'
              : 'bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white'
          }`}
          aria-label={isPlaying ? 'השהה מוזיקה' : 'נגן מוזיקה'}
        >
          {isPlaying ? (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-400 rounded-full animate-ping"></div>
            </>
          ) : (
            <svg className="w-5 h-5 mr-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
