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
      <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">שיתופים על חיים בכר</h1>
            <p className="text-lg text-gray-600">כאן תוכלו לקרוא את כל הזיכרונות והשיתופים שנשלחו</p>
          </div>
          <div className="space-y-6">
            {memories.length === 0 && (
              <div className="text-center text-gray-500">עדיין לא נשלחו שיתופים.</div>
            )}
            {memories.map((memory, idx) => {
              // Handle both array and string formats (for backward compatibility)
              const name = Array.isArray(memory.name) ? memory.name[0] : memory.name;
              const relationship = Array.isArray(memory.relationship) ? memory.relationship[0] : memory.relationship;
              const memoryText = Array.isArray(memory.memory) ? memory.memory[0] : memory.memory;
              
              return (
                <div key={idx} className="bg-white rounded-lg shadow-md p-6">
                  <div className="mb-2 text-sm text-gray-500">{memory.date || ''}</div>
                  <div className="font-bold text-lg mb-1">{name}</div>
                  <div className="text-gray-700 mb-2">{relationship}</div>
                  <div className="mb-2">{memoryText}</div>
                  {memory.photo && (
                    <img src={memory.photo} alt="תמונה" className="max-w-xs rounded mt-2" />
                  )}
                </div>
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