import React, {useEffect, useState} from "react";
import {AxiosInstance as axios} from "axios";

export function HeroPortrait({ hero }) {
    const  heroImgUrlStart = "https://api.opendota.com/apps/dota2/images/heroes/"

    function getSmallHeroImg({ hero }) {
        return heroImgUrlStart + hero + "_sb.png";
    }

    function getLargeHeroImg({ hero }) {
        return heroImgUrlStart + hero + "_sb.png";
    }

    function getFullHeroImg({ hero }) {
        return heroImgUrlStart + hero + "_full.png";
    }

    function getHeroIcon({ hero }) {

    }
}
