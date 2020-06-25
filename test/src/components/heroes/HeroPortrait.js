import React, {useEffect, useState} from "react";
import {AxiosInstance as axios} from "axios";

function HeroPortrait({ hero }) {
    const  heroImgUrlStart = "https://api.opendota.com/apps/dota2/images/heroes/"

    function getSmallHeroImg({ hero }) {
        return heroImgUrlStart + hero + "_sb.png";
    }

    function getLargeHeroImg({ hero }) {
        return heroImgUrlStart + hero + "_sb.png";
    }




    const [heroPortrait, setHeroPortrait] = useState()
    //const [initialUrl, setInitialUrl] = useState("http://cdn.dota2.com/apps/dota2/images/heroes/")
    const [initialUrl, setInitialUrl] = useState("https://api.opendota.com/apps/dota2/images/heroes/")
    //https://api.opendota.com/apps/dota2/images/heroes/antimage_full.png?%22
    useEffect(
        axios.get(initialUrl + hero + "_sb.png").then(

        )
    )
}
