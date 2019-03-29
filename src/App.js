import React from 'react';
import Navbar from './components/Navbar';
import Presentation from './components/HeroPresentation';
import About from './components/sectionAbout';
import Stadistics from './components/sectionStadistics';
import Products from './components/sectionProducts';
import Profesionals from './components/sectionProffesionals';
import Comments from './components/sectionComments';
import Contact from './components/sectionContact';
import Footer  from './components/Footer';

// https://api.sheety.co/3d937c6d-cf04-4ad8-af9a-1a6c4f99c476
// https://api.sheety.co/3b8a7b2e-4d6d-422a-8f87-aa58060d6b4c


const App = () => {

  return (
    <>
      <Navbar />
      <Presentation />
      <About />
      <Stadistics />
      <Products />
      <Profesionals />
      <Comments />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
      


      




