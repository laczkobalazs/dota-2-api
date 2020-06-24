import React from "react"
import {Link, Route} from "react-router-dom"
import HeroList from "../components/heroes/HeroList";

function Navbar() {
    const headerNavbarStyle = {
        background: '#242F39',
        position: 'relative',
        verticalAlign: 'top',
        fontSize: '14px',
    }
    return (
        <div>
            <div style={headerNavbarStyle} className="navbar">
                <Link to="/">Home</Link>
                <Link to="/heroes">Heroes</Link>
                <Route path="/heroes" component={HeroList}/>
            </div>
        </div>
    )
}

export default Navbar;
