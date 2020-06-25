import React, {createContext, useState, useEffect} from "react";

const HeroDetailsContext = createContext();

export const HeroDetailProvider = props => {
    const [heroStats, setHeroStats] = useState([])

}