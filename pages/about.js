import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-right">
      <main className="max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">על חיים</h1>

        {/* Early Life */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">ילדות ונעורים</h2>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row md:items-start gap-6">
            {/* Text on the right */}
            <div className="flex-1">
              <p className="text-gray-600 mb-4">
                חיים נולד ב-29 ביוני 1981, בן בכור לצ'לה ומוריס ואח ליוסי. הוא למד בבית הספר היסודי "ש"י עגנון" בבת ים ובגיל עשר עברה משפחתו לשכונת רמת אביב, שם המשיך את לימודיו בבית הספר היסודי ולאחר מכן בבית הספר התיכון "גימנסיה הרצליה".
              </p>
              <p className="text-gray-600">
                לחיים היה חיוך רחב וגומת חן שובת לב, והחניכות שלו היו מאוהבות בו ללא תקנה. הוא היה אופטימי מטבעו, ועל שפתיו היו שגורים תמיד משפטים כגון "להסתכל תמיד על חצי הכוס המלאה" ו"הכל בראש".
              </p>
            </div>
            {/* Image on the left */}
            <div className="flex-shrink-0 mb-4 md:mb-0 md:ml-6 w-full md:w-64">
              <Image
                src="/images/family/HP_050589_10.jpg"
                alt={'חיים בכר ז"ל - ילדות'}
                width={250}
                height={300}
                className="rounded-2xl object-cover shadow-md w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Scouts */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">תנועת הצופים</h2>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row md:items-start gap-6">
            {/* Text on the right */}
            <div className="flex-1">
              <p className="text-gray-600 mb-4">
                כשהיה בכיתה ח' הצטרף חיים לשבט הצופים, לשכבת "עוצמה". קן הצופים הפך לביתו השני עד כי אמו אמרה לו שהוא נמצא יותר בצופים מאשר בבית והביתה הוא מגיע רק כדי לישון. חיים היה חלק בלתי נפרד מהשכבה בשבט ונמנה על הגרעין שבחבורה, שמנתה עשרה חברים טובים וקרובים. במקביל, השתלב בתפקידי הדרכה ובשנה האחרונה בצופים שימש כרכז צעיר בשבט.
              </p>
              <p className="text-gray-600">
                לחיים היה חיוך רחב וגומת חן שובת לב, והחניכות שלו היו מאוהבות בו ללא תקנה. הוא היה אופטימי מטבעו, ועל שפתיו היו שגורים תמיד משפטים כגון "להסתכל תמיד על חצי הכוס המלאה" ו"הכל בראש".
              </p>
            </div>
            {/* Image on the left */}
            <div className="flex-shrink-0 mb-4 md:mb-0 md:ml-6 w-full md:w-64">
              <Image
                src="/images/Scan_Pic0007.jpg"
                alt={'חיים בכר ז"ל - תנועת הצופים'}
                width={250}
                height={300}
                className="rounded-2xl object-cover shadow-md w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Military Service */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">שירות צבאי</h2>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row md:items-start gap-6">
            {/* Text on the right */}
            <div className="flex-1">
              <p className="text-gray-600 mb-4">
                לפני שהתגייס לצבא היה ברור לו שהוא הולך לחיל קרבי כדי לתרום למדינה. לאמו אמר פעמים רבות, כי הוא זו שחינכה אותו לתת.
              </p>
              <p className="text-gray-600 mb-4">
                חיים עבר בהצלחה את המיונים לקורס טיס. כל חבריו התרגשו כאשר התגייס וכולם ליוו אותו לבקו"ם ביום הגיוס. לאחר שנה וחודשיים בקורס טיס, עבר חיים לשרת ביחידת פלס"ר צנחנים. הוא היה יכול לבחור בכל יחידה שרצה, אבל בחר בקרבי. הצוות שאליו שובץ היה כבר מגובש לאחר חודשים של אימונים משותפים, אך חיים השתלב בו בקלות ובמהירות. חבריו לצוות מספרים שחיים הוביל את הצוות הן מבחינה מקצועית והן מבחינה חברתית.
              </p>
              <p className="text-gray-600">
                חיים היה דמות דומיננטית וכחלק מתפקידו ביטא את דעותיו לגבי אסטרטגיות צבאיות שונות. לא אחת הצליח להשפיע על הממונים עליו לשנות את אופי הפעולה על מנת להגיע להישגים טובים יותר.
              </p>
            </div>
            {/* Image on the left */}
            <div className="flex-shrink-0 mb-4 md:mb-0 md:ml-6 w-full md:w-64">
              <Image
                src="/images/HP_050644_12.jpg"
                alt={'חיים בכר ז"ל - שירות צבאי'}
                width={250}
                height={300}
                className="rounded-2xl object-cover shadow-md w-full h-auto"
              />
            </div>
          </div>
        </section>


      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>לזכרו של סמ"ר חיים בכר ז"ל</p>
          <p className="mt-2">נולד: כ"ו בסיון תשמ"א, 29/6/1981</p>
          <p>נפל: ט"ז באדר תשס"ב, 28/2/2002</p>
        </div>
      </footer>
    </div>
  );
} 