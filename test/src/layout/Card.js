import React from "react";
import {Link, Route} from "react-router-dom";
import {HeroPortrait} from "../components/heroes/HeroPortrait"

function Card({hero, heroName}) {
    let heroNameStr = Object.values({hero}).toString().toLowerCase().replace("npc_dota_hero_", '');
    return (
        <div className="Card">
            <div className="Card_img">
                {/*<p>{heroName}</p>}*/}
                <Link to>

                </Link>
                <Link to={"/heroes/" + heroNameStr}><img src={"http://cdn.dota2.com/apps/dota2/images/heroes/" + heroNameStr + "_lg.png"} alt="no-img"/></Link>
                {/*<img src={HeroPortrait(heroNameStr, "small")} alt="no-img"/>*/}
            </div>
        </div>
    )
}

export default Card;
