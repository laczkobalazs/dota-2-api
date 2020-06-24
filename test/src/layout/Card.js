import React from "react";


function Card({ hero, heroName}) {
    let heroNameStr = Object.values({hero}).toString().toLowerCase().replace("npc_dota_hero_", '');

    const flexContainer= {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '90%',
        justifyContent: "center",
        margin: 'auto',
        flexBasis: 'auto'
    }

    const flexDivStyle = {
        display: 'inline-block',
        background: '#f1f1f1',
        width: '30px'



    }

    return (
        <div style={flexContainer} className="Card">
            <div style={flexDivStyle} className="Card_img">
                {/*<p>{heroName}</p>}*/}
                <img src={"http://cdn.dota2.com/apps/dota2/images/heroes/"+ heroNameStr +"_lg.png"} alt="kép"/>
            </div>

        </div>
    )
}

export default Card;
