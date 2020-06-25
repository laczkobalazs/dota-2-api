import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./layout/Navbar";
import Matches from "./components/Matches/Matches";
import MatchDetail from "./components/Matches/MatchDetail";


function App() {
  return (
      <div className="background">
          <Router>
              <Navbar/>
              <Route exact path="/matches" component={Matches}></Route>
              <Route exact path="/match/:id" component={MatchDetail}></Route>
          </Router>
      </div>
  );
}

export default App;