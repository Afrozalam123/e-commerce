import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Catalogue from './pages/Catalogue';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
