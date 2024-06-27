import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const places = [
  { id: 1, name: "Tbilisi", description: "Capital city of Georgia with rich history and vibrant culture." },
  { id: 2, name: "Batumi", description: "A Black Sea resort and port city." },
  { id: 3, name: "Kutaisi", description: "Known for its historical sites and beautiful landscapes." },
  { id: 4, name: "Kakheti", description: "known for vineyards and scenic landscapes." },
  { id: 5, name: "Gori", description: "famous for historic sites and museums." },
  { id: 6, name: "Zugdidi", description: "known for its historical architecture and lush landscapes." }
];

const Places = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPlaces = places.filter(place =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-300">Places to Explore</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search places..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlaces.map(place => (
          <div key={place.id} className="relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group">
            <Link to={`https://en.wikipedia.org/wiki/${place.name.toLowerCase()}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/${place.name.toLowerCase()}.jpg`}
                alt={place.name}
                className="w-full h-64 object-cover group-hover:opacity-75 transition duration-300"
              />
            </Link>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-200">{place.name}</h2>
              <p className="text-gray-700 dark:text-gray-400">{place.description}</p>
              <Link
                to={`/booking/${place.name}`}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 mt-4 block text-center"
              >
                Book Hotels
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Places;
