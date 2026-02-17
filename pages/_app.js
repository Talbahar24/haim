import '../styles/globals.css';
import Header from '../components/Header';
import ErrorBoundary from '../components/ErrorBoundary';
import ErrorToast from '../components/ErrorToast';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  // Catch errors so the page doesn't crash; show a small toast instead of browser dialog (throttled)
  useEffect(() => {
    let lastToastAt = 0;
    const TOAST_COOLDOWN_MS = 6000;

    const showToast = (message) => {
      const now = Date.now();
      if (now - lastToastAt < TOAST_COOLDOWN_MS) return;
      lastToastAt = now;
      window.dispatchEvent(new CustomEvent('app-error', { detail: { message } }));
    };

    const handleUnhandledRejection = (event) => {
      console.error('Unhandled promise rejection:', event.reason);
      event.preventDefault();
      showToast('חלק מהפעולות לא בוצעו. הדף ממשיך לעבוד.');
    };

    const handleError = (event) => {
      console.error('Global error:', event.error);
      event.preventDefault();
      event.returnValue = false;
      showToast('משהו השתבש. הדף ממשיך לעבוד.');
      return false;
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <>
      <Header />
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
      <ErrorToast />
    </>
  );
}

export default MyApp; 