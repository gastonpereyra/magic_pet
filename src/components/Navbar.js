import React, {useState, useLayoutEffect} from 'react';
import Navegacion from './navbar/Navegacion';

const Navbar = ({color="primary", logoUrl="", links=[], changeColor=null, lanValue=[], changeLan=null }) => {

    const [navBarStyle, setNavBarStyle] = useState(false);

    useLayoutEffect( () => {
        window.addEventListener('scroll', () => {
          if (document.body.scrollTop > (window.innerHeight*0.75) || 
              document.documentElement.scrollTop > (window.innerHeight*0.75)) {
                setNavBarStyle(true)
          } else {
            setNavBarStyle(false)
          }
        });
      })

    return (
        <>
        <Navegacion color={color} logoUrl={logoUrl} links={links} lanValue={lanValue} changeLan={changeLan} changeColor={changeColor}/>
        <Navegacion color={color} logoUrl={logoUrl} links={links} lanValue={lanValue} changeLan={changeLan} changeColor={changeColor}fixed show={navBarStyle} />
        </>

    )
}

export default Navbar;