import React from 'react';

const NavButton = ({color="primary", inverted=false, outlined=false, icon=null, name="", action=null}) => (
    <span className="navbar-item">
        <a className={`button is-${color} ${ inverted ? "is-inverted" : ""} ${ outlined ? "is-outlined" : ""}`} onClick={action}>
            {icon && <span className="icon">
                <i className={icon}></i>
            </span>}
            {name && <span>{name}</span>}
        </a>
    </span>
)

export default NavButton;