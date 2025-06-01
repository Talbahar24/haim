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

      <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">שתף זיכרון</h1>
            <p className="text-lg text-gray-600">
              אנא שתף איתנו זיכרון אישי על חיים
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  שם מלא *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="הכנס את שמך המלא"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  אימייל *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="הכנס את כתובת האימייל שלך"
                />
              </div>

              <div>
                <label htmlFor="relationship" className="block text-sm font-medium text-gray-700 mb-1">
                  קשר לחיים *
                </label>
                <input
                  type="text"
                  id="relationship"
                  name="relationship"
                  required
                  value={formData.relationship}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="מה הקשר שלך לחיים?"
                />
              </div>

              <div>
                <label htmlFor="memory" className="block text-sm font-medium text-gray-700 mb-1">
                  הזיכרון שלך *
                </label>
                <textarea
                  id="memory"
                  name="memory"
                  required
                  value={formData.memory}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="שתף את הזיכרון שלך על חיים..."
                />
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
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
                <p className="mt-1 text-sm text-gray-500">
                  ניתן להעלות תמונה אחת בפורמט JPG, PNG או GIF
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-md">
                  הזיכרון נשלח בהצלחה! תודה על השיתוף.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-md">
                  אירעה שגיאה בשליחת הזיכרון. אנא נסה שוב מאוחר יותר.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-md text-white font-medium ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
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