import React from 'react';

const Footer = () => {
    return (
    <footer className="footer has-background-dark">
      <div className="content has-text-centered">

        <div className="title is-size-5 has-text-light" href="#Home">
            <a href="#Home">
                <img src="assets/icon-w.svg" width="28" height="28" alt="Company Logo"/>
            </a>
        </div>
        <p className="has-text-light">
          Copyright 2019. Todos los datos proporcionados en esta página son falsos, inventados, cualquier similitud es pura coincidencia. Solo a modo de Ejemplo y demostración.
        </p>
        
        <div className="buttons is-centered">
          <a className="button is-dark is-outlined is-inverted" href="https://github.com/gastonpereyra" target="_blank" rel="noopener noreferrer" title="Autor">
            <span className="icon">
              <i className="fab fa-github"></i>
            </span>
            <span>Gaston Pereyra</span>
          </a>
          <a className="button is-link is-outlined" href="https://www.facebook.com/gaston.pereyra.1806" target="_blank" rel="noopener noreferrer" title="Autor en Facebook">
            <span className="icon">
              <i className="fab fa-facebook"></i>
            </span>
          </a> 
          <a className="button is-info is-outlined" href="https://twitter.com/gastonpereyra" target="_blank" rel="noopener noreferrer" title="Autor en Twtitter">
            <span className="icon">
              <i className="fab fa-twitter"></i>
            </span>
          </a>
          <a className="button is-link is-outlined" href="https://www.linkedin.com/in/gaston-pereyra/" target="_blank" rel="noopener noreferrer" title="Autor en linkedin">
            <span className="icon">
              <i className="fab fa-linkedin"></i>
            </span>
          </a>
        </div>

        <div className="buttons is-centered">
          <a className="button is-primary is-outlined is-rounded" href="https://bulma.io/" target="_blank" rel="noopener noreferrer" title="Hecho con Bulma">
            <span className="icon">
              <i className="fab fa-blogger-b"></i>
            </span>
            <span>Bulma</span>
          </a>
          <a className="button is-danger is-outlined is-rounded" href="https://www.w3.org/TR/html5/" target="_blank" rel="noopener noreferrer" title="Hecho con HTML5">
            <span className="icon">
              <i className="fab fa-html5"></i>
            </span>
          </a> 
          <a className="button is-success is-outlined is-rounded" href="https://www.w3.org/Style/CSS/" ttarget="_blank" rel="noopener noreferrer" itle="Hecho con CSS3">
            <span className="icon">
              <i className="fab fa-css3"></i>
            </span>
          </a> 
          <a className="button is-warning is-outlined is-rounded" href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" title="Hecho con Javascript">
            <span className="icon">
              <i className="fab fa-js"></i>
            </span>
          </a>
          <a className="button is-info is-outlined is-rounded" href="https://react.org" target="_blank" rel="noopener noreferrer" title="Hecho con React">
            <span className="icon">
              <i className="fab fa-react fa-spin"></i>
            </span>
          </a>
          <a className="button is-dark is-outlined is-inverted is-rounded" href="https://github.com/gastonpereyra/magic_pet" target="_blank" rel="noopener noreferrer" title="Repositorio en Github">
            <span className="icon">
              <i className="fab fa-github"></i>
            </span>
          </a>
          <a className="button is-info is-outlined is-rounded" href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer" title="Iconos de Font Awesome">
            <span className="icon">
              <i className="fab fa-font-awesome"></i>
            </span>
          </a>
        </div>
      </div>
    </footer>
    )
}

export default Footer;