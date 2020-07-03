import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MatchContext = createContext();

export const MatchProvider = (props) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios.get("https://api.opendota.com/api/proMatches").then((result) => {
      console.log("Fetching pro matches");
      setMatches(result.data);
      console.log(result.data);
    });
  }, []);

  return (
    <MatchContext.Provider value={matches}>
      {props.children}
    </MatchContext.Provider>
  );
};
