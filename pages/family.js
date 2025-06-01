import Link from 'next/link';
import Image from 'next/image';
import ImageGallery from '../components/ImageGallery';

export default function Family() {
  // Array of family photo numbers based on actual files
  const familyPhotos = [
    10, 11, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29
  ];

  const getImagePath = (num) => `/images/family/HP_050589_${num}.jpg`;
  const getImageAlt = (num) => `תמונה משפחתית ${num}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-right">
      <main className="max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-5xl font-bold mb-12 text-center text-gray-800 tracking-tight">המשפחה זוכרת</h1>

        {/* Family Photos Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-700 tracking-tight">תמונות משפחתיות</h2>
          <ImageGallery
            images={familyPhotos}
            getImagePath={getImagePath}
            getImageAlt={getImageAlt}
            className="family-gallery"
          />
        </section>

        {/* Add custom styles */}
        <style jsx global>{`
          .family-swiper {
            padding: 50px 0;
            width: 100%;
          }
          .swiper-slide {
            width: 300px !important;
            height: 400px !important;
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

        {/* Mother's Memory */}
        <section className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-lg transform hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-semibold mb-6 text-red-700">זיכרון מאמא</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              "חיים היה הבן הבכור שלנו, הגאווה שלנו. הוא היה ילד מיוחד, עם חיוך שובה לב וגומת חן שלא השאירה אף אחד אדיש. הוא היה קשור מאוד למשפחה, תמיד דאג להיפגש עם הסבתות, הסבים והדודות."
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              "אני זוכרת איך הוא היה אומר לי: 'אמא, את זו שחינכה אותי לתת'. זה היה כל כך חשוב לו לתרום למדינה, להיות חלק ממשהו גדול. הוא היה נסיך, נסיך בין חבריו ובמשפחתו."
            </p>
          </div>
        </section>

        {/* Father's Memory */}
        <section className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-lg transform hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-semibold mb-6 text-red-700">זיכרון מאבא</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              "חיים היה ילד מיוחד, עם אופי חזק ורצון עז. הוא ידע מה הוא רוצה והלך אחרי זה בכל הכוח. אני זוכר איך הוא היה מתעקש ללכת לקורס טיס, ואז כשהחליט לעבור לפלס"ר, זה היה ברור לו שזה הדבר הנכון."
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              "הוא היה מנהיג טבעי, גם בבית וגם בצבא. תמיד ידע להוביל, תמיד ידע מה נכון. אני גאה בכל רגע שהיה לי איתו."
            </p>
          </div>
        </section>

        {/* Brother's Memory */}
        <section className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-lg transform hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-semibold mb-6 text-red-700">זיכרון מאח</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              "חיים היה האח הגדול המושלם. הוא תמיד היה שם בשבילי, תמיד ידע להקשיב ולתת עצה טובה. אני זוכר איך הוא היה לוקח אותי איתו לצופים, איך הוא היה מלמד אותי דברים חדשים."
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              "הוא היה אדם מיוחד, עם לב ענק ואהבה אין סופית למשפחה. אני מתגעגע אליו כל יום, אבל אני יודע שהוא איתי, בכל מקום שאני הולך."
            </p>
          </div>
        </section>
      </main>

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
                <Link href="/share" className="block hover:text-red-200 transition-colors duration-300">שיתוף שלכם</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 