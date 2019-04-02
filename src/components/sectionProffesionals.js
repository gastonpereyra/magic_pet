import React from 'react';

const Profesionals = () => {
    return (
        <section className="hero is-success is-fullheight-with-navbar" id="Profesional">
            <div className="hero-body">
                <div className="container">
                    <p className="title">
                        Profesionales
                    </p>

                    <article className="media">
                    <figure className="media-left">
                        <p className="image is-64x64">
                        <img className="is-rounded" src="https://pickaface.net/gallery/avatar/myrosith51dfd4eada6e3.png" alt="Avatar"/>
                        </p>
                    </figure>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>Angeles Yoli</strong> <small>@AngieYoli</small>
                                    <br/>
                                        No sabes lo que es tomar café hasta que llegas y aprendes, es una experiencia religiosa, te cambia la vida, CREEME!
                                    <br/><b className="has-text-link">#Café101</b>
                                </p>
                            </div>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    )
}

export default Profesionals;