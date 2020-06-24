import React from "react";


function Card({ hero, heroName}) {
    let heroNameStr = Object.values({hero}).toString().toLowerCase().replace("npc_dota_hero_", '');

    const flexContainer = {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 3,
        flexDirection: 'row',
        width: '1000px',
        justifyContent: "center"
    }

    const flexDivStyle = {
        display: 'inline-block',
        background: '#f1f1f1',
        width: '10px',
        flex: 10,
        flexGrow: 1,

    }

    return (
        <div style={flexContainer} className="Card">
            <div style={flexDivStyle} className="Card_img">
                <p>{heroName}</p>
                <img src={"http://cdn.dota2.com/apps/dota2/images/heroes/"+ heroNameStr +"_lg.png"} alt="kép"/>
            </div>
            <div style={flexDivStyle}>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
        </div>
    )
}

export default Card;
