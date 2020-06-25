import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./layout/Navbar";
import Matches from "./components/Matches/Matches";
import MatchDetail from "./components/Matches/MatchDetail";
import {MatchProvider} from "./context/MatchContext";

function App() {
    return (
        <div className="background">
            <Router>
                <Navbar/>
                <MatchProvider>
                    <Route exact path="/matches" component={Matches}></Route>
                </MatchProvider>
                <Route exact path="/match/:id" component={MatchDetail}></Route>
            </Router>
        </div>
    );
}

export default App;