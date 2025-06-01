import { useState } from 'react';
import Image from 'next/image';

export default function ImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full">
      {/* גלריית תמונות */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src}
              alt={image.alt || 'תמונה לזכר חיים'}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* מודל לתצוגת תמונה מלאה */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-4xl max-h-[90vh] flex flex-col">
            <button
              className="absolute top-2 right-2 text-white text-2xl z-10 bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="relative flex-grow">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt || 'תמונה לזכר חיים'}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 70vw"
                className="object-contain"
                priority
              />
            </div>
            {selectedImage.alt && (
              <p className="text-white text-center mt-2 text-sm md:text-base">{selectedImage.alt}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 