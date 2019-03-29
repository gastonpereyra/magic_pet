import React from 'react';

const acercaInfo = [
    {
        image: "assets/ani_kraken.png",
        title: "Comenzamos",
        text: "sdfasdfa sdfasd fasd fasd fasd fasd fas dfa sdf asd fasdf asdkf asdk fasdk fasdfasd fasd fas dfasdf asdf asdf asdf asdf asd fas df"
    },
    {
        image: "assets/ani_krake.png",
        title: "Comenzamos",
        text: "sdfasdfa sdfasd fasd fasd fasd fasd fas dfa sdf asd fasdf asdkf asdk fasdk fasdfasd fasd fas dfasdf asdf asdf asdf asdf asd fas df"
    },
    {
        title: "Comenzamos",
        text: "sdfasdfa sdfasd fasd fasd fasd fasd fas dfa sdf asd fasdf asdkf asdk fasdk fasdfasd fasd fas dfasdf asdf asdf asdf asdf asd fas df"
    },
    {
        image: "assets/ani_kraken.png",
        title: "Comenzamos",
        text: "sdfasdfa sdfasd fasd fasd fasd fasd fas dfa sdf asd fasdf asdkf asdk fasdk fasdfasd fasd fas dfasdf asdf asdf asdf asdf asd fas df"
    },
    {
        image: "assets/ani_krake.png",
        title: "Comenzamos",
        text: "sdfasdfa sdfasd fasd fasd fasd fasd fas dfa sdf asd fasdf asdkf asdk fasdk fasdfasd fasd fas dfasdf asdf asdf asdf asdf asd fas df"
    }
]

const InfoBlock = ({imageRoute=null,title='',text=''}) => {
    return (
        <>
            {imageRoute && <figure className="image is-64x64 is-image-center">
                <img src={imageRoute} alt="Block Card"/>
            </figure>}
            <div className="content">
                <p className="is-size-3"><u>{title}</u></p>
                <p className="is-size-4">{text}</p>
            </div>
        </>
    )
}

const About = () => {
    return (
        <section className="hero is-success is-fullheight-with-navbar" id="About">
            <div className="hero-body">
                <div className="container">
                    <h2 className="title    ">
                        ¿ Quienes Somos ? 
                    </h2>
                    <div className="columns is-multiline">
                        
                        { acercaInfo.map( (a,i) => (
                            <div className="column has-text-centered" key={i}>
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