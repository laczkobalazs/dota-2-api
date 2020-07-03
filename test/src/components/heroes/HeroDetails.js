import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import HeroList from "./HeroList";
import axios from "axios";
import { HeroListContext } from "../../context/HeroListContext";

function HeroDetails() {
  const [currentHero, setCurrentHero] = useState([]);
  const { filterForHeroWithId } = useContext(HeroListContext);
  let { id } = useParams();
  useEffect(() => {
    setCurrentHero(filterForHeroWithId(id));
  }, []);

  return (
    <>
      <div>{currentHero.name}</div>
    </>
  );
}

export default HeroDetails;
