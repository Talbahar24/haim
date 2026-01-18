import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if we're on the home page
  const isHomePage = router.pathname === '/';

  useEffect(() => {
    // If not on home page, always show background
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    // On home page, check scroll position
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

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
            
            {/* Music Player */}
            <div className="mr-4 flex items-center">
              <div className={`rounded-xl p-2 transition-all duration-300 ${
                shouldShowBackground 
                  ? 'bg-red-50/80 hover:bg-red-100/80' 
                  : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm'
              }`}>
                <audio
                  controls
                  className="h-8 w-32 md:w-40"
                  style={{ 
                    filter: shouldShowBackground ? 'none' : 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
                  }}
                >
                  <source src="/images/music/song.mp3" type="audio/mpeg" />
                  הדפדפן שלך אינו תומך בניגון אודיו.
                </audio>
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
              <div className={`rounded-xl p-3 transition-all duration-300 ${
                shouldShowBackground 
                  ? 'bg-red-50/80' 
                  : 'bg-white/10 backdrop-blur-sm'
              }`}>
                <audio
                  controls
                  className="w-full h-10"
                >
                  <source src="/images/music/song.mp3" type="audio/mpeg" />
                  הדפדפן שלך אינו תומך בניגון אודיו.
                </audio>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
