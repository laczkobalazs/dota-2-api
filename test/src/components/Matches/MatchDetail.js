import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router'

function MatchDetail() {
    const [match, setMatch] = useState(null);

    let {id} = useParams();

    useEffect(() => {
        const url = " https://api.opendota.com/api/matches/"
        console.log("Fetching " + id + "match")
        axios.get(url + id)
            .then(res => {
                setMatch(res.data)
            })
            .catch(reason => console.log(reason))
    }, [id])

    let content = ""

    if (match) {
        content =
            <div className="team-container">
                <div className="team-name">
                    {match.radiant_team.name}
                    <span>.vs</span>
                    {match.dire_team.name}
                </div>
                <div className="team-logo">
                    {<img src={match.radiant_team.logo_url} alt=""/>}
                    {<img src={match.dire_team.logo_url} alt=""/>}
                </div>
            </div>

    }

    return (
        <div className="match-container">
            {content}
        </div>
    )

}

export default MatchDetail;