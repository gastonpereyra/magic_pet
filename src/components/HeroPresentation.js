import React from 'react';

const Presentation = ({name="", description="", logoUrl="", backUrl="", color="primary" }) => {
    return (
        <section id="Home" className={`hero is-${color} is-fullheight-with-navbar has-background-presentation`}>
            <div className="hero-body">
                <div className="image-overlay"></div>
                <figure className="image image-back is-16by9">
                    <img src={backUrl} alt="Back Logo"/>
                </figure> 
                <div className="container text-overlay">
                    <figure className="image is-128x128 is-pulled-left">
                        <img src={logoUrl} alt="Company Logo"/>
                    </figure>
                    <h1 className="title is-1">
                        <b>{name}</b>
                    </h1>
                    <h2 className="subtitle is-3">{description}</h2>
                </div>
            </div>
        </section>
    )
}

export default Presentation;