const quote = `כשאמות, משהו ממני, משהו ממני\n.ימות בך, ימות בך\n\nכשתמות, משהו ממך בי, משהו ממך בי\n.ימות איתך, ימות איתך\n\nכי כולנו, כן כולנו\nכולנו רקמה אנושית אחת חיה\nואם אחד מאיתנו\nהולך מעמנו\n-משהו מת בנו\nומשהו, נשאר איתו\n\nאם נדע, איך להרגיע, איך להרגיע\n.את האיבה, אם רק נדע\n\nאם נדע, אם נדע להשקיט את זעמנו (אם נדע להשקיט)\n.על אף עלבוננו, לומר סליחה\n.אם נדע להתחיל מהתחלה`;

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-gray-900 to-gray-900" />
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/20 via-transparent to-transparent" />
      <div className="relative max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-red-500/60 to-transparent mx-auto mb-12" />
        <blockquote className="whitespace-pre-line text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-light italic">
          {quote}
        </blockquote>
        <div className="mt-12 pt-10 border-t border-white/10">
          <p className="text-white font-semibold text-lg">לזכרו של סמ"ר חיים בכר ז"ל</p>
          <div className="mt-3 flex flex-wrap justify-center gap-x-8 gap-y-1 text-gray-400 text-sm md:text-base">
            <span>נולד: כ"ו בסיון תשמ"א, 29/6/1981</span>
            <span className="text-red-400/80">•</span>
            <span>נפל: ט"ז באדר תשס"ב, 28/2/2002</span>
          </div>
        </div>
      </div>
    </footer>
  );
} 