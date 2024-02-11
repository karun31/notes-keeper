import React from "react";

function Footer(){
    const currentYear = new Date().getFullYear();
    return (
        <footer><p>Copyright © {currentYear} | Developed with ❤️ by Karun </p></footer>
        
    );
}

export default Footer;
