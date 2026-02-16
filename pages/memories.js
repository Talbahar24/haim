import Head from 'next/head';
import fs from 'fs';
import path from 'path';

export default function Memories({ memories = [] }) {
  return (
    <>
      <Head>
        <title>שיתופים על חיים בכר ז"ל</title>
        <meta name="description" content="כל הזיכרונות והשיתופים על חיים בכר ז״ל" />
        <link rel="icon" href="/images/LOGO.jpeg" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/40 to-red-100/30 py-12 px-4 sm:px-6 lg:px-8 pt-24 text-right">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block mb-4">
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-rose-400 to-transparent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-rose-700 to-gray-800 tracking-tight">
              שיתופים על חיים בכר
            </h1>
            <p className="text-lg text-gray-600 font-light">כאן תוכלו לקרוא את כל הזיכרונות והשיתופים שנשלחו</p>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent mt-4 mx-auto" />
          </div>
          <div className="space-y-6">
            {memories.length === 0 && (
              <div className="text-center py-16 px-6 rounded-3xl bg-white/80 backdrop-blur border border-white/60 shadow-xl">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">עדיין לא נשלחו שיתופים.</p>
                <p className="text-gray-500 text-sm mt-1">היה הראשון לשתף זיכרון</p>
              </div>
            )}
            {memories.map((memory, idx) => {
              const name = Array.isArray(memory.name) ? memory.name[0] : memory.name;
              const relationship = Array.isArray(memory.relationship) ? memory.relationship[0] : memory.relationship;
              const memoryText = Array.isArray(memory.memory) ? memory.memory[0] : memory.memory;
              return (
                <article
                  key={idx}
                  className="rounded-3xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-xl p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300"
                >
                  {memory.date && (
                    <time className="block text-sm text-gray-500 mb-3" dateTime={memory.date}>{memory.date}</time>
                  )}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-100 to-rose-100 flex items-center justify-center text-red-700 font-bold shrink-0">
                      {name ? name.charAt(0) : '?'}
                    </div>
                    <div>
                      <p className="font-bold text-lg text-gray-800">{name}</p>
                      <p className="text-gray-600 text-sm">{relationship}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{memoryText}</p>
                  {memory.photo && (
                    <img src={memory.photo} alt="תמונה" className="max-w-xs rounded-2xl mt-4 shadow-md border border-white/50" />
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const memoriesPath = path.join(process.cwd(), 'public', 'memories.json');
  let memories = [];
  
  if (fs.existsSync(memoriesPath)) {
    try {
      const data = fs.readFileSync(memoriesPath, 'utf-8');
      memories = JSON.parse(data);
    } catch (e) {
      console.error('Error reading memories.json:', e);
      memories = [];
    }
  }
  
  return {
    props: {
      memories,
    },
  };
} 