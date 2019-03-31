import React from 'react';

const productos = [
    {
        image: "assets/cover.gif",
        title: "TITULO",
        message: " asfadsfasd fdsajf asdfj sadfkas dfka sdfdkas fkasd faksd fdas",
        price: "400",
        link: "#Contacto",
        linkMessage: "Ver mas"
    },
    {
        image: "assets/cover.gif",
        title: "TITULO",
        message: " asfadsfasd fdsajf asdfj sadfkas dfka sdfdkas fkasd faksd fdas",
        price: "400",
        link: "#Contacto",
        linkMessage: "Ver mas"
    },
    {
        image: "assets/cover.gif",
        title: "TITULO",
        message: " asfadsfasd fdsajf asdfj sadfkas dfka sdfdkas fkasd faksd fdas",
        price: "400",
        link: "#Contacto",
        linkMessage: "Ver mas"
    }
];

const Carta = ({imagePath, title, message, price, linkMessage, link}) => {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={imagePath} alt="Card illustration"/>
                </figure>
            </div>
            <div className="card-content ">
                <div className="media">
                    <div className="media-left">
                        <a className="button is-warning is-inverted" href={link}>
                            <span className="icon">
                                <i className="fas fa-dollar-sign"></i>
                            </span>
                            <span>{price}</span>
                        </a>
                    </div>
                    <div className="media-content">
                        <p className="title is-3 has-text-dark">{title}</p>
                    </div>
                </div>
                <div className="content is-size-5 ">
                    {message}
                </div>
            </div>
            <footer className="card-footer ">
                <a href={link} className="card-footer-item is-size-5 ">{linkMessage}</a>
            </footer>
        </div>
    )
}

const Products = () => {
    return (
        <section className="hero is-info is-fullheight-with-navbar" id="Services">
            <div className="hero-body">
                <div className="container">
                    <p className="title">
                        ¿ Qué hacemos ?
                    </p>
                    <div className="columns is-multiline is-centered">
                        { productos.map((c,i) =>
                            (<div className="column is-one-third" key={i}>
                                <Carta imagePath={c.image} title={c.title} message={c.message} linkMessage={c.linkMessage} link={c.link} price={c.price}/>
                            </div>))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products;