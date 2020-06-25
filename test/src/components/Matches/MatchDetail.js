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
                <table>
                    <thead>
                    <div className="team-name">
                        <td>
                            {match.radiant_team.name}
                        </td>
                        <td>
                            <span> vs </span>
                        </td>
                        <td>
                            {match.dire_team.name}
                        </td>
                    </div>
                    </thead>
                    <tbody>
                    <div className="team-logo">
                        <td>
                            {<img src={match.radiant_team.logo_url} alt=""/>}
                        </td>
                        <td>
                            {<img src={match.dire_team.logo_url} alt=""/>}
                        </td>
                    </div>
                    </tbody>
                </table>
            </div>

    }

    return (
        <div className="match-container">
            {content}
        </div>
    )

}

export default MatchDetail;