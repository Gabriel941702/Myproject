import React from 'react';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

const images = [
  'https://georgianjournal.ge/media/images/georgianews/2018/july/discover_georgia/jvari_monastery_.jpg',
  'https://images.saymedia-content.com/.image/t_share/MTc1MTE4MDk4OTIzODU3NzMy/top-12-places-to-visit-in-georgia.jpg',
  'https://adm.dookinternational.com/dook/images/country/85QOf1cX1620388291.jpg',
  'https://georgianjournal.ge/media/images/georgianews/2018/july/discover_georgia/sakartvelo_georgia_20188.jpg'
];

const articles = [
  {
    title: "Discover the History",
    content: "Georgia is a country with a rich history that spans centuries. Explore ancient landmarks and learn about its fascinating past.",
    link: "/src/History"
  },
  {
    title: "Experience the Culture",
    content: "Immerse yourself in the vibrant culture of Georgia. From traditional dances to delicious cuisine, there's so much to enjoy.",
    link: "/Culture"
  },
  {
    title: "Adventure Awaits",
    content: "Whether it's hiking in the mountains or relaxing by the Black Sea, Georgia offers adventures for every traveler.",
    link: "/Places"
  }
];

const Home = () => (
  <div className="relative">
    <Carousel images={images} />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-white mb-4 text-center">Welcome to Georgia Travel Guide</h1>
      <div className="container mx-auto p-6 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <a key={index} href={article.link} className="bg-transparent text-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
              <p>{article.content}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
