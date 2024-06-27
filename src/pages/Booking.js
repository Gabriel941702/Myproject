import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
  const { place } = useParams();

 
  const encodedPlace = encodeURIComponent(place);

  
  const bookingUrl = `https://www.booking.com/searchresults.en.html?ss=${encodedPlace}&aid=303948&label=ge-*a_VRdeB*hmmbskAkxOBXQS553293383189:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-186621996:lp1007469:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9Yf5EcukO1MOGLSSAuId8ToA`;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Booking.com - Hotels in {place}</h1>
      <iframe
        src={bookingUrl}
        title={`Booking.com Hotels in ${place}`}
        width="100%"
        height="800px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Booking;
