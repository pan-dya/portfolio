import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Timeline from './components/Timeline/timeline';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <Timeline />
        <Contact />
      </div>
    </>
  );
};

export default App;
