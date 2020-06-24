import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "/layout/Card"

function HeroList() {
    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true)
        axios.get("https://api.opendota.com/api/heroes")
            .then((response) => {
                setLoading(false)
                setHeroes(response.data.results)
            })
    }, [])

}
    return (
        <div>
            {heroes.map((h) => {
                //return <Card key={h.id} hero={h.localized_name}/>
                return <div>hero={localized_name}</div>
            })}
        </div>
    )

export default HeroList;