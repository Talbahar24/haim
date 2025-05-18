import Image from 'next/image';



const quote = `כשאמות, משהו ממני, משהו ממני\n.ימות בך, ימות בך\n\nכשתמות, משהו ממך בי, משהו ממך בי\n.ימות איתך, ימות איתך\n\nכי כולנו, כן כולנו\nכולנו רקמה אנושית אחת חיה\nואם אחד מאיתנו\nהולך מעמנו\n-משהו מת בנו\nומשהו, נשאר איתו\n\nאם נדע, איך להרגיע, איך להרגיע\n.את האיבה, אם רק נדע\n\nאם נדע, אם נדע להשקיט את זעמנו (אם נדע להשקיט)\n.על אף עלבוננו, לומר סליחה\n.אם נדע להתחיל מהתחלה`;

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <blockquote className="whitespace-pre-line text-lg text-gray-200 italic mb-6 max-w-2xl mx-auto">
          {quote}
        </blockquote>
        <p>לזכרו של סמ"ר חיים בכר ז"ל</p>
        <p className="mt-2">נולד: כ"ו בסיון תשמ"א, 29/6/1981</p>
        <p>נפל: ט"ז באדר תשס"ב, 28/2/2002</p>
      </div>
    </footer>
  );
} 