import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Presentation from './components/HeroPresentation';
import About from './components/sectionAbout';
import Stadistics from './components/sectionStadistics';
import Products from './components/sectionProducts';
import Profesionals from './components/sectionProffesionals';
import Comments from './components/sectionComments';
import Contact from './components/sectionContact';
import Footer  from './components/Footer';
import Section from './components/section/Section';

const a= "https://api.sheety.co/3d937c6d-cf04-4ad8-af9a-1a6c4f99c476"
// https://api.sheety.co/3b8a7b2e-4d6d-422a-8f87-aa58060d6b4c

const PAGE_INFO = {
  es: [ "Magic Vet", "Un ser mágico te esta esperando!"],
  en: [ "Magic Vet", "A magical creature is waiting for you!"]
}

const PAGE_SECTIONS = {
  es: ["Quienes Somos?", "Servicios", "Comentarios", "Contacto"],
  en: ["Who we are?", "Service", "Comments", "Contacts"]
}




const App = () => {
  
  const [lan, setLan] = useState("es");
  const [darkColor, setDarkColor] = useState(false);

  return (
    <>
      <Navbar color={darkColor ? "dark" : "primary"} changeColor={() => setDarkColor(!darkColor)} logoUrl="assets/icon-w.svg" links={PAGE_SECTIONS[lan]} lanValue={Object.keys(PAGE_SECTIONS)} changeLan={setLan}/>
      <Presentation color={darkColor ? "dark" : "primary"} logoUrl="assets/icon-w.svg" backUrl="assets/cover.gif" name={PAGE_INFO[lan][0]} description={PAGE_INFO[lan][1]}/>
      {PAGE_SECTIONS[lan].map( (s,i) => <Section color={darkColor ? "dark" : "primary"} section={s} key={i}/>)}
      <Footer />
    </>
  );
}

export default App;
      


      




