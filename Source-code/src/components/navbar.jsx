/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/navbar.css";

export default function Navbar() {
    return(
        <nav className="nav">
            <ol>
                 <li><a href="https://www.fortnite.com/" target="_blank">OFICIAL</a></li>
                 <li><a href="https://store.epicgames.com/en-US/" target="_blank">GAMES</a></li>
                 <li><a href="https://ar.linkedin.com/in/ignacioangelone" target="_blank">CONTACT</a></li>
             </ol>

             <a href="https://www.epicgames.com/site/es-ES/home" target="_blank" className="nav_img"><img src="assets/images/Logo-epicgames.webp" alt="logo de epic games" /></a>

             <ol>
                 <li><a href="https://ignacioangelone.github.io/Mariano-Fortnite/" target="_blank">HOME</a></li>
                 <li><a href="https://ignacioangelone.github.io/Mariano-Fortnite/" target="_blank">SHOP</a></li>
                 <li><a href="https://ignacioangelone.github.io/Mariano-Fortnite/" target="_blank">MAP</a></li>
            </ol>
        </nav>
    )
}