import { useState, useEffect, useRef } from 'react';

/**
 * Small non-blocking toast for runtime errors. Listens to 'app-error' custom event.
 * Does not crash the page; user can dismiss or ignore.
 */
export default function ErrorToast() {
  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleAppError = (e) => {
      const text = e.detail?.message || e.detail || 'משהו השתבש. הדף ממשיך לעבוד.';
      setMessage(text);
      setVisible(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setVisible(false);
        setMessage(null);
        timeoutRef.current = null;
      }, 5000);
    };

    window.addEventListener('app-error', handleAppError);
    return () => {
      window.removeEventListener('app-error', handleAppError);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!visible || !message) return null;

  return (
    <div
      role="alert"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] max-w-[90vw] pl-4 pr-3 py-3 rounded-xl bg-gray-800/95 backdrop-blur-md text-white text-sm shadow-2xl border border-white/10 border-r-4 border-r-red-500 flex items-center gap-3 animate-fadeIn"
    >
      <span className="flex-1">{message}</span>
      <button
        type="button"
        onClick={() => {
          setVisible(false);
          setMessage(null);
        }}
        className="p-1.5 rounded-lg hover:bg-white/20 transition shrink-0"
        aria-label="סגור"
      >
        ×
      </button>
    </div>
  );
}
