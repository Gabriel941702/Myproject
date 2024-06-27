import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Georgia Travel Guide. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
