import React, {useState} from 'react';

const personas = [
    {
        image: "https://pickaface.net/gallery/avatar/myrosith51dfd4eada6e3.png",
        name: "Juan Perez",
        title: "Médico",
        nation: "Mexico",
        local: "Caribe",
        comment: "Nada es mejor que ver la alegria de cuando vuelven a su hogar sanos."
    },
    {
        image: "https://pickaface.net/gallery/avatar/Opi51bed90ec4a4b.png",
        name: "Roberto Jerez",
        title: "Rescatista",
        nation: "España",
        local: "Europa-Oeste",
        comment: "Cuando suena la alarma pienso que estoy salvando a uno de mi familia."
    },
    {
        image: "https://pickaface.net/gallery/avatar/judycsmosh521a551b604bf.png",
        name: "Alex Smith",
        title: "Guia",
        nation: "Sudafrica",
        local: "Africa-Sur",
        comment: "Hay que dejar que todo fluya, y la naturaleza te va a sorprender."
    },
    {
        image: "https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png",
        name: "Steve Work",
        title: "Tecnico",
        nation: "EEUU",
        local: "EEUU",
        comment: "Hay que innovar para que las herramientas del staff mejoren dia a dia."
    },
    {
        image: "https://pickaface.net/gallery/avatar/Opi51c74d6edb145.png",
        name: "Jurgen von Buff",
        title: "Entrenador",
        nation: "Belgica",
        local: "Europa-2",
        comment: "Los entreno para que vuelven a su hogar felices."
    },
    {
        image: "https://pickaface.net/gallery/avatar/HalcyonicBlues51d76e22316fb.png",
        name: "Martin Perez",
        title: "Guardia",
        nation: "Perú",
        local: "Sudamerica Pacifico",
        comment: "Vigilar que todo este en armonia es duro pero necesario."
    },  
    {
        image: "https://pickaface.net/gallery/avatar/Opi51e65b61dcd54.png",
        name: "Miyaki Satamoto",
        title: "Médico",
        nation: "Japón",
        local: "Asia Oriental",
        comment: "Cada vida salvada es como salvarme a mí."
    },
    {
        image: "https://pickaface.net/gallery/avatar/Opi51c74dfa1fef6.png",
        name: "Ivan Danke",
        title: "Voluntario",
        nation: "Noruega",
        local: "Artico",
        comment: "Esto no es trabajo para mí, es pura pasión."
    },
    {
        image: "https://pickaface.net/gallery/avatar/Opi51c74ead38850.png",
        name: "Logan Wolf",
        title: "Gerente",
        nation: "Australia",
        local: "Oceania",
        comment: "Nuestro trabajo es ser invisibles e infalibles."
    }
];

const Pagination = ({count, max, actual, changePage, children}) => {

    return (
        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                <button className="pagination-previous button is-rounded is-warning" onClick={() => changePage( actual>0 ? actual-count : max-1)}>
                    <span className="icon">
                        <i className="fas fa-chevron-circle-left "></i>
                    </span>
                </button>
                <button className="pagination-next button is-rounded is-warning" onClick={() => changePage(actual+count < max ? actual+count : 0)}>
                    <span className="icon">
                        <i className="fas fa-chevron-circle-right "></i>
                    </span>
                </button>
                <ul className="pagination-list columns">
                    <div className="column is-two-third">
                        {children}
                    </div>
                    
                </ul>
            </nav>
    )
}

const Ficha = ({actual}) => {
    return (
        <article className="media">
            <figure className="media-left">
                <p className="image is-128x128">
                    <img className="is-rounded" src={actual.image} alt="Avatar"/>
                </p>
            </figure>
            <div className="media-content">
                <div className="content is-large">
                    <h1 className="has-text-light">{actual.name}</h1>
                    <div className="tags has-addons">
                        <span className="tag is-large is-link">Título</span>
                        <span className="tag is-large is-primary">{actual.name}</span>
                    </div>
                    <div className="tags has-addons">
                        <span className="tag is-large is-link">Nacionalidad</span>
                        <span className="tag is-large is-primary">{actual.nation}</span>
                    </div>
                    <div className="tags has-addons">
                        <span className="tag is-large is-link">Sede</span>
                        <span className="tag is-large is-primary">{actual.local}</span>
                    </div>
                    <div className="tags has-addons">
                        <span className="tag is-large is-link">Comentario</span>
                    </div>
                    {actual.comment}<br/>
                </div>
            </div>
        </article>
    )
}

const Profesionals = () => {

    const count = 5;
    const [page, setPage] = useState(0);
    let $personas = personas.map((p,i) => (
        <div className="column auto" key={i}>
            <figure className="image is-64x64" onClick={() => setPage(i)}>
                <img className="is-rounded" src={p.image} alt="Avatar"/>
            </figure>
        </div>
    ))

    return (
        <section className="hero is-success is-fullheight-with-navbar" id="Profesional">
            <div className="hero-body">
                <div className="container">
                    <p className="title">
                        Profesionales
                    </p>
                    <div className="columns is-multiline is-centered">
                        <div className="column is-three-quarters">
                            <div className="columns is-multiline is-mobile is-gapless">
                                {$personas}
                            </div>
                        </div>
                        
                        <div className="column is-three-quarters">
                            <Ficha actual={personas[page]} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profesionals;