import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./layout/Navbar";
import HeroDetails from "./components/heroes/HeroDetails"


function App() {
  return (
      <div className="background">
          <Router>
              <Navbar/>
              <Route path="/heroes/:heroName" component={HeroDetails}>

              </Route>
          </Router>

      </div>
  );
}

export default App;
