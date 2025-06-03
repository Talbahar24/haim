import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Keyboard } from 'swiper/modules';
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
  imageClassName = 'object-cover',
  swiperEffect = 'coverflow',
  swiperBreakpoints = {
    320: { slidesPerView: 1, spaceBetween: 20 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 30 }
  }
}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (image) => {
    const index = images.indexOf(image);
    setCurrentImageIndex(index);
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleKeyDown = (e) => {
    if (!selectedImage) return;
    
    if (e.key === 'ArrowLeft') {
      const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
      setCurrentImageIndex(prevIndex);
      setSelectedImage(images[prevIndex]);
    } else if (e.key === 'ArrowRight') {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
      setSelectedImage(images[nextIndex]);
    } else if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedImage, currentImageIndex]);

  // Swiper Gallery Component
  const SwiperGallery = () => (
    <div className={`w-full ${className}`}>
      <Swiper
        effect={swiperEffect}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Keyboard]}
        breakpoints={swiperBreakpoints}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-[300px] h-[400px]">
            <div
              className="relative w-full h-full cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => handleImageClick(image)}
            >
              <Image
                src={getImagePath(image)}
                alt={getImageAlt(image)}
                fill
                className={`${imageClassName} transition-transform duration-300 hover:scale-110`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  // Full Screen Modal Component
  const FullScreenModal = () => (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      onClick={closeModal}
    >
      <button
        className="absolute top-4 right-4 text-white text-4xl hover:text-red-500 transition-colors z-50"
        onClick={closeModal}
      >
        ×
      </button>
      
      {/* Navigation Buttons */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-red-500 transition-colors z-50 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
        onClick={(e) => {
          e.stopPropagation();
          const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
          setCurrentImageIndex(prevIndex);
          setSelectedImage(images[prevIndex]);
        }}
      >
        ‹
      </button>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-red-500 transition-colors z-50 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
        onClick={(e) => {
          e.stopPropagation();
          const nextIndex = (currentImageIndex + 1) % images.length;
          setCurrentImageIndex(nextIndex);
          setSelectedImage(images[nextIndex]);
        }}
      >
        ›
      </button>

      {/* Image Counter */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg bg-black bg-opacity-50 px-4 py-2 rounded-full z-50">
        {currentImageIndex + 1} / {images.length}
      </div>

      {/* Main Image */}
      <div 
        className="relative w-full h-full max-w-7xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={getImagePath(selectedImage)}
          alt={getImageAlt(selectedImage)}
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );

  return (
    <div className="relative">
      <SwiperGallery />
      {selectedImage && <FullScreenModal />}
    </div>
  );
} 