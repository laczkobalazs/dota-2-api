import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const HeroListContext = createContext();

export const HeroListProvider = (props) => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    axios.get("https://api.opendota.com/api/heroes").then((response) => {
      setHeroes(response.data);
    });
  }, []);

  const filterForHeroWithId = (id) => {
    return heroes.find((hero) => hero.id === id);
  };

  return (
    <HeroListContext.Provider value={{ heroes, filterForHeroWithId }}>
      {props.children}
    </HeroListContext.Provider>
  );
};
