import React from "react";


function Card({ hero, heroName }) {
    let heroNameStr = Object.values({hero}).toString().toLowerCase().replace("npc_dota_hero_", '');
    return (
        <div className="Card">
            <div  className="Card_img">
                {/*<p>{heroName}</p>}*/}
                <img src={"http://cdn.dota2.com/apps/dota2/images/heroes/"+ heroNameStr +"_lg.png"} alt="kép"/>
            </div>
        </div>
    )
}

export default Card;
