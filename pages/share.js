import { useState } from 'react';
import Head from 'next/head';

export default function Share() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    relationship: '',
    memory: '',
    photo: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      });

      const response = await fetch('/api/send-memory', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('שגיאה בשליחת הזיכרון');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        relationship: '',
        memory: '',
        photo: null
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>שתף זיכרון - חיים בכר</title>
        <meta name="description" content="שתף זיכרון אישי על חיים בכר" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/40 to-red-100/30 py-8 px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-rose-700 to-gray-800 tracking-tight">
              שתף זיכרון
            </h1>
            <p className="text-lg md:text-xl text-gray-700 font-light">
              אנא שתף איתנו זיכרון אישי על חיים
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent mt-4"></div>
          </div>

          <div className="bg-gradient-to-br from-white/95 via-red-50/20 to-red-100/20 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-base font-semibold text-gray-800 mb-2">
                  שם מלא *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-300 text-lg"
                  placeholder="הכנס את שמך המלא"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base font-semibold text-gray-800 mb-2">
                  אימייל *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-300 text-lg"
                  placeholder="הכנס את כתובת האימייל שלך"
                />
              </div>

              <div>
                <label htmlFor="relationship" className="block text-base font-semibold text-gray-800 mb-2">
                  קשר לחיים *
                </label>
                <input
                  type="text"
                  id="relationship"
                  name="relationship"
                  required
                  value={formData.relationship}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-300 text-lg"
                  placeholder="מה הקשר שלך לחיים?"
                />
              </div>

              <div>
                <label htmlFor="memory" className="block text-base font-semibold text-gray-800 mb-2">
                  הזיכרון שלך *
                </label>
                <textarea
                  id="memory"
                  name="memory"
                  required
                  value={formData.memory}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-300 text-lg resize-none"
                  placeholder="שתף את הזיכרון שלך על חיים..."
                />
              </div>

              <div>
                <label htmlFor="photo" className="block text-base font-semibold text-gray-800 mb-2">
                  תמונה (אופציונלי)
                </label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-300 text-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-rose-50 file:text-rose-700 hover:file:bg-rose-100"
                />
                <p className="mt-2 text-sm text-gray-600">
                  ניתן להעלות תמונה אחת בפורמט JPG, PNG או GIF
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-xl border-2 border-green-200">
                  הזיכרון נשלח בהצלחה! תודה על השיתוף.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-gradient-to-r from-red-50 to-rose-50 text-red-700 rounded-xl border-2 border-red-200">
                  אירעה שגיאה בשליחת הזיכרון. אנא נסה שוב מאוחר יותר.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl text-white font-bold text-lg transition-all duration-300 transform shadow-lg ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                }`}
              >
                {isSubmitting ? 'שולח...' : 'שלח זיכרון'}
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
} 