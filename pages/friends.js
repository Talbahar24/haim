import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import ImageGallery from '../components/ImageGallery';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Friends() {
  // Array of friend photo names based on actual files
  const friendPhotos = [
    'HP_050589_12',
    'HP_050645_36', 'HP_050645_35', 'HP_050645_34', 'HP_050645_31', 'HP_050645_30',
    'HP_050645_29', 'HP_050645_28', 'HP_050645_17', 'HP_050645_16', 'HP_050645_14',
    'HP_050645_13', 'HP_050645_12', 'HP_050645_11', 'HP_050645_10', 'HP_050644_10',
    'HP_050644_33', 'HP_050644_32', 'HP_050644_28', 'HP_050644_27', 'HP_050644_26',
    'HP_050644_23', 'HP_050644_20', 'HP_050644_19', 'HP_050644_18', 'HP_050644_13',
    'HP_050644_11'
  ];

  const getImagePath = (name) => `/images/friends/${name}.jpg`;
  const getImageAlt = (name) => `חיים עם חברים - ${name}`;

  return (
    <>
      <Head>
        <title>החברים זוכרים - חיים בכר ז"ל</title>
        <meta name="description" content="זיכרונות ותמונות מחבריו של חיים בכר ז״ל" />
        <link rel="icon" href="/images/LOGO.jpeg" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/40 to-red-100/30 text-right">
      <main className="max-w-7xl mx-auto py-16 px-4 pt-24">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-rose-700 to-gray-800 tracking-tight">
            החברים זוכרים
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
        </div>

        {/* Friends Photos Section */}
        {/* Family Photos Section */}
        <section className="mb-16">
          <ImageGallery
            images={friendPhotos}
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

        {/* Scouts Friends */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-700 tracking-tight">חברים מהצופים</h2>
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-lg transform hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-red-700">זיכרון מחבר בצופים</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                "חיים היה חלק בלתי נפרד מהשכבה בשבט. הוא היה אחד מהגרעין הקשה שלנו, עשרה חברים טובים וקרובים. אני זוכר איך הוא היה מוביל אותנו בכל פעולה, איך הוא היה מלמד אותנו דברים חדשים."
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                "הוא היה מדריך מעולה, החניכות שלו היו מאוהבות בו ללא תקנה. היה לו חיוך רחב וגומת חן שובה לב. הוא היה אדם מיוחד, עם לב ענק ואהבה אין סופית לחברים."
              </p>
            </div>
          </div>
        </section>

        {/* Team Memorial */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 tracking-tight">דברים לזכרו</h2>
            <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-red-700 mb-2">צוות נוב' 99 / דברים בערב יום הזיכרון</h3>
                <p className="text-gray-600">5.4.02</p>
              </div>
              <div className="text-gray-700 leading-relaxed text-lg space-y-6">
                <p className="italic">
                  חיים,<br />
                  עבר כבר יותר מחודש וחצי ואנחנו עדיין מתקשים להאמין ולעכל את חסרונך. עדיין מחפשים אותך בציותי הכוחות, במיטה יושן ערום, עדיין מחפשים את החיוך הקטן, את הצחוק המתגלגל והכי הרבה את הטון התקיף שאומר: "חבר'ה, יש עבודה לעשות".
                </p>
                <p>
                  כל הזמן אנו שומעים את צירוף המילים "נפל בעת מילוי תפקידו" ואני שואל את עצמי מה תפקידו של אדם בחיים?<br />
                  תפקידו של אדם בחיים הוא לעשות חיים, לאהוב, להתחתן ולגדל דור חדש של אנשים שימלאו את תפקידו של האדם בחיים.
                </p>
                <p>
                  תפקידו של אדם אינו להתנדב לכל משימה, אינו לחנם בני נוער, אינו לאהוב את כולם ללא גבולות, תפקידו של אדם אינו ללכת לקרבי, אינו לפקד על חיילים, אינו להצליח בכל דבר שהוא עושה, אינו להלחם ואינו ללכת בראש.<br />
                  תפקידו של אדם בחיים אינו למות בגיל 20.
                </p>
                <p>
                  חיים לא נפל בעת מילוי תפקידו, חיים נפל בעת מילוי הרבה יותר מתפקידו.<br />
                  חיים נפל בעת שהיווה דוגמא ומופת לכולנו, בעת שעשה את מה שאהב ואת מה שהאמין כי נכון, חיים נפל בעת שאהב את כולם ואהב את החיים, חיים נפל בעת שסמכנו עליו והלכנו אחריו בשדה הקרב.<br />
                  חיים נפל בגיל 20.
                </p>
                <p className="italic">
                  חיים, כבר הספקנו להיות בלעדייך שוב בבאלטה, ובבית לחם, ובבית שלך, ובזותך, ושוב בבית שלך, ובקסבה של שכם ושום דבר לא כמו שהיה, כי לא נוכל להמשיך הלאה, תמיד חלק מאיתנו ישאר באותה סמטה ובאותו לילה ארור בבאלטה.<br />
                  ותמיד נזכור שלא נפלת בעת מילוי תפקידך אלא בעת מילוי הרבה יותר מתפקידך.
                </p>
                <p className="italic">
                  חיים, תרשה לי לסיים בתפילה קטנה שאנו ומשפחתך לא נדע עוד צער ובעוד משהו קטן מדברי המשורר:<br />
                  "את הגשם תן רק בעתו,<br />
                  ובאביב הבא לנו פרחים,<br />
                  ותן לנו שנית להיות אתו.<br />
                  תן לנו שנית להיות אתו."
                </p>
                <p className="text-center font-semibold mt-8">
                  אוהבים תמיד - צוות נובמבר 99<br />
                  סיירת צנחנים
                </p>
              </div>
            </div>
          </section>

        {/* School Friends */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-700 tracking-tight">חברים מבית הספר</h2>
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-lg transform hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-red-700">זיכרון מחבר מהגימנסיה</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                "חיים היה תלמיד מצטיין, אבל מעל הכל הוא היה חבר אמיתי. הוא תמיד היה שם בשביל כולם, תמיד ידע להקשיב ולתת עצה טובה. הוא היה אדם מיוחד, עם לב ענק ואהבה אין סופית לחברים."
              </p>
            </div>
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
    </>
  );
} 