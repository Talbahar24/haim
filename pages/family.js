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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/40 to-red-100/30 text-right">
      <main className="max-w-7xl mx-auto py-16 px-4 pt-24">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-rose-700 to-gray-800 tracking-tight">
            המשפחה זוכרת
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
        </div>

        {/* Family Photos Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="h-1 w-16 bg-gradient-to-r from-rose-500 to-rose-300 rounded-full ml-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-800">תמונות משפחתיות</h2>
            </div>
          </div>
          <ImageGallery
            images={familyPhotos}
            getImagePath={getImagePath}
            getImageAlt={getImageAlt}
            className="family-gallery"
            useSwiper={true}
            swiperEffect="coverflow"
            swiperBreakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 }
            }}
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

        {/* Ofek's Eulogy */}
        <section className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-lg transform hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-semibold mb-6 text-red-700">הספד מאופק, אחותו של חיים</h2>
            <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
              חיים
              <br />כשהייתי בגן אמרו לי שאח שלי בשמיים , הרי איך אפשר לספר לילדה בת ארבע מה זה מוות , כמה שזה עצוב ואופייני למדינה בה אנחנו חיים .
              <br />אז בתור ילדה בת ארבע הייתי בטוחה שאח שלי הוא ענן , הוא הענן ששומר עליי , כשיש גשם חיים בוכה , כשיש קרן שמש חיים מחייך ,הייתי מספרת את זה בהתלהבות לכל החברים שלי בגן ומתגאה שזה אח שלי . בדיעבד זה מאוד עצוב אבל הרגש הזה זכור לי כדבר מאוד חם , כאילו רק ככה יכולתי לתקשר איתך , וזה נתן בי תחושה של אושר , תחושה חמה שהולכת איתי כל החיים , מן הסתם שכשהתבגרתי והבנתי שטעיתי והמציאות הכתה בי , עדיין התחושה המשיכה איתי , שחיים הוא השומר שלי , הוא מכווין אותי , הוא נותן לי , שזה הכל חיים , שבאופן לא מודע אתה זה ששומר עליי .
              <br />חיים , לא יודעת איך להתחיל לכתוב , שנה שעברה לא כתבתי לך באזכרה , אני מניחה שזה בגלל שקרה ככ הרבה שלא הצלחתי להוציא את זה במילים .
              <br />עברה שנה קשה מאוד , אני מודה שאני לא יודעת כמה הצלחת להגן עליי השנה .
              <br />השכול ליווה אותי מהרגע שנולדתי , מאז ומתמיד הייתי מנסה לדמיין איך הייתה נראת התקופה כשנהרגת , איך המשפחה הגיבה ? איך חברים שלך הגיבו ? איך נראת הלוויה צבאית ? איך זה מרגיש לאבד ילד בן 20 שבאמת הכרתי ? איך משרתים בצבא בזמן ככ הרבה אבדות ומלחמה ?  מחשבה שהציקה לי מגיל קטן ומעולם לא חשבתי שהפחד שלי יתממש , תמיד הייתה לי תחושת אופוריה שזה קרה בעבר ולמדנו מאז , היום זה כבר לא יקרה  . לנו זה לא לא יכול לקרות
              <br />ואז הגיע ה7/10 שנתן סטירת לחי  לכולנו .
              <br />מעולם לא הייתי מאמינה שגם הדור שלי יחווה את אותו סוג של קושי ,  שאנשים בגילי יהיו קבורים מולך , תמיד ייחלתי שלעולם לא אראה את החלקה מולך מתמלאת , היום היא מלאה באנשים בגילי , בגיבורים בגילי .
              <br />מעולם לא חשבתי שאהיה בהלוויה צבאית ואחשוב על איך המשפחה שלי ישבה באותה הסיטואציה לפני 23 שנים . כמה כאב , כמה קושי .
              <br />אני מצטערת שאיבדנו אותך חיים , אני מצטערת שלא הספקתי להכיר אותך . אני פספסתי אותך , כולנו פספסנו אותך . וזה ילך איתי לכל החיים .
              <br />חיים , אתה עדיין מגן עליי ? בבקשה תגן עליי , תגן על כולם . תעשה שהתקופה הזאת תיגמר
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