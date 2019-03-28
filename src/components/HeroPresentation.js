import React from 'react';

const Presentation = () => {
    return (
        <section id="Home" className="hero is-primary is-fullheight-with-navbar has-background-presentation">
            <div className="hero-body">
                <div className="image-overlay"></div>
                <figure className="image image-back is-16by9">
                    <img src="assets/cover.gif" alt="Fondo"/>
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
    )
}

export default Presentation;