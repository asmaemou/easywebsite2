import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

// import { useTranslation, I18nextProvider } from 'react-i18next';
// import i18n from './i18n'; // Import your i18n configuration

function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Footer/>
      </Routes> 
      <Footer/>
    </>
  );
}
export default App;