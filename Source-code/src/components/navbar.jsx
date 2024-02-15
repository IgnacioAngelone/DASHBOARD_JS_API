/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/navbar.css";

export default function Navbar() {
    return(
        <nav className="nav">
            <ol>
                 <li><a href="https://www.fortnite.com/">OFICIAL</a></li>
                 <li><a href="https://store.epicgames.com/en-US/">GAMES</a></li>
                 <li><a href="https://ar.linkedin.com/in/ignacioangelone">CONTACT</a></li>
             </ol>

             <a href="https://www.epicgames.com/site/es-ES/home" target="_blank" className="nav_img"><img src="assets/images/Logo-epicpng.png" alt="logo de epic games" /></a>

             <ol>
                 <li><a href="https://ignacioangelone.github.io/Mariano-Fortnite/">HOME</a></li>
                 <li><a href="https://ignacioangelone.github.io/Mariano-Fortnite/">SHOP</a></li>
                 <li><a href="https://ignacioangelone.github.io/Mariano-Fortnite/">MAP</a></li>
            </ol>
        </nav>
    )
}