import React from 'react';

const Stadistics = () => {
    return (
        <section id="Training" className="section is-medium has-background-success">
            <div className="container">
                <h1 className="title has-text-light">Entrenados</h1>
                <h2 className="subtitle has-text-light">
                    En nuestros centros de entrenamientos ya han pasado esta cantidad de criaturas  
                </h2>
                <nav className="level box">
                    <div className="level-item has-text-centered">
                        <div>
                            <figure className="image is-64x64 is-pulled-left">
                                <img src="assets/ani_pegasus.png" alt="Company"/>
                            </figure>
                            <p className="heading">Pegasos</p>
                            <p className="title">13</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <figure className="image is-64x64 is-pulled-left">
                                <img src="assets/ani_kraken.png" alt="Company"/>
                            </figure>
                            <p className="heading">Krakens</p>
                            <p className="title">3</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <figure className="image is-64x64 is-pulled-left">
                                <img src="assets/ani_dragon.png" alt="Company"/>
                            </figure>
                            <p className="heading">Dragones</p>
                            <p className="title">10</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <figure className="image is-64x64 is-pulled-left">
                                <img src="assets/ani_phoenix.png" alt="Company"/>
                            </figure>
                            <p className="heading">Fenixs</p>
                            <p className="title">23</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <figure className="image is-64x64 is-pulled-left">
                                <img src="assets/ani_griffin.png" alt="Company"/>
                            </figure>
                            <p className="heading">Grifos</p>
                            <p className="title">33</p>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Stadistics;