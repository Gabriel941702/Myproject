import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
  {
    url: 'https://cdn.georgiantravelguide.com/storage/files/sveticxoveli-church-svetitskhoveli-2.jpg',
    caption: 'Ancient Georgian Architecture',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Gori_fortress_by_ArmAg_%281%29.JPG',
    caption: 'Georgian Historical Sites',
  },
  {
    url: 'https://storage.georgia.travel/images/jvari-monastery(1).webp',
    caption: 'Georgian Cultural Heritage',
  },
];

const History = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Discover Georgian History</h1>
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
              Georgian history is marked by a rich cultural heritage and architectural marvels. From ancient times, Georgian architecture has flourished, with landmarks like the Svetitskhoveli Cathedral in Mtskheta and the Narikala Fortress in Tbilisi standing as testaments to the country's past.
            </p>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <p className="mb-4">
              The historical sites of Georgia encompass a diverse range of periods and influences, reflecting its position as a crossroads of civilizations. From the cave cities of Vardzia to the medieval monasteries of Gelati, Georgia's cultural heritage is celebrated worldwide.
            </p>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <p className="mb-4">
              Georgian culture has been shaped by its interactions with neighboring empires, including the Byzantines, Persians, and Russians. These influences are evident in the art, literature, and religious practices that have evolved over centuries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
