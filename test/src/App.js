import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./layout/Navbar";
import HeroDetails from "./components/heroes/HeroDetails";
import {HeroListProvider} from "./context/HeroListContext";

import Matches from "./components/Matches/Matches";
import MatchDetail from "./components/Matches/MatchDetail";
import {MatchProvider} from "./context/MatchContext";
import HeroList from "./components/heroes/HeroList";

function App() {
    return (
        <div className="background">
            <Router>
                <Navbar/>
                <HeroListProvider>
                    <Route exact path="/heroes" component={HeroList}/>
                </HeroListProvider>
                <Route exact path="/heroes/:heroName" component={HeroDetails}/>
                <MatchProvider>
                    <Route exact path="/matches" component={Matches}/>
                </MatchProvider>
                <Route exact path="/match/:id" component={MatchDetail}/>
            </Router>
        </div>
    )
}

export default App;
