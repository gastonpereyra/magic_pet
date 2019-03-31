import React from 'react';

const productos = [
    {
        image: "http://alternopolis.com/wp-content/uploads/2014/08/Impossible_bottles_canvas1.gif   ",
        title: "Atención Médica",
        message: "Atención 24hs, todo el año, en nuestras sedes o a domicilio.",
        price: "DEPENDE",
        link: "#Contacto",
        linkMessage: "Ver mas"
    },
    {
        image: "http://alternopolis.com/wp-content/uploads/2014/08/%C2%A9-Rafael-Varona-2.gif",
        title: "Entrenamiento",
        message: "En nuestras instalaciones entrenamos a sus animales para que no pierdan forma ni esplendor.",
        price: "$5400",
        link: "#Contacto",
        linkMessage: "Contactenos"
    },
    {
        image: "http://alternopolis.com/wp-content/uploads/2014/08/%C2%A9-Rafael-Varona-1.gif",
        title: "Rehabilitación",
        message: "Nuestros profesionales son especialistas en recuperar todo tipo de fauna al estado más optimo.",
        price: "10000",
        link: "#Contacto",
        linkMessage: "Comuniquese"
    },
    {
        image: "https://66.media.tumblr.com/d46ad1a21c96ad7f90fa0b3be9e46d59/tumblr_od0lr4Patz1v6ye9ro1_500.gif",
        title: "Adopción",
        message: "Conozca, hagase amigo y adopté. Muchos nuevos amigos lo estan esperando.",
        price: "GRATIS",
        link: "#Contacto",
        linkMessage: "Aqui"
    },
    {   
        image: "http://img1.joyreactor.com/pics/post/gif-pixel-art-dragon-5025079.gif",
        title: "Pasear",
        message: "Venga a pasear con su familia, conozca la fauna y flora de lugares que siempre soñó ver.",
        price: "5000",
        link: "#Contacto",
        linkMessage: "No se lo pierda!"
    }
    /*
    ,
    {
        image: "assets/",
        title: "",
        message: "",
        price: "",
        link: "",
        linkMessage: ""
    }
    */
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
            <footer className="card-footer has-background-dark">
                <a href={link} className="card-footer-item is-size-5 has-text-light">{linkMessage}</a>
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