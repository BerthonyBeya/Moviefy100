import React from 'react';
import './Navbar.css';
import { appContext } from '../../../appContext/appContext';
import { useContext } from 'react';

const Navbar = () => {
    const { menu } = useContext(appContext);
    let navName = `Header__nav ${menu}`;
    
    return (
        <ul className={navName}>
            <li className="link"><a href="/home">Home</a></li>
            <li className="link"><a href="/movies">Movies</a></li>
            <li className="link"><a href="/series">Series</a></li>
            <li className="link"><a href="/about">About</a></li>
        </ul>
    )
};


export default Navbar;