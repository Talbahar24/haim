import Link from 'next/link';
import { useState } from 'react';

export default function Share() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    relationship: '',
    memory: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      relationship: '',
      memory: '',
    });
    alert('תודה על השיתוף! הזיכרון שלך נשלח בהצלחה.');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-right">
      <main className="max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">שתפו זיכרון</h1>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-gray-600 mb-8 text-center">
            אנחנו מזמינים אתכם לשתף זיכרונות, סיפורים ותמונות של חיים. כל זיכרון חשוב ומשמעותי.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                שם מלא
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                דואר אלקטרוני
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>

            <div>
              <label htmlFor="relationship" className="block text-sm font-medium text-gray-700 mb-1">
                קשר לחיים
              </label>
              <select
                id="relationship"
                name="relationship"
                value={formData.relationship}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              >
                <option value="">בחר קשר</option>
                <option value="family">משפחה</option>
                <option value="friend">חבר</option>
                <option value="scouts">חבר בצופים</option>
                <option value="military">חבר בצבא</option>
                <option value="school">חבר מבית הספר</option>
                <option value="other">אחר</option>
              </select>
            </div>

            <div>
              <label htmlFor="memory" className="block text-sm font-medium text-gray-700 mb-1">
                הזיכרון שלך
              </label>
              <textarea
                id="memory"
                name="memory"
                value={formData.memory}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                placeholder="שתף את הזיכרון שלך על חיים..."
              ></textarea>
            </div>

            <div>
              <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">
                תמונה (אופציונלי)
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-red-700 text-white px-8 py-3 rounded-md hover:bg-red-800 transition-colors"
              >
                שלח זיכרון
              </button>
            </div>
          </form>
        </div>
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