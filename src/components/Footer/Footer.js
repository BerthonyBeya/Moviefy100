import React from 'react';
import './Footer.css';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer__socialmedia">
                <a href="https://github.com/BerthonyBeya" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://www.instagram.com/bthegreat2021/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </div>
            <p className="Footer__copyright">Berthony Beya<span>&copy;2021</span></p>
        </div>
    )
}


export default Footer;