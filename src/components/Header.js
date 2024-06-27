import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`bg-blue-600 dark:bg-gray-800 text-white p-4 shadow-md ${isMenuOpen ? 'pb-12' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">Georgia Travel Guide</Link>
        </div>
        <div className="flex items-center">
          <nav className="space-x-4 hidden md:flex">
            <Link to="/places" className="hover:underline">Places</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </nav>
          <label htmlFor="theme-toggle" className="ml-4 inline-flex items-center cursor-pointer">
            <span className="mr-2 text-sm">{theme === 'dark' ? '🌙' : '☀️'}</span>
            <div className="relative">
              <input
                type="checkbox"
                id="theme-toggle"
                className="sr-only"
                checked={theme === 'dark'}
                onChange={toggleTheme}
              />
              <div className="block bg-gray-600 w-10 h-6 rounded-full"></div>
              <div
                className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${
                  theme === 'dark' ? 'transform translate-x-full bg-yellow-500' : ''
                }`}
              ></div>
            </div>
          </label>
        </div>
        <div className="md:hidden">
          <button onClick={handleMenuToggle} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav id="menu" className="space-y-2 px-2 py-4">
            <Link to="/places" className="block hover:underline">Places</Link>
            <Link to="/contact" className="block hover:underline">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
