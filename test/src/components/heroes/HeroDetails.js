import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import HeroList from "./HeroList";
import axios from "axios";


function HeroDetails() {
    const [heroStats, setHeroStats] = useState([])
    const [loading, setLoading] = useState(true)


    let {heroName} = useParams()
    useEffect(() => {
        setLoading(true)
        axios.get("https://api.opendota.com/api/heroStats").then((resp) => {
            setLoading(false)
            setHeroStats(resp.data)
        })
        },[])

    return (
        <div>1</div>
    )
}

export default HeroDetails;
