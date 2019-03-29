import React, {useState, useLayoutEffect} from 'react';

const $navBarStyle = 'navbar is-link';

const Navbar = () => {

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
        <nav className={navBarStyle} role="navigation" aria-label="main navigation">

            <div className="navbar-brand">
                <a className="navbar-item" href="#Home">
                    <img src="assets/icon-w.svg" width="28" height="28" alt="Company Logo"/>
                </a>

                <button className="navbar-burger burger" aria-label="menu" aria-expanded="false" onClick={() => setNaBarMenu(!navBarMenu)}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

        <div id="navbarBasicExample" className={`navbar-menu ${navBarMenu ? 'is-active' : ''}`}>
            <div className="navbar-start">
                <a className="navbar-item" href="#About">
                    Nosotros
                </a>
                <a className="navbar-item" href="#Training">
                    Entrenados
                </a>
                <a className="navbar-item" href="#Profesional">
                    Profesionales
                </a>
            </div>
            <div className="navbar-end">
                <a className="navbar-item" href="#Services">
                    Productos
                </a>
                <a className="navbar-item" href="#Comments">
                    Comentarios
                </a>
                <a className="navbar-item" href="#Contact">
                    Contacto
                </a>
            </div>
        </div>
      </nav>

    )
}

export default Navbar;