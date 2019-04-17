import React from 'react';

const NavLink = ({section='SOME'}) => (
    <a className="navbar-item" href={`#${section}`}>
        {section}
    </a>
)

export default NavLink;