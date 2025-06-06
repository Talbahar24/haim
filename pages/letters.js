import Link from 'next/link';
import Image from 'next/image';
import ImageGallery from '../components/ImageGallery';

export default function Letters() {
  // Array of letter photo numbers based on actual files
  const letterPhotos = [
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30
  ];

  const getImagePath = (num) => `/images/letters/Scan_Pic00${num}.jpg`;
  const getImageAlt = (num) => `מכתב או כתבה ${num}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-right">
      <main className="max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-5xl font-bold mb-12 text-center text-gray-800 tracking-tight">מכתבים וכתבות</h1>

        {/* Letters and Articles Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-700 tracking-tight">מכתבים וכתבות לזכר חיים</h2>
          <ImageGallery
            images={letterPhotos}
            getImagePath={getImagePath}
            getImageAlt={getImageAlt}
            className="letters-gallery"
            useSwiper={true}
            swiperEffect="coverflow"
            swiperBreakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 }
            }}
            imageClassName="object-contain"
          />
        </section>

        {/* PDF Documents Section */}
        <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-700 tracking-tight">מסמכים נוספים</h2>
          <div className="text-center">
            <a
              href="/documents/חיים_כתבות.pdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-red-800 text-white rounded-lg hover:bg-red-900 transition-colors duration-300 shadow-md"
            >
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              צפה בכתבות נוספות על חיים
            </a>
          </div>
        </section>

        {/* Add custom styles */}
        <style jsx global>{`
          .letters-swiper {
            padding: 50px 0;
            width: 100%;
          }
          .swiper-slide {
            width: 400px !important;
            height: 600px !important;
            opacity: 0.4;
            transform: scale(0.8);
            transition: all 0.3s ease;
          }
          .swiper-slide-active {
            opacity: 1;
            transform: scale(1);
          }
          .swiper-button-next,
          .swiper-button-prev {
            color: #991b1b !important;
            background: rgba(255, 255, 255, 0.8);
            width: 40px !important;
            height: 40px !important;
            border-radius: 50%;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          }
          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 18px !important;
          }
          .swiper-pagination-bullet-active {
            background: #991b1b !important;
          }
        `}</style>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 mt-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Memorial Info */}
              <div className="text-center">
                <p className="text-2xl font-light mb-6">לזכרו של סמ"ר חיים בכר ז"ל</p>
                <p className="text-lg font-light mb-2">נולד: כ"ו בסיון תשמ"א, 29/6/1981</p>
                <p className="text-lg font-light">נפל: ט"ז באדר תשס"ב, 28/2/2002</p>
              </div>
              
              {/* Footer Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Scan_Pic0006.jpg"
                    alt="חיים בכר ז״ל"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Scan_Pic0007.jpg"
                    alt="חיים בכר ז״ל"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Quick Links */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">קישורים מהירים</h3>
                <div className="space-y-2">
                  <Link href="/about" className="block hover:text-red-200 transition-colors duration-300">על חיים</Link>
                  <Link href="/family" className="block hover:text-red-200 transition-colors duration-300">המשפחה זוכרים</Link>
                  <Link href="/friends" className="block hover:text-red-200 transition-colors duration-300">החברים זוכרים</Link>
                  <Link href="/letters" className="block hover:text-red-200 transition-colors duration-300">מכתבים וכתבות</Link>
                  <Link href="/share" className="block hover:text-red-200 transition-colors duration-300">שיתוף שלכם</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
} 