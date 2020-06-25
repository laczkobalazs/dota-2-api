import React, {useEffect, useState} from "react";

export function HeroPortrait(hero, size) {
    const heroImgUrlStart = "https://api.opendota.com/apps/dota2/images/heroes/"
    let heroImgUrl = "";
    switch (size) {
        case "small":
            heroImgUrl += heroImgUrlStart + hero + "_sb.png";
            break;
        case "large":
            heroImgUrl += heroImgUrlStart + hero + "_lg.png";
            break;
        case "full":
            heroImgUrl += heroImgUrlStart + hero + "_full.png";
            break;
        case "icon":
            heroImgUrl += heroImgUrlStart + hero + "_icon.png"
            break;
    }
    return heroImgUrl;
}
