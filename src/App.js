import React, {useState, useLayoutEffect} from 'react';
// https://api.sheety.co/3d937c6d-cf04-4ad8-af9a-1a6c4f99c476
// https://api.sheety.co/3b8a7b2e-4d6d-422a-8f87-aa58060d6b4c

const $navBarStyle = 'navbar is-primary'

const App = () => {

  const [navBarStyle, setNavBarStyle] = useState($navBarStyle);
  const [navBarMenu, setNaBarMenu]  = useState(false);

  useLayoutEffect( () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > (window.innerHeight*0.75) || 
          document.documentElement.scrollTop > (window.innerHeight*0.75)) {
            setNavBarStyle($navBarStyle+' is-fixed-top')
      } else {
        setNavBarStyle($navBarStyle)
      }
    });
  })
  return (
    <>
      <nav className={navBarStyle} role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="assets/icon-w.svg" width="28" height="28" alt="Company"/>
          </a>

          <button className="navbar-burger burger" aria-label="menu" aria-expanded="false" onClick={() => setNaBarMenu(!navBarMenu)}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${navBarMenu ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <a className="navbar-item" href="https://bulma.io">
              Home
            </a>

            <a className="navbar-item" href="#info">
              Documentation
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="https://bulma.io">
                More
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item" href="https://bulma.io">
                  About
                </a>
                <a className="navbar-item" href="https://bulma.io">
                  Jobs
                </a>
                <a className="navbar-item" href="https://bulma.io">
                  Contact
                </a>
                <hr className="navbar-divider"/>
                <a className="navbar-item" href="https://bulma.io">
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary" href="https://bulma.io">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light" href="https://bulma.io">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="hero is-primary is-fullheight-with-navbar has-background-presentation">
        <div className="hero-body">
          <div className="image-overlay"></div>
          <figure className="image image-back is-16by9">
            <img src="assets/cover.png" alt="Fondo"/>
          </figure> 
          <div className="container text-overlay">
            <figure className="image is-128x128 is-pulled-left">
              <img src="assets/icon-w.svg" alt="Company"/>
            </figure>
            <h1 className="title is-1">
              <b>Magic Vet</b>
            </h1>
            <h2 className="subtitle is-3">Un ser Mágico te esta esperando.</h2>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h1 className="title">Section</h1>
          <h2 className="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
            <nav className="level box">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Tweets</p>
            <p className="title">3,456</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Following</p>
            <p className="title">123</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Followers</p>
            <p className="title">456K</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Likes</p>
            <p className="title">789</p>
          </div>
        </div>
      </nav>
          </h2>
        </div>
      </section>

      <section className="hero is-warning is-fullheight-with-navbar" id="info">
        <div className="hero-body">
          <div className="container">
            <p className="title">
              Fullheight hero with navbar
            </p>
          </div>
        </div>
      </section>

      

      <section className="hero is-link is-fullheight-with-navbar" id="info">
        <div className="hero-body">
          <div className="container">
            <p className="title">
              Fullheight hero with navbar
            </p>
          </div>
        </div>
      </section>

      <section className="hero is-danger is-fullheight-with-navbar" id="info">
        <div className="hero-body">
          <div className="container">
            <p className="title">
              Fullheight hero with navbar
            </p>
          </div>
        </div>
      </section>

      <section className="hero is-warning is-fullheight-with-navbar" id="info">
        <div className="hero-body">
          <div className="container">
            <p className="title">
              Fullheight hero with navbar
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
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
