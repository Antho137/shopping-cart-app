import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Header = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className='navbar'>
            <div className='nav-container'>
                <div>
                    <NavLink to={"/"} className="nav-logo">
                        Shopping Cart
                        <i className="fas fa-code"></i>
                    </NavLink>
                </div> 
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <NavLink to="/about" className="nav-links" onClick={handleClick}>About</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/services" className="nav-links" onClick={handleClick}>Services</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/contact" className="nav-links" onClick={handleClick}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;