import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./layout/Navbar";
import HeroDetails from "./components/heroes/HeroDetails";
import {HeroListProvider} from "./context/HeroListContext";


function App() {
    return (
        <div className="background">
            <Router>
                <HeroListProvider>


                    <Navbar/>
                    <Route path="/heroes/:heroName" component={HeroDetails}>

                    </Route>
                </HeroListProvider>
            </Router>

        </div>
    );
}

export default App;
