import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function ImageGallery({ 
  images, 
  getImagePath, 
  getImageAlt, 
  className = '', 
  slideWidth = 300, 
  slideHeight = 400,
  imageClassName = 'object-cover'
}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      } else if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentImageIndex]);

  // Function to navigate between images
  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % images.length 
      : (currentImageIndex - 1 + images.length) % images.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Function to open image and set current index
  const openImage = (image, index) => {
    setCurrentImageIndex(index);
    setSelectedImage(image);
  };

  return (
    <>
      <div className={`relative px-12 ${className}`}>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={30}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className={`gallery-swiper ${className}`}
        >
          {images.map((image, index) => (
            <SwiperSlide 
              key={typeof image === 'string' ? image : image.toString()} 
              className={`w-[${slideWidth}px] h-[${slideHeight}px]`}
            >
              <div 
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl bg-gray-100 cursor-pointer"
                onClick={() => openImage(image, index)}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={getImagePath(image)}
                    alt={getImageAlt(image)}
                    width={slideWidth}
                    height={slideHeight}
                    className={`w-full h-full ${imageClassName}`}
                    priority={index < 3}
                    onError={(e) => {
                      console.error(`Error loading image ${image}`);
                      e.target.src = '/images/placeholder.jpg';
                      e.target.onerror = null;
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-medium">לחץ להגדלה</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 text-white text-4xl hover:text-red-500 transition-colors duration-300 z-10"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            {/* Navigation buttons */}
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-red-500 transition-colors duration-300 z-10 bg-black/30 p-4 rounded-full"
              onClick={() => navigateImage('next')}
            >
              ›
            </button>
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-red-500 transition-colors duration-300 z-10 bg-black/30 p-4 rounded-full"
              onClick={() => navigateImage('prev')}
            >
              ‹
            </button>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg bg-black/30 px-4 py-2 rounded-full">
              {currentImageIndex + 1} / {images.length}
            </div>

            {/* Main image */}
            <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
              <Image
                src={getImagePath(selectedImage)}
                alt={getImageAlt(selectedImage)}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* Add custom styles */}
      <style jsx global>{`
        .gallery-swiper {
          padding: 50px 0;
          width: 100%;
        }
        .swiper-slide {
          opacity: 0.4;
          transform: scale(0.8);
          transition: all 0.3s ease;
        }
        .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #991b1b !important;
          background: rgba(255, 255, 255, 0.8);
          width: 40px !important;
          height: 40px !important;
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }
        .swiper-button-next:after {
          content: 'prev' !important;
          font-size: 18px !important;
        }
        .swiper-button-prev:after {
          content: 'next' !important;
          font-size: 18px !important;
        }
        .swiper-pagination-bullet-active {
          background: #991b1b !important;
        }
      `}</style>
    </>
  );
} 