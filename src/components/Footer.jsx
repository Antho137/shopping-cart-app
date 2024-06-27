import React from 'react';

const Footer = () => {
	let today = new Date();
    let year = today.getFullYear();

    return (
        <div className='footer'>
            <p className='copyright'>Copyright &copy; <span className="year">{year}</span>&#160;  Shopping Cart &#160;</p>
        </div>
    );
}

export default Footer;