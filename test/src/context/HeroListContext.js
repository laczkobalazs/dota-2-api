import React, {useState, createContext, useEffect} from "react";
import axios from "axios";

export const HeroListContext = createContext();

export const HeroListProvider = props => {
        const [heroes, setHeroes] = useState([]);

        useEffect(() => {
            axios.get("https://api.opendota.com/api/heroes")
                .then((response) => {
                    setHeroes(response.data)
                })
        }, [])

    return (
        <HeroListContext.Provider value={heroes}>
            {props.children}
        </HeroListContext.Provider>
    )
}
