import React from 'react';
import { motion } from 'framer-motion';

const PlaceCard = ({ place }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <img src={place.image} alt={place.name} className="w-full h-48 object-cover"/>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-blue-600">{place.name}</h3>
      <p className="mt-2 text-gray-600">{place.description}</p>
    </div>
  </motion.div>
);

export default PlaceCard;
