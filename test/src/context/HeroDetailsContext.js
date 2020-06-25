import React, {createContext, useState, useEffect} from "react";
import axios from "axios";

export const HeroDetailsContext = createContext();

export const HeroDetailProvider = props => {
    const [heroStats, setHeroStats] = useState([])
    useEffect(() => {
        axios.get("https://api.opendota.com/api/heroStats").then((response) => {
            setHeroStats(response.data)
        })
    }, [])

    return (
        <HeroDetailsContext.Provider value={heroStats}>
            {props.children}
        </HeroDetailsContext.Provider>
    )
}
