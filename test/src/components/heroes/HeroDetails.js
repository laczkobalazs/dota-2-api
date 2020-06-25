import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import HeroList from "./HeroList";
import axios from "axios";


function HeroDetails() {
    const [heroStats, setHeroStats] = useState([])
    const [currentHero, setCurrentHero] = useState([])
    const [loading, setLoading] = useState(true)

    let {id} = useParams()
    useEffect(() => {
        setLoading(true)
        axios.get("https://api.opendota.com/api/heroStats").then((resp) => {
            setLoading(false)
            setHeroStats(resp.data)
            heroStats.map((hero) => {
                if (hero.name === ("npc_locale_hero_" + id)) {
                    setCurrentHero(hero)
                }
            })
        })
    }, [])

    console.log("allherostats: "+ heroStats)


    return (
        <>
            {console.log(currentHero)}
            <div>{currentHero.name}</div>
        </>
    )
}

export default HeroDetails;
