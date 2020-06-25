import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import Card from "../../layout/Card.js"
import {HeroListContext} from "../../context/HeroListContext";

function HeroList() {
    const [loading, setLoading] = useState(true)
    //setLoading(true)
    const heroes = useContext(HeroListContext)
    //if (loading) return <h1 style={{ textAlign:"center", color: '#f1f1g7' }}>Loading...</h1>
    //setLoading(false)
    //if (heroes) {setLoading(false)}

    const flexContainer= {
        display: 'flex',
        flexWrap: 'wrap',
        width: '90%',
        justifyContent: "flex-left",
        margin: 'auto',
        paddingTop: '30px',
        background: '#242F39',
    }

    const flexDivStyle = {
        display: 'inline-block',

    }

    const outerContainerStyle = {
        background: '#242F39',
        margin: '0',
        padding: '0',
    }

    let content = "";
    if (heroes) {
        content = heroes.map((h) => {
                return <Card style={flexDivStyle} key={h.id} hero={h.name} heroName={h.localized_name}/>
            })
    }

    return (
        <div style={outerContainerStyle} className="outerContainer">
            <div className="flexContainer">
                <div style={flexContainer} className="heroGrid">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default HeroList;
