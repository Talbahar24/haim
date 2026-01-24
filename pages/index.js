import Link from 'next/link';
import Image from 'next/image';
import YoutubeGallery from '../components/YoutubeGallery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import { useState, useEffect, useRef, useCallback } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Head from 'next/head';
import ImageGallery from '../components/ImageGallery';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullBio, setShowFullBio] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

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

  // Function to navigate between images - wrapped in useCallback
  const navigateImage = useCallback((direction) => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % galleryImages.length 
      : (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  }, [currentImageIndex, galleryImages]);

  // Function to open image and set current index - wrapped in useCallback
  const openImage = useCallback((imageName) => {
    const index = galleryImages.indexOf(imageName);
    setCurrentImageIndex(index);
    setSelectedImage(imageName);
  }, [galleryImages]);

  // Function to handle keyboard navigation
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      } else if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, navigateImage]);

  // Fade in animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const images = [
    { src: '/images/haim1.jpg', alt: 'חיים בכר - תמונה 1' },
    { src: '/images/haim2.jpg', alt: 'חיים בכר - תמונה 2' },
    { src: '/images/haim3.jpg', alt: 'חיים בכר - תמונה 3' },
    { src: '/images/haim4.jpg', alt: 'חיים בכר - תמונה 4' },
    { src: '/images/haim5.jpg', alt: 'חיים בכר - תמונה 5' },
    { src: '/images/haim6.jpg', alt: 'חיים בכר - תמונה 6' },
    { src: '/images/haim7.jpg', alt: 'חיים בכר - תמונה 7' },
    { src: '/images/haim8.jpg', alt: 'חיים בכר - תמונה 8' },
    { src: '/images/haim9.jpg', alt: 'חיים בכר - תמונה 9' },
    { src: '/images/haim10.jpg', alt: 'חיים בכר - תמונה 10' },
  ];

  return (
    <>
      <Head>
        <title>חיים בכר ז"ל - לזכרו</title>
        <meta name="description" content='אתר לזכרו של סמ"ר חיים בכר ז"ל - נולד ב-29/6/1981, נפל ב-28/2/2002'/>
        <meta name="keywords" content="חיים בכר, סמיר חיים בכר, צנחנים, פלסר, הנצחה, זיכרון"/>
        <link rel="icon" href="/images/LOGO.jpeg"/>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://haimbachar.com/" />
        <meta property="og:title" content='חיים בכר ז"ל - לזכרו' />
        <meta property="og:description" content='אתר לזכרו של סמ"ר חיים בכר ז"ל - נולד ב-29/6/1981, נפל ב-28/2/2002' />
        <meta property="og:image" content="https://haimbachar.com/images/Haim%20Bachar.jpg" />
        <meta property="og:locale" content="he_IL" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://haimbachar.com/" />
        <meta name="twitter:title" content='חיים בכר ז"ל - לזכרו' />
        <meta name="twitter:description" content='אתר לזכרו של סמ"ר חיים בכר ז"ל - נולד ב-29/6/1981, נפל ב-28/2/2002' />
        <meta name="twitter:image" content="https://haimbachar.com/images/Haim%20Bachar.jpg" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/40 to-red-100/30 text-right">
        {/* Hero Section */}
        <div ref={heroRef} className="relative h-[85vh] min-h-[600px] overflow-hidden pt-20">
          <div className="absolute inset-0">
            <Image
              src="/images/Haim Bachar.jpg"
              alt="חיים בכר ז״ל"
              fill
              className="object-cover scale-105 transition-transform duration-[20s] ease-out hover:scale-100"
              priority
              quality={95}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 via-red-800/20 to-transparent z-10" />
          
          {/* Animated overlay pattern */}
          <div className="absolute inset-0 opacity-10 z-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className={`absolute inset-0 flex items-center justify-center z-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center text-white max-w-4xl mx-auto px-6">
              <div className="mb-8">
                <div className="inline-block mb-4">
                  <div className="h-1 w-24 bg-gradient-to-r from-transparent via-red-400 to-transparent mx-auto mb-6"></div>
                </div>
                <h1 className="text-7xl md:text-8xl font-extrabold mb-8 tracking-tight leading-tight bg-gradient-to-b from-white via-white to-red-200 bg-clip-text text-transparent drop-shadow-2xl">
                  סמ"ר חיים בכר ז"ל
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-transparent via-red-400 to-transparent mx-auto mb-6"></div>
              </div>
              <div className="space-y-3 text-xl md:text-2xl font-light tracking-wide">
                <p className="opacity-95">בן צ'לה ומוריס</p>
                <p className="opacity-90 text-lg md:text-xl">נולד בבת ים, בכ"ו בסיון תשמ"א</p>
              </div>
              
              {/* Scroll indicator */}
              <div className="mt-16 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex items-start justify-center p-2">
                  <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-20 px-4 md:px-8">
          {/* Detailed Biography - Moved to top */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
              </div>
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-red-700 to-gray-800 tracking-tight">
                חיים בכר ז"ל
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            </div>
            
            <section className="mb-20">
              <div className="bg-gradient-to-br from-white/95 via-rose-50/30 to-blue-50/30 backdrop-blur-xl p-12 md:p-16 rounded-3xl shadow-2xl border border-white/50 flex flex-col items-center transform hover:shadow-3xl transition-all duration-500">
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">וידאו</h2>
                  <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full"></div>
                </div>

                <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <video
                    autoPlay
                    muted
                    controls
                    className="w-full h-auto rounded-3xl"
                    style={{ maxHeight: '70vh' }}
                    onVolumeChange={(e) => {
                      // Pause audio only when video is unmuted (volume > 0 or muted = false)
                      const video = e.target;
                      if (!video.muted && video.volume > 0) {
                        window.dispatchEvent(new CustomEvent('video-unmute'));
                      }
                    }}
                    onPlay={(e) => {
                      // Check if video is unmuted when playing
                      const video = e.target;
                      if (!video.muted && video.volume > 0) {
                        window.dispatchEvent(new CustomEvent('video-unmute'));
                      }
                    }}
                  >
                    <source src="/images/vidoes/WhatsApp Video 2025-06-29 at 23.32.13.mp4" type="video/mp4" />
                    הדפדפן שלך אינו תומך בניגון וידאו.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-3xl"></div>
                </div>
              </div>
            </section>

            {/* Basic Information */}
            <div className="bg-gradient-to-br from-white/95 via-red-50/20 to-red-100/20 backdrop-blur-xl p-12 md:p-16 rounded-3xl shadow-2xl border border-white/50 mb-12 transform hover:shadow-3xl transition-all duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                <div className="space-y-8">
                  <div className="group">
                    <div className="flex items-center mb-4">
                      <div className="h-1 w-12 bg-gradient-to-r from-red-600 to-red-400 rounded-full mr-3"></div>
                      <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-900">פרטים אישיים</h3>
                    </div>
                    <div className="space-y-3 text-gray-700 text-lg leading-relaxed pr-4">
                      <p className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full ml-3"></span>
                        בן צ'לה ומוריס
                      </p>
                      <p className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full ml-3"></span>
                        נולד בבת ים
                      </p>
                      <p className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full ml-3"></span>
                        בכ"ו בסיון תשמ"א, 29/6/1981
                      </p>
                      <p className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full ml-3"></span>
                        התגורר בתל אביב
                      </p>
                    </div>
                  </div>
                  <div className="group">
                    <div className="flex items-center mb-4">
                      <div className="h-1 w-12 bg-gradient-to-r from-red-600 to-red-400 rounded-full mr-3"></div>
                      <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-900">שירות צבאי</h3>
                    </div>
                    <div className="space-y-3 text-gray-700 text-lg leading-relaxed pr-4">
                      <p className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full ml-3"></span>
                        התגייס ב-יולי 1999
                      </p>
                      <p className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full ml-3"></span>
                        שרת בחטיבת הצנחנים
                      </p>
                      <p className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full ml-3"></span>
                        יחידה: פלס"ר 5173
                      </p>
                      <p className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full ml-3"></span>
                        בעל צל"ש מפקד האוגדה
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="group">
                    <div className="flex items-center mb-4">
                      <div className="h-1 w-12 bg-gradient-to-r from-red-600 to-red-400 rounded-full mr-3"></div>
                      <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-900">נפילה</h3>
                    </div>
                    <div className="space-y-3 text-gray-700 text-lg leading-relaxed pr-4">
                      <p className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full ml-3"></span>
                        נפל בפעילות מבצעית
                      </p>
                      <p className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full ml-3"></span>
                        בט"ז באדר תשס"ב, 28/2/2002
                      </p>
                      <p className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full ml-3"></span>
                        מקום נפילה: מחנה בלטה (שכם)
                      </p>
                      <p className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full ml-3"></span>
                        באזור יהודה ושומרון
                      </p>
                    </div>
                    <a href="/images/map/00402190.png" target="_blank" rel="noopener noreferrer" className="block mt-6 p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl border border-red-200/50 hover:shadow-lg transition-all duration-300 group">
                      <p className="text-gray-700 text-center group-hover:text-rose-700 transition-colors font-medium">
                        מקום קבורה: תל אביב - קרית שאול  אזור: 2 חלקה: 19 שורה: 3 קבר: 16
                      </p>
                      <div className="mt-3 flex justify-center">
                        <img
                          src="/images/map/00402190.png"
                          alt="מפת מקום הקבורה"
                          className="rounded-xl shadow-md max-w-[250px] h-auto border-2 border-white/50 transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="group">
                    <div className="flex items-center mb-4">
                      <div className="h-1 w-12 bg-gradient-to-r from-red-600 to-red-400 rounded-full mr-3"></div>
                      <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-900">הותיר אחריו</h3>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed pr-4">
                      <span className="w-2 h-2 bg-red-500 rounded-full ml-3 inline-block"></span>
                      הורים אח ואחות שנולדה אחרי נפילתו
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Life Story */}
            <div className="bg-gradient-to-br from-white/95 via-red-50/20 to-red-100/20 backdrop-blur-xl p-12 md:p-16 rounded-3xl shadow-2xl border border-white/50">
              <div className="flex flex-col md:flex-row md:items-start gap-12">
                {/* Image on the left (on desktop) */}
                <div className="flex-shrink-0 mb-8 md:mb-0 md:ml-8 w-full md:w-80 space-y-8">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-red-700 rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-500"></div>
                    <Image
                      src="/images/6991698296379640360no.jpg"
                      alt="חיים בכר ז״ל - פורטרט"
                      width={320}
                      height={420}
                      className="relative rounded-3xl object-cover shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-red-700 rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-500"></div>
                    <Image
                      src="/images/A_HP_050644_30.jpg"
                      alt="חיים בכר ז״ל - פורטרט"
                      width={320}
                      height={420}
                      className="relative rounded-3xl object-cover shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-red-700 rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-500"></div>
                    <Image
                      src="/images/HP_050644_38.jpg"
                      alt="חיים בכר ז״ל - אישיותו"
                      width={320}
                      height={420}
                      className="relative rounded-3xl object-cover shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>


                


                {/* Text content */}
                <div className="space-y-12 flex-1">
                  <div className="group">
                    <div className="flex items-center mb-6">
                      <div className="h-1 w-16 bg-gradient-to-r from-red-600 to-red-400 rounded-full mr-4"></div>
                      <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-900">ילדות ונעורים</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg md:text-xl pr-4">
                      חיים נולד ב-29 ביוני 1981, בן בכור לצ'לה ומוריס ואח ליוסי. הוא למד בבית הספר היסודי "ש"י עגנון" בבת ים ובגיל עשר עברה משפחתו לשכונת רמת אביב, שם המשיך את לימודיו בבית הספר היסודי ולאחר מכן בבית הספר התיכון "גימנסיה הרצליה".
                    </p>
                  </div>

                  <div className="group">
                    <div className="flex items-center mb-6">
                      <div className="h-1 w-16 bg-gradient-to-r from-red-600 to-red-400 rounded-full mr-4"></div>
                      <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-900">תנועת הצופים</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg md:text-xl pr-4">
                      כשהיה בכיתה ח' הצטרף חיים לשבט הצופים, לשכבת "עוצמה". קן הצופים הפך לביתו השני עד כי אמו אמרה לו שהוא נמצא יותר בצופים מאשר בבית והביתה הוא מגיע רק כדי לישון. חיים היה חלק בלתי נפרד מהשכבה בשבט ונמנה על הגרעין שבחבורה, שמנתה עשרה חברים טובים וקרובים. במקביל, השתלב בתפקידי הדרכה ובשנה האחרונה בצופים שימש כרכז צעיר בשבט.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg md:text-xl mt-6 pr-4 italic border-r-4 border-red-400 pl-6">
                      לחיים היה חיוך רחב וגומת חן שובת לב, והחניכות שלו היו מאוהבות בו ללא תקנה.
                    </p>
                  </div>

                  <div className="group">
                    <div className="flex items-center mb-6">
                      <div className="h-1 w-16 bg-gradient-to-r from-rose-500 to-rose-300 rounded-full mr-4"></div>
                      <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-800">שירות צבאי</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg md:text-xl pr-4">
                      לפני שהתגייס לצבא היה ברור לו שהוא הולך לחיל קרבי כדי לתרום למדינה. לאמו אמר פעמים רבות, כי הוא זו שחינכה אותו לתת.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg md:text-xl mt-6 pr-4">
                      חיים עבר בהצלחה את המיונים לקורס טיס. כל חבריו התרגשו כאשר התגייס וכולם ליוו אותו לבקו"ם ביום הגיוס. לאחר שנה וחודשיים בקורס טייס, עבר חיים לשרת ביחידת פלס"ר צנחנים. הוא היה יכול לבחור בכל יחידה שרצה, אבל בחר בקרבי. הצוות שאליו שובץ היה כבר מגובש לאחר חודשים של אימונים משותפים, אך חיים השתלב בו בקלות ובמהירות. חבריו לצוות מספרים שחיים הוביל את הצוות הן מבחינה מקצועית והן מבחינה חברתית.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg md:text-xl mt-6 pr-4 italic border-r-4 border-red-400 pl-6 bg-gradient-to-r from-red-50/50 to-transparent py-4 rounded-r-xl">
                      "ידענו שאפשר לסמוך על חיים ולהיות שקטים והיינו גאים ללכת אחריו"
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg md:text-xl mt-6 pr-4">
                      חיים היה דמות דומיננטית וכחלק מתפקידו ביטא את דעותיו לגבי אסטרטגיות צבאיות שונות. לא אחת הצליח להשפיע על הממונים עליו לשנות את אופי הפעולה על מנת להגיע להישגים טובים יותר.
                    </p>
                  </div>

                  <div className="group">
                    <div className="flex items-center mb-6">
                      <div className="h-1 w-16 bg-gradient-to-r from-red-600 to-red-400 rounded-full mr-4"></div>
                      <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-900">אישיותו</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg md:text-xl pr-4">
                      חיים מיצה כל רגע אפשרי. בכל יציאה הביתה הוא ידע לשלב בכשרון רב מפגשים עם החברים מימי בית הספר, חברים מקורס טיס, החברה, הצופים, והחבר'ה מהפלס"ר, וגם כמובן עם המשפחה. חיים היה קשור מאוד למשפחתו ודאג להיפגש עם הסבתות, הסבים והדודות.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg md:text-xl mt-6 pr-4">
                      חיים היה אופטימי מטבעו. על שפתיו היו שגורים תמיד משפטים כגון "להסתכל תמיד על חצי הכוס המלאה", ו"הכל בראש". הוא לא הכיר את הביטוי "לא יכול".
                    </p>
                  </div>

                  <div className="group">
                    <div className="flex items-center mb-6">
                      <div className="h-1 w-16 bg-gradient-to-r from-rose-500 to-rose-300 rounded-full mr-4"></div>
                      <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-800">נפילה והנצחה</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg md:text-xl pr-4">
                      עשרה ימים לפני הפעולה בה נהרג, השתתף חיים בפעילות ברצועה. על פעילות זו הוענק לו צל"ש, שהוריו קיבלו לאחר מותו.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg md:text-xl mt-6 pr-4">
                      חיים נהרג ב-28 בפברואר 2002, במהלך פעולה במחנה הפליטים בלאטה בשכם. הוא הוביל את הכוח, כפי שעשה בכל הפעולות בהן השתתף. באחת הסימטאות הופעל מטען, וחיים, שהיה הראשון והמוביל, נהרג. בן עשרים היה במותו.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg md:text-xl mt-6 pr-4">
                      משפחתו של חיים דואגת להנציחו בדרכים שונות. בשנה האחרונה הוקם חדר הנצחה בשבט הצופים שחיים היה פעיל בו. החדר מיועד להעברת פעולות שונות ומוקדש לחיים.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg md:text-xl mt-6 pr-4">
                      חיים אהב מאוד לטייל בארץ. בקיץ 2002 לקראת תאריך יום הולדתו ה-21, הקימה המשפחה כיתת לימוד בטבע, ביער הזורע שברמת מנשה, יער שבו בילה חיים כל שנה את חודשי הקיץ במהלך פעילותו הענפה בתנועת הצופים. חנוכת כיתת הטבע לוותה בקיום צעדה ביער הזורע, פעילות שהיתה אהובה במיוחד על חיים. בנוסף לכל אלו, הוקמה קרן על שמו של חיים בכר, המעניקה מדי שנה שתי מלגות ללוחמים למטרת לימודים אקדמיים.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg md:text-xl mt-6 pr-4 italic border-r-4 border-red-400 pl-6 bg-gradient-to-r from-red-50/50 to-transparent py-4 rounded-r-xl">
                      חיים היה נסיך, נסיך בין חבריו ובמשפחתו. לאחר מותו, בני משפחה וחברים קעקעו על גופם את הציור של הנסיך הקטן, ודמותו הולכת איתם לכל מקום.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Memorial Quote */}
          <div className="bg-gradient-to-br from-white/95 via-red-50/30 to-red-100/30 backdrop-blur-xl rounded-3xl shadow-2xl p-12 md:p-16 mb-20 text-center transform hover:scale-[1.01] transition-all duration-500 border border-white/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer"></div>
            <div className="relative">
              <div className="mb-8 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-r from-red-500 to-red-700 rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500"></div>
                  <Image
                    src="/images/NP_039138_29.jpg"
                    alt="חיים בכר ז״ל - אישיותו"
                    width={250}
                    height={250}
                    className="relative rounded-3xl object-cover shadow-2xl w-64 h-64 transform group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto mb-8"></div>
              <blockquote className="text-3xl md:text-4xl text-gray-800 italic font-light leading-relaxed">
                "חיים היה נסיך, נסיך בין חבריו ובמשפחתו"
              </blockquote>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mt-8"></div>
            </div>
          </div>

          {/* Memorial Projects */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
              </div>
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-rose-700 to-gray-800 tracking-tight">
                פרויקטים להנצחה
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              <div className="bg-gradient-to-br from-white/95 via-rose-50/30 to-transparent backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/50 transform hover:scale-105 hover:shadow-3xl transition-all duration-500 group">
                <div className="mb-6">
                  <div className="h-12 w-12 bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-500">
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-800">חדר הנצחה</h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-rose-400 to-rose-300 rounded-full"></div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  הוקם חדר הנצחה בשבט הצופים שחיים היה פעיל בו. החדר מיועד להעברת פעולות שונות ומוקדש לחיים.
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/95 via-red-50/30 to-transparent backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/50 transform hover:scale-105 hover:shadow-3xl transition-all duration-500 group">
                <div className="mb-6">
                  <div className="h-12 w-12 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-500">
                    <span className="text-2xl">🌲</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-900">כיתת טבע</h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  הוקמה כיתת לימוד בטבע, ביער הזורע שברמת מנשה, יער שבו בילה חיים כל שנה את חודשי הקיץ.
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/95 via-rose-50/30 to-blue-50/30 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/50 transform hover:scale-105 hover:shadow-3xl transition-all duration-500 group">
                <div className="mb-6">
                  <div className="h-12 w-12 bg-gradient-to-br from-rose-400 via-red-500 to-rose-400 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-500">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-blue-600 to-rose-600">קרן מלגות</h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-rose-400 via-red-500 to-rose-400 rounded-full"></div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  הוקמה קרן על שמו של חיים בכר, המעניקה מדי שנה שתי מלגות ללוחמים למטרת לימודים אקדמיים.
                </p>
              </div>
            </div>
          </section>

         

          {/* Youtube Gallery */}
          <YoutubeGallery />

          {/* Photo Gallery Section */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
              </div>
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-red-700 to-gray-800 tracking-tight">
                גלריית תמונות
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            </div>
            <div className="relative px-4 md:px-12">
              <Swiper
                modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                spaceBetween={40}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                coverflowEffect={{
                  rotate: 15,
                  stretch: 0,
                  depth: 200,
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
                  <SwiperSlide key={imageName} className="w-[320px] h-[450px]">
                    <div 
                      className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gray-100 cursor-pointer group"
                      onClick={() => openImage(imageName)}
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-red-700 rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-500"></div>
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            src={getImagePath(imageName)}
                            alt={`תמונה של חיים בכר ז"ל`}
                            width={320}
                            height={450}
                            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                            priority={index < 3}
                            onError={(e) => {
                              console.error(`Error loading image ${imageName}`);
                              e.target.src = '/images/placeholder.jpg';
                              e.target.onerror = null;
                            }}
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <p className="text-base font-semibold">לחץ להגדלה</p>
                          </div>
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
                padding: 60px 0;
                width: 100%;
              }
              .swiper-slide {
                width: 320px !important;
                height: 450px !important;
                opacity: 0.5;
                transform: scale(0.85);
                transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
              }
              .swiper-slide-active {
                opacity: 1;
                transform: scale(1);
              }
              .swiper-button-next,
              .swiper-button-prev {
                color: #e11d48 !important;
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                width: 50px !important;
                height: 50px !important;
                border-radius: 50%;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                transition: all 0.3s ease;
              }
              .swiper-button-next:hover,
              .swiper-button-prev:hover {
                background: rgba(255, 255, 255, 1);
                transform: scale(1.1);
                box-shadow: 0 6px 20px rgba(225, 29, 72, 0.3);
              }
              .swiper-button-next:after,
              .swiper-button-prev:after {
                font-size: 20px !important;
                font-weight: bold;
              }
              .swiper-pagination-bullet {
                width: 12px !important;
                height: 12px !important;
                background: rgba(220, 38, 38, 0.3) !important;
                transition: all 0.3s ease;
              }
              .swiper-pagination-bullet-active {
                background: linear-gradient(135deg, #dc2626, #b91c1c) !important;
                width: 16px !important;
                height: 16px !important;
                box-shadow: 0 0 10px rgba(220, 38, 38, 0.6);
              }
              @keyframes shimmer {
                0% {
                  transform: translateX(-100%);
                }
                100% {
                  transform: translateX(100%);
                }
              }
              .animate-shimmer {
                animation: shimmer 3s infinite;
              }
            `}</style>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white py-20 mt-24 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-800 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            {/* Footer Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
              {/* Memorial Info */}
              <div className="text-center">
                <div className="mb-6">
                  <div className="h-1 w-24 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-4"></div>
                  <p className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
                    לזכרו של סמ"ר חיים בכר ז"ל
                  </p>
                  <div className="h-1 w-24 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mt-4"></div>
                </div>
                <div className="space-y-2 text-base font-light">
                  <p className="opacity-90">נולד: כ"ו בסיון תשמ"א, 29/6/1981</p>
                  <p className="opacity-90">נפל: ט"ז באדר תשס"ב, 28/2/2002</p>
                </div>
              </div>
              
              {/* Footer Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-32 md:h-40 rounded-2xl overflow-hidden group transform hover:scale-105 transition-transform duration-300 shadow-2xl">
                  <Image
                    src="/images/HP_050644_22.jpg"
                    alt="חיים בכר ז״ל"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative h-32 md:h-40 rounded-2xl overflow-hidden group transform hover:scale-105 transition-transform duration-300 shadow-2xl">
                  <Image
                    src="/images/Scan_Pic0007.jpg"
                    alt="חיים בכר ז״ל"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Song Lyrics */}
              <div className="text-center">
                <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 h-full flex items-center">
                  <blockquote className="whitespace-pre-line text-xs md:text-sm text-gray-300 leading-relaxed font-light italic text-right w-full max-h-64 overflow-y-auto">
                    {`כשאמות, משהו ממני, משהו ממני
.ימות בך, ימות בך

כשתמות, משהו ממך בי, משהו ממך בי
.ימות איתך, ימות איתך

כי כולנו, כן כולנו
כולנו רקמה אנושית אחת חיה
ואם אחד מאיתנו
הולך מעמנו
-משהו מת בנו
ומשהו, נשאר איתו

אם נדע, איך להרגיע, איך להרגיע
.את האיבה, אם רק נדע

אם נדע, אם נדע להשקיט את זעמנו (אם נדע להשקיט)
.על אף עלבוננו, לומר סליחה
.אם נדע להתחיל מהתחלה`}
                  </blockquote>
                </div>
              </div>

              {/* Quick Links */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">קישורים מהירים</h3>
                <div className="space-y-2">
                  <Link href="/about" className="block hover:text-red-400 transition-all duration-300 hover:translate-x-2 text-base">על חיים</Link>
                  <Link href="/family" className="block hover:text-red-400 transition-all duration-300 hover:translate-x-2 text-base">המשפחה זוכרים</Link>
                  <Link href="/friends" className="block hover:text-red-400 transition-all duration-300 hover:translate-x-2 text-base">החברים זוכרים</Link>
                  <Link href="/share" className="block hover:text-red-400 transition-all duration-300 hover:translate-x-2 text-base">שיתוף שלכם</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Full Screen Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Close button */}
              <button 
                className="absolute top-6 right-6 text-white text-5xl hover:text-red-500 transition-all duration-300 z-10 w-14 h-14 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 hover:scale-110 backdrop-blur-sm"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>

              {/* Navigation buttons */}
              <button 
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-red-500 transition-all duration-300 z-10 bg-black/50 backdrop-blur-sm p-5 rounded-full hover:bg-black/70 hover:scale-110 w-16 h-16 flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
              >
                ›
              </button>
              <button 
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-red-500 transition-all duration-300 z-10 bg-black/50 backdrop-blur-sm p-5 rounded-full hover:bg-black/70 hover:scale-110 w-16 h-16 flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
              >
                ‹
              </button>

              {/* Image counter */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-xl bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>

              {/* Main image */}
              <div 
                className="relative w-full h-full max-w-7xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={getImagePath(selectedImage)}
                  alt={`תמונה של חיים בכר ז"ל`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
} 