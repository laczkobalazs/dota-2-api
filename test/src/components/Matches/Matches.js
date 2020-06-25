import React, {useState, useEffect} from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'

const Matches = props => {
    const [matches, setMatches] = useState([]);


    useEffect(() => {
        axios.get('https://api.opendota.com/api/proMatches')
            .then(result => {
                console.log("Fetching pro matches")
                setMatches(result.data)
                console.log(result.data)
            })
    }, [])



    return (
        <ul>
            <div className="listed-matches">
                {matches.map((m) => {
                    return <li style={{padding: '5px'}} key={m.match_id}> {m.radiant_name} <span> vs. </span> {m.dire_name}
                    <Link to={"/match/" + m.match_id } key ={m.match_id}> {m.match_id} </Link>
                    </li>
                })}
            </div>
        </ul>
    )
}

export default Matches;