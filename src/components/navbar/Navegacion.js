import React, {useState} from 'react';
import NavLink from './NavLinks';
import NavButton from './navButton';

const Navegacion = ({color="primary", logoUrl="", links=[], changeColor=null, lanValue=[], changeLan=null, fixed=false, show=true}) => {

    const [navBarMenu, setNaBarMenu]  = useState(false);

    return (
        <nav className={`navbar is-${color} ${fixed ? 'is-fixed-top' : ""} ${!show ? 'is-invisible' : ''}`} role="navigation" aria-label="main navigation">

            <div className="navbar-brand">
                { logoUrl &&
                    <a className="navbar-item" href="#">
                        <img src={logoUrl} width="28" height="28" alt="Company Logo"/>
                    </a>}

                <button className="navbar-burger burger" aria-label="menu" aria-expanded="false" onClick={() => setNaBarMenu(!navBarMenu)}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

        <div id="navbarBasicExample" className={`navbar-menu ${navBarMenu ? 'is-active' : ''}`}>
            <div className="navbar-start">
                {links.map( (item, i) => (
                    <NavLink section={item} key={i}/>
                )) }
            </div>
            <div className="navbar-end">
                <NavButton icon="fas fa-lightbulb" action={changeColor}/>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                    <span className="icon">
                        <i className="fas fa-flag"></i>
                    </span>
                </a>

                <div className="navbar-dropdown">
                    {lanValue.map( (item, i) => (
                        <NavButton name={item} key={i} action={() => changeLan(item)}/>
                    )) }
                </div>
            </div>
        </div>
      </nav>

    )
}

export default Navegacion;