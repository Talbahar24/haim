import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
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
        <div className="space-x-6 space-x-reverse">
          <Link href="/" className="hover:text-red-200 transition">בית</Link>
          <Link href="/about" className="hover:text-red-200 transition">על חיים</Link>
          <Link href="/family" className="hover:text-red-200 transition">המשפחה זוכרים</Link>
          <Link href="/friends" className="hover:text-red-200 transition">החברים זוכרים</Link>
          <Link href="/letters" className="hover:text-red-200 transition">מכתבים וכתבות</Link>
          <Link href="/share" className="hover:text-red-200 transition">שיתוף שלכם</Link>
        </div>
      </div>
    </header>
  );
} 

