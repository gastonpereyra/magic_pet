import React from 'react';
import Section from './section/Section';

const acercaInfo = [
    {
        // image: "",
        title: "Milenarios",
        text: "Nuestra historia comienza milenios atrás, un grupo de familias se reunió para acordar proteger y estudiar criaturas fantasticas."
    },
    {
        
        title: "Globales",
        text: "Estamos presentes en todos los continentes, en cientos de paises y ciudades, listos y preparados para atender en cualquier momento."
    },
    {
        title: "Especialistas",
        text: "Nuestros profesionales son los mejores en su especialidad, estan en constante capacitación y aman con locura lo que hacen."
    },
    {
        
        title: "Responsables",
        text: "No solo cuidamos y protegemos a los animales mas vulnerables, también al ecosistema en el que viven y a la comunidad que pertenecen."
    },
    {
        
        title: "Ayuda Oficial",
        text: "Además de nuestra labor privada, proveemos ayuda oficial para la protección de parques nacionales, y atención médica veteriana."
    }
]

const InfoBlock = ({imageRoute=null,title='',text=''}) => {
    return (
        <div className="box">
            {imageRoute && <figure className="image is-64x64 is-image-center">
                <img src={imageRoute} alt="Block Card"/>
            </figure>}
            <div className="content">
                <p className="is-size-3"><u>{title}</u></p>
                <p className="is-size-4">{text}</p>
            </div>
        </div>
    )
}

const About = ({section="", color="primary"}) => {
    return (
        <section className="hero is-success is-fullheight-with-navbar" id="About">
            <div className="hero-body">
                <div className="container">
                    <h2 className="title    ">
                        ¿ Quienes Somos ? 
                    </h2>
                    <div className="columns is-multiline is-centered">
                        
                        { acercaInfo.map( (a,i) => (
                            <div className="column is-one-third has-text-centered" key={i}>
                                <InfoBlock imageRoute={a.image} title={a.title} text={a.text} />
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;