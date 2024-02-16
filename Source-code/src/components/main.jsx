/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/main.css";
import Timer from './Timer';

export default function Main(){
    return(
         <section>
             <article className="section_clock">
                 <h1>NEXT SKINS IN!</h1>
                 <Timer />
             </article>
         </section>
    )
}