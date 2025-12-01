import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaImdb } from 'react-icons/fa';
import './SocialLinks.css'; // Assuming you will create a CSS file for styling

const SocialLinks = () => {
    return (
        <div className="social-links">
            <a href="https://www.instagram.com/ramkumar_dir/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
           
            <a href="https://x.com/ImRamkumar_B" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
            </a>
            
        </div>
    );
};

export default SocialLinks;