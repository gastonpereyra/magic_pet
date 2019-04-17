import React from 'react';

const Section = ({section="", color="primary", children}) => {
    return (
        <section className={`hero is-${color} is-fullheight-with-navbar`} id={section}>
            <div className="hero-body">
                <div className="container">
                    <h2 className="title    ">
                        {section}
                    </h2>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default Section;