import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const images = [
  {
    url: 'https://storage.georgia.travel/images/shutterstock-328981784.webp',
    caption: 'Georgian Music and Dance',
  },
  {
    url: 'https://storage.georgia.travel/images/shutterstock-1134138560.webp',
    caption: 'Traditional Georgian Cuisine',
  },
  {
    url: 'https://live.staticflickr.com/7566/15750223128_662de5ba23_b.jpg',
    caption: 'Georgian Festivals and Celebrations',
  },
];

const Culture = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Explore Georgian Culture</h1>
      <div className="relative mb-12">
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          stopOnHover={true}
          transitionTime={500}
          swipeable={true}
          emulateTouch={false}
          dynamicHeight={true}
        >
          {images.map((image, index) => (
            <div key={index} className="relative h-96">
              <img src={image.url} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-lg shadow-lg" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent p-6">
                <p className="text-2xl font-bold text-white mb-2">{image.caption}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="text-lg text-gray-700 dark:text-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <p className="mb-4">
              Georgian culture is a vibrant tapestry woven from a blend of ancient traditions and modern influences. From its unique language and alphabet to its rich music, dance, and culinary traditions, Georgia offers a rich cultural experience.
            </p>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <p className="mb-4">
              Traditional Georgian music is polyphonic and known for its complex harmonies, while Georgian folk dances captivate with their energy and color. The country's literary heritage includes epic poetry and prose dating back centuries.
            </p>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <p className="mb-4">
              Georgian cuisine is diverse and flavorful, featuring iconic dishes like khachapuri (cheese-filled bread) and khinkali (dumplings), often accompanied by fine wines. Festivals and religious celebrations, such as Supra, showcase the warmth and hospitality of Georgian traditions.
            </p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Culture;
