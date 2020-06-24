import React, {useEffect, useState} from "react";
import {AxiosInstance as axios} from "axios";

function getHeroPortrait({hero}) {
    const [heroPortrait, setHeroPortrait] = useState()
    const [initialUrl, setInitialUrl] = useState("http://cdn.dota2.com/apps/dota2/images/heroes/")

    useEffect(
        axios.get(initialUrl).then()
    )
}