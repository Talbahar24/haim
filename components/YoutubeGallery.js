const videos = [
  {
    url: 'https://www.youtube.com/embed/S6H0LNKnh7Q',
    title: "סרטון לזכר חיים בכר-Haim Bachar",
  },
  {
    url: 'https://www.youtube.com/embed/rwDnDa-4LbY',
    title: "מצגת תמונות לזכר חיים בכר",
  },
  {
    url: 'https://www.youtube.com/embed/yHl9nRjxEY8',
    title: "וידאו מצגת 2 תמונות לזכר חיים בכר",
  },
];

export default function YoutubeGallery() {
  return (
    <section className="my-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">סרטונים לזכר חיים</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {videos.map((video, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-2 md:p-4 flex flex-col items-center">
            <div className="w-full aspect-video mb-2 md:mb-4">
              <iframe
                width="100%"
                height="100%"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg w-full h-full"
              ></iframe>
            </div>
            <p className="text-center text-gray-700 font-semibold text-sm md:text-base px-2">{video.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 