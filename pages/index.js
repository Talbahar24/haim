import Link from 'next/link';
import Image from 'next/image';
import YoutubeGallery from '../components/YoutubeGallery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function Home() {
  // Array of image names based on actual files
  const galleryImages = [
    // Scan_Pic series
    'Scan_Pic0001', 'Scan_Pic0002', 'Scan_Pic0003', 'Scan_Pic0004', 'Scan_Pic0005',
    'Scan_Pic0006', 'Scan_Pic0007', 'Scan_Pic0008', 'Scan_Pic0009',
    // HP series
    'HP_050644_12', 'HP_050644_14', 'HP_050644_15', 'HP_050644_16', 'HP_050644_17',
    'HP_050644_21', 'HP_050644_22', 'HP_050644_24', 'HP_050644_25', 'HP_050644_29',
    'HP_050644_31', 'HP_050644_34', 'HP_050644_35', 'HP_050644_36', 'HP_050644_37',
    'HP_050644_38', 'HP_050644_39', 'HP_050644_40',
    'HP_050645_15', 'HP_050645_18', 'HP_050645_19', 'HP_050645_20', 'HP_050645_21',
    'HP_050645_22', 'HP_050645_24', 'HP_050645_25', 'HP_050645_26', 'HP_050645_27',
    'HP_050645_32', 'HP_050645_33'
  ];

  // Function to get image path based on name
  const getImagePath = (name) => {
    if (name.startsWith('Scan_Pic')) {
      return `/images/${name}.jpg`;
    }
    return `/images/${name}.jpg`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-right">
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <Image
          src="/images/Haim Bachar.jpg"
          alt="חיים בכר ז״ל"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white max-w-3xl mx-auto px-4">
            <h1 className="text-6xl font-bold mb-6 tracking-tight">סמ"ר חיים בכר ז"ל</h1>
            <p className="text-2xl mb-3 font-light">בן צ'לה ומוריס</p>
            <p className="text-xl font-light">נולד בתל אביב, בכ"ו בסיון תשמ"א</p>
          </div>
        </div>
      </div>


      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-16 px-4">
        {/* Memorial Quote */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 mb-16 text-center transform hover:scale-[1.02] transition-transform duration-300">
          <blockquote className="text-3xl text-gray-700 italic font-light leading-relaxed">
            "חיים היה נסיך, נסיך בין חבריו ובמשפחתו"
          </blockquote>
        </div>

        {/* Photo Gallery Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 tracking-tight">גלריית תמונות</h2>
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
              className="home-swiper"
            >
              {galleryImages.map((imageName, index) => (
                <SwiperSlide key={imageName} className="w-[300px] h-[400px]">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={getImagePath(imageName)}
                        alt={`תמונה של חיים בכר ז"ל`}
                        width={300}
                        height={400}
                        className="object-cover w-full h-full"
                        priority={index < 3}
                        onError={(e) => {
                          console.error(`Error loading image ${imageName}`);
                          e.target.src = '/images/placeholder.jpg';
                          e.target.onerror = null; // Prevent infinite loop
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <p className="text-sm font-medium">חיים בכר ז"ל</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Add custom styles */}
          <style jsx global>{`
            .home-swiper {
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
        </section>

        {/* Timeline Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 tracking-tight">ציוני דרך בחייו</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg transform hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-red-700">ילדות ונעורים</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                חיים נולד ב-29 ביוני 1981, בן בכור לצ'לה ומוריס ואח ליוסי. הוא למד בבית הספר היסודי "ש"י עגנון" בבת ים ובגיל עשר עברה משפחתו לשכונת רמת אביב.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg transform hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-red-700">תנועת הצופים</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                כשהיה בכיתה ח' הצטרף חיים לשבט הצופים, לשכבת "עוצמה". קן הצופים הפך לביתו השני עד כי אמו אמרה לו שהוא נמצא יותר בצופים מאשר בבית.
              </p>
            </div>
          </div>
        </section>

        {/* Service Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 tracking-tight">שירות צבאי</h2>
          <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-lg">
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              חיים עבר בהצלחה את המיונים לקורס טיס. לאחר שנה וחודשיים בקורס טייס, עבר חיים לשרת ביחידת פלס"ר צנחנים. הוא היה יכול לבחור בכל יחידה שרצה, אבל בחר בקרבי.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              הצוות שאליו שובץ היה כבר מגובש לאחר חודשים של אימונים משותפים, אך חיים השתלב בו בקלות ובמהירות. חבריו לצוות מספרים שחיים הוביל את הצוות הן מבחינה מקצועית והן מבחינה חברתית.
            </p>
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

        {/* Detailed Biography */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 tracking-tight">חיים בכר ז"ל</h2>
          
          {/* Basic Information */}
          <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-red-700 mb-2">פרטים אישיים</h3>
                  <p className="text-gray-700">בן צ'לה ומוריס</p>
                  <p className="text-gray-700">נולד בתל אביב</p>
                  <p className="text-gray-700">בכ"ו בסיון תשמ"א, 29/6/1981</p>
                  <p className="text-gray-700">התגורר בתל אביב</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-700 mb-2">שירות צבאי</h3>
                  <p className="text-gray-700">התגייס ב-יולי 1999</p>
                  <p className="text-gray-700">שרת בחטיבת הצנחנים</p>
                  <p className="text-gray-700">יחידה: פלס"ר 5173</p>
                  <p className="text-gray-700">בעל צל"ש מפקד האוגדה</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-red-700 mb-2">נפילה</h3>
                  <p className="text-gray-700">נפל בפעילות מבצעית</p>
                  <p className="text-gray-700">בט"ז באדר תשס"ב, 28/2/2002</p>
                  <p className="text-gray-700">מקום נפילה: מחנה בלטה (שכם)</p>
                  <p className="text-gray-700">באזור יהודה ושומרון</p>
                  <p className="text-gray-700">מקום קבורה: תל אביב - קרית שאול</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-700 mb-2">הותיר אחריו</h3>
                  <p className="text-gray-700" > הורים אח ואחות</p>
                </div>
              </div>
            </div>
          </div>

          {/* Life Story */}
          <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-lg">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-red-700 mb-4">ילדות ונעורים</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  חיים נולד ב-29 ביוני 1981, בן בכור לצ'לה ומוריס ואח ליוסי. הוא למד בבית הספר היסודי "ש"י עגנון" בבת ים ובגיל עשר עברה משפחתו לשכונת רמת אביב, שם המשיך את לימודיו בבית הספר היסודי ולאחר מכן בבית הספר התיכון "גימנסיה הרצליה".
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-red-700 mb-4">תנועת הצופים</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  כשהיה בכיתה ח' הצטרף חיים לשבט הצופים, לשכבת "עוצמה". קן הצופים הפך לביתו השני עד כי אמו אמרה לו שהוא נמצא יותר בצופים מאשר בבית והביתה הוא מגיע רק כדי לישון. חיים היה חלק בלתי נפרד מהשכבה בשבט ונמנה על הגרעין שבחבורה, שמנתה עשרה חברים טובים וקרובים. במקביל, השתלב בתפקידי הדרכה ובשנה האחרונה בצופים שימש כרכז צעיר בשבט.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mt-4">
                  לחיים היה חיוך רחב וגומת חן שובת לב, והחניכות שלו היו מאוהבות בו ללא תקנה.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-red-700 mb-4">שירות צבאי</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  לפני שהתגייס לצבא היה ברור לו שהוא הולך לחיל קרבי כדי לתרום למדינה. לאמו אמר פעמים רבות, כי הוא זו שחינכה אותו לתת.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mt-4">
                  חיים עבר בהצלחה את המיונים לקורס טיס. כל חבריו התרגשו כאשר התגייס וכולם ליוו אותו לבקו"ם ביום הגיוס. לאחר שנה וחודשיים בקורס טייס, עבר חיים לשרת ביחידת פלס"ר צנחנים. הוא היה יכול לבחור בכל יחידה שרצה, אבל בחר בקרבי. הצוות שאליו שובץ היה כבר מגובש לאחר חודשים של אימונים משותפים, אך חיים השתלב בו בקלות ובמהירות. חבריו לצוות מספרים שחיים הוביל את הצוות הן מבחינה מקצועית והן מבחינה חברתית.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mt-4 italic">
                  "ידענו שאפשר לסמוך על חיים ולהיות שקטים והיינו גאים ללכת אחריו"
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mt-4">
                  חיים היה דמות דומיננטית וכחלק מתפקידו ביטא את דעותיו לגבי אסטרטגיות צבאיות שונות. לא אחת הצליח להשפיע על הממונים עליו לשנות את אופי הפעולה על מנת להגיע להישגים טובים יותר.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-red-700 mb-4">אישיותו</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  חיים מיצה כל רגע אפשרי. בכל יציאה הביתה הוא ידע לשלב בכשרון רב מפגשים עם החברים מימי בית הספר, חברים מקורס טיס, החברה, הצופים, והחבר'ה מהפלס"ר, וגם כמובן עם המשפחה. חיים היה קשור מאוד למשפחתו ודאג להיפגש עם הסבתות, הסבים והדודות.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mt-4">
                  חיים היה אופטימי מטבעו. על שפתיו היו שגורים תמיד משפטים כגון "להסתכל תמיד על חצי הכוס המלאה", ו"הכל בראש". הוא לא הכיר את הביטוי "לא יכול".
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-red-700 mb-4">נפילה והנצחה</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  עשרה ימים לפני הפעולה בה נהרג, השתתף חיים בפעילות ברצועה. על פעילות זו הוענק לו צל"ש, שהוריו קיבלו לאחר מותו.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mt-4">
                  חיים נהרג ב-28 בפברואר 2002, במהלך פעולה במחנה הפליטים בלאטה בשכם. הוא הוביל את הכוח, כפי שעשה בכל הפעולות בהן השתתף. באחת הסימטאות הופעל מטען, וחיים, שהיה הראשון והמוביל, נהרג. בן עשרים היה במותו.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mt-4">
                  משפחתו של חיים דואגת להנציחו בדרכים שונות. בשנה האחרונה הוקם חדר הנצחה בשבט הצופים שחיים היה פעיל בו. החדר מיועד להעברת פעולות שונות ומוקדש לחיים.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mt-4">
                  חיים אהב מאוד לטייל בארץ. בקיץ 2002 לקראת תאריך יום הולדתו ה-21, הקימה המשפחה כיתת לימוד בטבע, ביער הזורע שברמת מנשה, יער שבו בילה חיים כל שנה את חודשי הקיץ במהלך פעילותו הענפה בתנועת הצופים. חנוכת כיתת הטבע לוותה בקיום צעדה ביער הזורע, פעילות שהיתה אהובה במיוחד על חיים. בנוסף לכל אלו, הוקמה קרן על שמו של חיים בכר, המעניקה מדי שנה שתי מלגות ללוחמים למטרת לימודים אקדמיים.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mt-4 italic">
                  חיים היה נסיך, נסיך בין חבריו ובמשפחתו. לאחר מותו, בני משפחה וחברים קעקעו על גופם את הציור של הנסיך הקטן, ודמותו הולכת איתם לכל מקום.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Memorial Projects */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 tracking-tight">פרויקטים להנצחה</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg transform hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-red-700">חדר הנצחה</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                הוקם חדר הנצחה בשבט הצופים שחיים היה פעיל בו. החדר מיועד להעברת פעולות שונות ומוקדש לחיים.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg transform hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-red-700">כיתת טבע</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                הוקמה כיתת לימוד בטבע, ביער הזורע שברמת מנשה, יער שבו בילה חיים כל שנה את חודשי הקיץ.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg transform hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-red-700">קרן מלגות</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                הוקמה קרן על שמו של חיים בכר, המעניקה מדי שנה שתי מלגות ללוחמים למטרת לימודים אקדמיים.
              </p>
            </div>
          </div>
        </section>

        {/* Youtube Gallery */}
        <YoutubeGallery />
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
                  src="/images/HP_050644_22.jpg"
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