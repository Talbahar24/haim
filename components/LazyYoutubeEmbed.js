import { useState, useEffect, useRef } from 'react';

/**
 * Lazy YouTube embed: shows a lightweight thumbnail until the card is in view or user clicks.
 * Loads the heavy iframe only when needed to avoid mobile RAM crash (4 iframes at once).
 */
function getVideoId(embedUrl) {
  const match = embedUrl.match(/\/embed\/([^/?]+)/);
  return match ? match[1] : '';
}

export default function LazyYoutubeEmbed({ url, title }) {
  const videoId = getVideoId(url);
  const [loadIframe, setLoadIframe] = useState(false);
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  // Load iframe when card enters viewport (with small delay so only visible ones load)
  useEffect(() => {
    if (!containerRef.current || !videoId) return;
    const el = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) setInView(true);
      },
      { rootMargin: '100px', threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [videoId]);

  // Load iframe when in view (lazy) or when user clicked play
  const shouldLoad = loadIframe || inView;

  const handlePlayClick = (e) => {
    e.preventDefault();
    setLoadIframe(true);
  };

  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : '';

  return (
    <div ref={containerRef} className="w-full aspect-video mb-6 rounded-2xl overflow-hidden shadow-xl bg-black/5 relative">
      {shouldLoad ? (
        <iframe
          width="100%"
          height="100%"
          src={url}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-2xl w-full h-full absolute inset-0"
        />
      ) : (
        <>
          <img
            src={thumbnailUrl}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <button
            type="button"
            onClick={handlePlayClick}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors rounded-2xl"
            aria-label={`הפעל סרטון: ${title}`}
          >
            <span className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 text-white shadow-xl transition-transform hover:scale-110">
              <svg className="w-8 h-8 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        </>
      )}
    </div>
  );
}
