import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HeroList() {
    const [heroes, setHeroes] = useState([]);


    useEffect(() => {
        axios.get("https://api.opendota.com/api/heroes")
            .then((response) => setHeroes(response.data.results))
    })
}
    return (

    )

export default HeroList;