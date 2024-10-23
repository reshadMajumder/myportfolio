import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import About from './components/About';
import Projects from './components/Projects';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
// import CursorSparkle from './components/CursorSpacke';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Banner />
      <Skills />
      <Achievements />
      <About />
      <Projects />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;