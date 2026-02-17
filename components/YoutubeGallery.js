import LazyYoutubeEmbed from './LazyYoutubeEmbed';

const videos = [
  { url: 'https://www.youtube.com/embed/S6H0LNKnh7Q', title: 'חלק א סרטון לזכר חיים בכר-Haim Bachar' },
  { url: 'https://www.youtube.com/embed/a4WpWk7arSw', title: 'חלק ב סרטון לזכר חיים בכר-Haim Bachar' },
  { url: 'https://www.youtube.com/embed/rwDnDa-4LbY', title: 'מצגת תמונות לזכר חיים בכר' },
  { url: 'https://www.youtube.com/embed/yHl9nRjxEY8', title: 'וידאו מצגת 2 תמונות לזכר חיים בכר' },
];

export default function YoutubeGallery() {
  return (
    <section className="my-20 px-4">
      <div className="text-center mb-16">
        <div className="inline-block mb-4">
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
        </div>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-red-700 to-gray-800 tracking-tight">
          סרטונים לזכר חיים
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
        {videos.map((video, idx) => (
          <div key={idx} className="group">
            <div className="bg-gradient-to-br from-white/95 via-red-50/20 to-red-100/20 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 transform hover:scale-[1.02] hover:shadow-3xl transition-all duration-500 overflow-hidden relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-700 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              <div className="relative">
                <LazyYoutubeEmbed url={video.url} title={video.title} />
                <div className="text-center">
                  <div className="h-1 w-16 bg-gradient-to-r from-red-500 to-red-700 rounded-full mx-auto mb-4"></div>
                  <p className="text-gray-800 font-bold text-lg md:text-xl px-4 leading-relaxed">{video.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 