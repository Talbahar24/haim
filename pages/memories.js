import Head from 'next/head';
import memories from '../public/memories.json';

export default function Memories() {
  return (
    <>
      <Head>
        <title>שיתופים על חיים בכר</title>
        <meta name="description" content="כל הזיכרונות והשיתופים על חיים בכר" />
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
            {memories.map((memory, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-2 text-sm text-gray-500">{memory.date || ''}</div>
                <div className="font-bold text-lg mb-1">{memory.name}</div>
                <div className="text-gray-700 mb-2">{memory.relationship}</div>
                <div className="mb-2">{memory.memory}</div>
                {memory.photo && (
                  <img src={memory.photo} alt="תמונה" className="max-w-xs rounded mt-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
} 