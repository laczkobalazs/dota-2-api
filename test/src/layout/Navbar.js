import React from "react"
import {Link, Route} from "react-router-dom"
import HeroList from "../components/heroes/HeroList";

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Route path="/heroes" component={HeroList}/>
        </div>
    )
}

export default Navbar;
