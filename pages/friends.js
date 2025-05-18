import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-right">
      <main className="max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-5xl font-bold mb-12 text-center text-gray-800 tracking-tight">החברים זוכרים</h1>

        {/* Friends Photos Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-700 tracking-tight">תמונות עם חברים</h2>
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
              className="friends-swiper"
            >
              {friendPhotos.map((photoName, index) => (
                <SwiperSlide key={photoName} className="w-[300px] h-[400px]">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={`/images/friends/${photoName}.jpg`}
                        alt={`חיים עם חברים`}
                        width={300}
                        height={400}
                        className="object-cover w-full h-full"
                        priority={index < 3}
                        onError={(e) => {
                          console.error(`Error loading image ${photoName}`);
                          e.target.src = '/images/placeholder.jpg';
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <p className="text-sm font-medium">חיים עם חברים</p>
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
          .friends-swiper {
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

        {/* Military Friends */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-700 tracking-tight">חברים מהצבא</h2>
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-lg transform hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-red-700">זיכרון מחבר בפלס"ר</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                "חיים הגיע לצוות שלנו אחרי שכבר היינו מגובשים, אבל הוא השתלב בקלות ובמהירות. הוא היה מנהיג טבעי, ידע להוביל את הצוות הן מבחינה מקצועית והן מבחינה חברתית."
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                "הוא היה דמות דומיננטית בצוות, לא פחד להביע את דעתו ולהשפיע על אופי הפעולות. ידענו שאפשר לסמוך על חיים ולהיות שקטים. היינו גאים ללכת אחריו."
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-lg transform hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-red-700">זיכרון מחבר מקורס טיס</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                "חיים היה אחד התלמידים הבולטים בקורס. הוא היה חכם, מוכשר, אבל מעל הכל - הוא היה חבר אמיתי. אני זוכר איך כולנו התרגשנו כשהוא התגייס, איך ליווינו אותו לבקו"ם ביום הגיוס."
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
  );
} 