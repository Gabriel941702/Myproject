import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Places from './pages/Places';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import History from './pages/History';
import Culture from './pages/Culture';
import { ThemeProvider } from './context/ThemeContext'; 

const App = () => (
  <ThemeProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking/:place" element={<Booking />} />
        <Route path="/history" element={<History />} />
        <Route path="/culture" element={<Culture />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;
