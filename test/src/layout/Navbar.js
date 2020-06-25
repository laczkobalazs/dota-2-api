import React from "react";
import {Link, Route} from "react-router-dom"
import HeroList from "../components/heroes/HeroList";

function Navbar() {
    const headerNavbarStyle = {
        background: '#242F39',
        position: 'relative',
        verticalAlign: 'top',
        fontSize: '14px',
        height: '30px'
    }

    return (
        <div className="navbar">
            <Link to="/"><img style={{maxHeight: "30px"}} src="https://cdn.onlinewebfonts.com/svg/img_348221.png" alt="Home"/></Link>
            <Link to="/matches"> Matches </Link>
            <Link to="/heroes">Heroes</Link>
        </div>
    )
}

export default Navbar;
