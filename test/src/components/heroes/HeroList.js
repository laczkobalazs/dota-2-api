import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "../../layout/Card.js"

function HeroList() {
    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true)
        axios.get("https://api.opendota.com/api/heroes")
            .then((response) => {
                setLoading(false)
                setHeroes(response.data)
                console.log(heroes);
            })
    }, [])

    if (loading) return <h1 style={{ textAlign:"center" }}>Loading...</h1>

    //const style {}

    let content = "";

    if (heroes) {
        content = heroes.map((h) => {
                return <Card key={h.id} hero={h.name} heroName={h.localized_name}/>
            })
    }

    return (
        <div className="container-inner">
            <div className="section">
                <div className="hero-grid">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default HeroList;