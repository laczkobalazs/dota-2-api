import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import HeroDetails from "./components/heroes/HeroDetails";
import { HeroListProvider } from "./context/HeroListContext";

import Matches from "./components/Matches/Matches";
import MatchDetail from "./components/Matches/MatchDetail";
import { MatchProvider } from "./context/MatchContext";
import HeroList from "./components/heroes/HeroList";

function App() {
  return (
    <div className="background">
      <HeroListProvider>
        <MatchProvider>
          <Router>
            <Navbar />
            <Route exact path="/heroes" component={HeroList} />
            <Route exact path="/heroes/:heroName" component={HeroDetails} />
            <Route exact path="/matches" component={Matches} />
            <Route exact path="/match/:id" component={MatchDetail} />
          </Router>
        </MatchProvider>
      </HeroListProvider>
    </div>
  );
}

export default App;
