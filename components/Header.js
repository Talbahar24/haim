import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-red-700 text-white p-4 sticky top-0 z-30 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src="/images/LOGO.jpeg"
            alt="לוגו"
            width={45}
            height={45}
            className="rounded-full ring-2 ring-white/20"
          />
          <div className="font-bold text-xl">חיים בכר ז"ל</div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 hover:bg-red-600 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:block space-x-6 space-x-reverse">
          <Link href="/" className="hover:text-red-200 transition">בית</Link>
          <Link href="/about" className="hover:text-red-200 transition">על חיים</Link>
          <Link href="/family" className="hover:text-red-200 transition">המשפחה זוכרים</Link>
          <Link href="/friends" className="hover:text-red-200 transition">החברים זוכרים</Link>
          <Link href="/letters" className="hover:text-red-200 transition">מכתבים וכתבות</Link>
          <Link href="/share" className="hover:text-red-200 transition">שיתוף שלכם</Link>
        </nav>

        {/* Mobile menu */}
        <nav className={`md:hidden absolute top-full left-0 right-0 bg-red-700 shadow-lg transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col p-4 space-y-4">
            <Link href="/" className="hover:text-red-200 transition py-2" onClick={() => setIsMenuOpen(false)}>בית</Link>
            <Link href="/about" className="hover:text-red-200 transition py-2" onClick={() => setIsMenuOpen(false)}>על חיים</Link>
            <Link href="/family" className="hover:text-red-200 transition py-2" onClick={() => setIsMenuOpen(false)}>המשפחה זוכרים</Link>
            <Link href="/friends" className="hover:text-red-200 transition py-2" onClick={() => setIsMenuOpen(false)}>החברים זוכרים</Link>
            <Link href="/letters" className="hover:text-red-200 transition py-2" onClick={() => setIsMenuOpen(false)}>מכתבים וכתבות</Link>
            <Link href="/share" className="hover:text-red-200 transition py-2" onClick={() => setIsMenuOpen(false)}>שיתוף שלכם</Link>
          </div>
        </nav>
      </div>
    </header>
  );
} 

