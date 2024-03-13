import React from "react";
import logo from "./utlis/Vision_Logo 1.png";
import insta from "./utlis/insta.png";
import linkedin from "./utlis/linkedIn.png";

const Footer = () => {
    return (
        <div className="footer" style={{ backgroundColor: 'black', padding: '20px', textAlign: 'center', color: 'white' }}>
            <div className="Logo" style={{ marginBottom: '20px' }}>
                <img src={logo} alt="Vision Logo" style={{ maxWidth: '200px' }} />
            </div>
            <div className="Socials">
                <a href="https://www.instagram.com/_vision.assist" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
                    <img src={insta} alt="Instagram" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', padding: '5px' }} />
                </a>
                <a href="https://www.linkedin.com/company/vision-assist24/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', padding: '5px' }} />
                </a>
            </div>
        </div>
    );
};

export default Footer;
