import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/40 to-red-100/30 text-right">
      <main className="max-w-7xl mx-auto py-16 px-4 pt-24">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-rose-700 to-gray-800 tracking-tight">
            על חיים
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
        </div>

        {/* Early Life */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-rose-500 to-rose-300 rounded-full mr-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-800">ילדות ונעורים</h2>
          </div>
          <div className="bg-gradient-to-br from-white/95 via-rose-50/20 to-blue-50/20 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/50 flex flex-col md:flex-row md:items-start gap-8">
            {/* Text on the right */}
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl mb-6">
                חיים נולד ב-29 ביוני 1981, בן בכור לצ'לה ומוריס ואח ליוסי. הוא למד בבית הספר היסודי "ש"י עגנון" בבת ים ובגיל עשר עברה משפחתו לשכונת רמת אביב, שם המשיך את לימודיו בבית הספר היסודי ולאחר מכן בבית הספר התיכון "גימנסיה הרצליה".
              </p>
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                לחיים היה חיוך רחב וגומת חן שובת לב, והחניכות שלו היו מאוהבות בו ללא תקנה. הוא היה אופטימי מטבעו, ועל שפתיו היו שגורים תמיד משפטים כגון "להסתכל תמיד על חצי הכוס המלאה" ו"הכל בראש".
              </p>
            </div>
            {/* Image on the left */}
            <div className="flex-shrink-0 mb-4 md:mb-0 md:ml-8 w-full md:w-80">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-rose-400 to-blue-400 rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-500"></div>
                <Image
                  src="/images/family/HP_050589_10.jpg"
                  alt={'חיים בכר ז"ל - ילדות'}
                  width={320}
                  height={400}
                  className="relative rounded-3xl object-cover shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Scouts */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-red-600 to-red-400 rounded-full mr-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-900">תנועת הצופים</h2>
          </div>
          <div className="bg-gradient-to-br from-white/95 via-red-50/20 to-red-100/20 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/50 flex flex-col md:flex-row md:items-start gap-8">
            {/* Text on the right */}
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl mb-6">
                כשהיה בכיתה ח' הצטרף חיים לשבט הצופים, לשכבת "עוצמה". קן הצופים הפך לביתו השני עד כי אמו אמרה לו שהוא נמצא יותר בצופים מאשר בבית והביתה הוא מגיע רק כדי לישון. חיים היה חלק בלתי נפרד מהשכבה בשבט ונמנה על הגרעין שבחבורה, שמנתה עשרה חברים טובים וקרובים. במקביל, השתלב בתפקידי הדרכה ובשנה האחרונה בצופים שימש כרכז צעיר בשבט.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                לחיים היה חיוך רחב וגומת חן שובת לב, והחניכות שלו היו מאוהבות בו ללא תקנה. הוא היה אופטימי מטבעו, ועל שפתיו היו שגורים תמיד משפטים כגון "להסתכל תמיד על חצי הכוס המלאה" ו"הכל בראש".
              </p>
            </div>
            {/* Image on the left */}
            <div className="flex-shrink-0 mb-4 md:mb-0 md:ml-8 w-full md:w-80">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-red-700 rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-500"></div>
                <Image
                  src="/images/Scan_Pic0007.jpg"
                  alt={'חיים בכר ז"ל - תנועת הצופים'}
                  width={320}
                  height={400}
                  className="relative rounded-3xl object-cover shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Military Service */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-rose-500 to-rose-300 rounded-full mr-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-800">שירות צבאי</h2>
          </div>
          <div className="bg-gradient-to-br from-white/95 via-rose-50/20 to-blue-50/20 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/50 flex flex-col md:flex-row md:items-start gap-8">
            {/* Text on the right */}
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl mb-6">
                לפני שהתגייס לצבא היה ברור לו שהוא הולך לחיל קרבי כדי לתרום למדינה. לאמו אמר פעמים רבות, כי הוא זו שחינכה אותו לתת.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl mb-6">
                חיים עבר בהצלחה את המיונים לקורס טיס. כל חבריו התרגשו כאשר התגייס וכולם ליוו אותו לבקו"ם ביום הגיוס. לאחר שנה וחודשיים בקורס טיס, עבר חיים לשרת ביחידת פלס"ר צנחנים. הוא היה יכול לבחור בכל יחידה שרצה, אבל בחר בקרבי. הצוות שאליו שובץ היה כבר מגובש לאחר חודשים של אימונים משותפים, אך חיים השתלב בו בקלות ובמהירות. חבריו לצוות מספרים שחיים הוביל את הצוות הן מבחינה מקצועית והן מבחינה חברתית.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                חיים היה דמות דומיננטית וכחלק מתפקידו ביטא את דעותיו לגבי אסטרטגיות צבאיות שונות. לא אחת הצליח להשפיע על הממונים עליו לשנות את אופי הפעולה על מנת להגיע להישגים טובים יותר.
              </p>
            </div>
            {/* Image on the left */}
            <div className="flex-shrink-0 mb-4 md:mb-0 md:ml-8 w-full md:w-80">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-rose-400 to-blue-400 rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-500"></div>
                <Image
                  src="/images/HP_050644_12.jpg"
                  alt={'חיים בכר ז"ל - שירות צבאי'}
                  width={320}
                  height={400}
                  className="relative rounded-3xl object-cover shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>


      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white py-16 mt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-rose-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto mb-4"></div>
            <p className="text-2xl font-bold mb-2 bg-gradient-to-r from-white via-rose-200 to-white bg-clip-text text-transparent">
              לזכרו של סמ"ר חיים בכר ז"ל
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mt-4"></div>
          </div>
          <div className="space-y-2 text-lg font-light">
            <p className="opacity-90">נולד: כ"ו בסיון תשמ"א, 29/6/1981</p>
            <p className="opacity-90">נפל: ט"ז באדר תשס"ב, 28/2/2002</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 