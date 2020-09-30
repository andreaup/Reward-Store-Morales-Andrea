import React from 'react';
import cover from '../images/header-x1.png';

const Header = () => {
    return(
        <div className='header'>
            <img src={cover} alt='cover'></img>
            <h1>Electronics</h1>
        </div>
    );
}

export default Header;