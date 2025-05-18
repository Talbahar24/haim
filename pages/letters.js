import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function Letters() {
  // Array of letter photo numbers based on actual files
  const letterPhotos = [
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-right">
      <main className="max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-5xl font-bold mb-12 text-center text-gray-800 tracking-tight">מכתבים וכתבות</h1>

        {/* Letters and Articles Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-700 tracking-tight">מכתבים וכתבות לזכר חיים</h2>
          <div className="relative px-12">
            <Swiper
              modules={[Navigation, Pagination, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              spaceBetween={30}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              className="letters-swiper"
            >
              {letterPhotos.map((num, index) => (
                <SwiperSlide key={num} className="w-[400px] h-[600px]">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl bg-white">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={`/images/letters/Scan_Pic00${num}.jpg`}
                        alt={`מכתב או כתבה ${num}`}
                        width={400}
                        height={600}
                        className="object-contain w-full h-full"
                        priority={index < 3}
                        onError={(e) => {
                          console.error(`Error loading image ${num}`);
                          e.target.src = '/images/placeholder.jpg';
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <p className="text-sm font-medium">מכתב/כתבה {num}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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