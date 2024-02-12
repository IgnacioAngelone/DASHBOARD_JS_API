/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/navbar.css";

export default function Navbar() {
    return(
        <nav className="nav">
            <ol>
                 <li><a href="#home">OFICIAL</a></li>
                 <li><a href="#about">GAMES</a></li>
                 <li><a href="#contact">CONTACT</a></li>
             </ol>

             <a href="" className="nav_img"><img src="assets/images/Logo-epic.webp" alt="" /></a>

             <ol>
                 <li><a href="#home">HOME</a></li>
                 <li><a href="#about">SHOP</a></li>
                 <li><a href="#contact">MAP</a></li>
            </ol>
        </nav>
    )
}