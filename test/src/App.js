import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./layout/Navbar";


function App() {
  return (
      <div className="background">
          <Router>
              <Navbar/>
          </Router>
      </div>
  );
}

export default App;