import React from 'react';
import Navbar from './components/Navbar';
import Presentation from './components/HeroPresentation';
import Stadistics from './components/sectionStadistics';

// https://api.sheety.co/3d937c6d-cf04-4ad8-af9a-1a6c4f99c476
// https://api.sheety.co/3b8a7b2e-4d6d-422a-8f87-aa58060d6b4c


const App = () => {

  return (
    <>
      <Navbar />
      <Presentation />
      <section className="hero is-success is-fullheight-with-navbar" id="About">
        <div className="hero-body">
          <div className="container">
            <h2 className="title">
              ¿ Quienes Somos ? 
            </h2>
          </div>
        </div>
      </section>
      <Stadistics />
      <section className="hero is-info is-fullheight-with-navbar" id="Services">
        <div className="hero-body">
          <div className="container">
            <p className="title">
              ¿ Qué hacemos ?
            </p>
          </div>
        </div>
      </section>
      <section className="hero is-success is-fullheight-with-navbar" id="Personal">
        <div className="hero-body">
          <div className="container">
            <p className="title">
              Profesionales
            </p>
          </div>
        </div>
      </section>
      <section className="hero is-info is-fullheight-with-navbar" id="Comments">
        <div className="hero-body">
          <div className="container">
            <p className="title">
              Comentarios
            </p>
          </div>
        </div>
      </section>
      <section className="hero is-success is-fullheight-with-navbar" id="Contact">
        <div className="hero-body">
          <div className="container">
            <p className="title">
              Contacto
            </p>
          </div>
        </div>
      </section>
      <footer className="footer has-background-link">
        <div className="content has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
      


      




