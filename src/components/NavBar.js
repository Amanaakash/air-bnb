import React from "react"
import logo from "../img/logo.png";

export default function NavBar(){
    return(
        <nav className="navBar">
            <img src={logo} className="logo" alt="logo"/>
        </nav>
    )
}