/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/template-shop.css";
import Navbar from "../components/navbar";
import Head from "../components/head";
import Main from "../components/main";
import Footer from "../components/foot";

export default function Shop() {
    return (
        <div>
             <Navbar />
             <Head />
             <Main />
             <Footer />
        </div>
    );
}
